import axios from '@/libs/api.request'

export const api_login = (uname,pword) => {
  return axios.post('http://localhost:8080/login',{
    username:uname,
    password:pword
  })
}

export const api_logout = () => {
    return axios.post('http://localhost:8080/logout')
  }