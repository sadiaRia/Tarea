import axios from 'axios';

const groceryList = () => {
  return axios.get(`https://test-schema.herokuapp.com/vegetables`)
}

export default groceryList;