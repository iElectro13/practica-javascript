const searchBar = document.getElementById('input')
const main = document.querySelector('.main')
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie/'
const BASE_IMG = 'https://image.tmdb.org/t/p/w500/'

const getMovies = async(url)=>{
    let data = await axios.get(url, {
        params: {
            api_key: '457dc7644e5f2b9c01e3c3cf6f6327a7',
            sort_by: 'popularity.desc'
        }
    })
    console.log(data)
}
getMovies(BASE_URL)