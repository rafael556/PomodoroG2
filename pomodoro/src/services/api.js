import axios from 'axios'

// mudar baseURL
const api = axios.create({
  baseURL: 'http://localhost:8080'
})

export default api
