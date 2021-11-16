import request from '@request/require'

export function getFiles() {
  return request({
    url: '/getList/file',
    method: 'get'
  })
}

export function uploadFile(data: any) {
  return request({
    url: '/upload/file',
    data,
    method: 'post'
  })
}

export function getDetail() {
  return request({
    url: '/getDetail/detail',
    method: 'get'
  })
}