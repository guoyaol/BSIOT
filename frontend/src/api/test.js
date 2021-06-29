import axios from '@/libs/api.request'

export const getT = (query) => {
  return axios.request({
    url: '/Users/guoyaoli/Documents/BSIOT/test_api/a.json',
    method: 'get'
  })
}
