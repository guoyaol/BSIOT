import axios from '@/libs/api.request'

export const authlogin = (input_username, input_password) => {
  return axios.post('http://localhost:8080/login',
  {
    username: input_username,
    password: input_password
  })
}