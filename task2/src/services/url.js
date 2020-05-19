import axios from 'axios';

const url = (serachItem) => {
  // const getMovieList = (serachItem) => {
    return axios.get(`http://www.omdbapi.com/?s=${serachItem}&apikey=6209a0a2`)
  // }
}

export default url;