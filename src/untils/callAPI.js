import axios from 'axios'

export default function callApi(endpoint, method = 'GET', body, header) {
  return axios({
    method: method,
    //url: `https://book-store-api-moyy.onrender.com/api${endpoint}`,
    url: `${process.env.REACT_APP_BASE_URL}${endpoint}`,
    data: body,
    headers: header
  }).catch((err) => {
    console.log(err)
  })
}
