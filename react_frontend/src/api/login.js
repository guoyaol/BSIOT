/*
import request from '@/utils/request'

export function reqLogin(data) {
  return request({
    url: 'http://localhost:8080/login',
    method: 'post',
    username: data.username,
    password: data.password
  })
}

export function reqLogout(data) {
  return request({
    url: '/logout',
    method: 'post',
    data
  })
}*/
import request from '@/utils/request'
import Password from 'antd/lib/input/Password';
import axios from "axios";

export function reqLogin(data) {
  console.log("login API used")
  console.log(data)
  axios.post('http://localhost:8080/login',{
    username : data.username,
    password : data.password,
  }).then(response => (console.log(response))).catch(function (error) { // 请求失败处理
    console.log(error);});


  return request({
    url: '/login',
    method: 'post',
    data
  })

}

export function reqLogout(data) {
  axios.post('http://localhost:8080/logout',{
  }).then(response => (console.log(response))).catch(function (error) { // 请求失败处理
    console.log(error);});
  console.log("logout API used")

  
  return request({
    url: '/logout',
    method: 'post',
    data
  })
}