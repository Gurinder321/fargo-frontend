import axios from 'axios'

  const  baseURL = "http://localhost:8800/api/";

export async function createUser(data) { 
    axios
    .post(`${baseURL}auth/register`, data)
    .then((response) => {
      console.log(response.data);
    });    
}