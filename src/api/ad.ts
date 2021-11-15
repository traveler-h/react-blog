import request from '@request/require'

export function getAdList() {
  return request({
    url: '/getAdList',
    method: 'get'
  })
}