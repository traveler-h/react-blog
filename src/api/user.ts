import request from '@request/require'

export function getUserInfo() {
  return request({
    url: '/getUserInfo',
    method: 'get'
  })
}