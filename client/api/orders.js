import request from 'superagent'

export function postOrder() {
  return request.get('/api/v1/orders').then((res) => res.body)
}
