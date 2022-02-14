const APIURL = 'https://api.github.com/users/'
const main = document.getElementById('main')
const form = document.getElementById('form')

const getData = async (url)=>{
        let data = await axios.get(url)
        return data
}

const card = (user, avatar, bio, followers, following, repos)=>{
    element = `<div class="card">
    <img src=${avatar} alt="" class="avatar">
    <div class="user-info">
    <h2>${user}</h2>
    ${bio}
    <ul>
        <li><strong>${followers.length}</strong>Followers</li>
        <li><strong>${following.length}</strong>Following</li>
        <li><strong>${repos.length}</strong>Repos</li>
    </ul>
    <a href=${repos[0].html_url} class="repo">${repos[0].name}</a>
    <a href=${repos[1].html_url} class="repo">${repos[1].name}</a>
    <a href=${repos[2].html_url} class="repo">${repos[2].name}</a>
    <a href=${repos[3].html_url} class="repo">${repos[3].name}</a>
    <a href=${repos[4].html_url} class="repo">${repos[4].name}</a>
    </div>
    </div>`
    return element
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const paintDom = async ()=>{
        try {

            let userData = await getData(`${APIURL}${form[0].value}`)
            if(userData.status === 200){
                let followers = await getData(userData.data.followers_url)
                let following = await getData(`${APIURL}${form[0].value}/following`)
                let repos = await getData(userData.data.repos_url)
        
                main.innerHTML = card(userData.data.name, userData.data.avatar_url, userData.data.bio, followers.data, following.data, repos.data)
            }
        } catch {
            main.innerHTML = '<div class="card"><h1>No profile with this username</h1></div>'
        }
    }
    paintDom()  
})