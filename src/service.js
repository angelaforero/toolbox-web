import axios from "axios";

//const API_URL = `${URL_API}/api`;

const fileList = () => {
  try {
      axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
      //axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`
      return axios.get(`http://localhost:3000/api/files/data`);
    } catch (error) {
      return Promise.reject('Catch ' + JSON.stringify(error));
    }
}

export {fileList};