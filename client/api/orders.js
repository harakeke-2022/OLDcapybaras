import request from 'superagent'

const url = '/api/v1/orders'

export function postOrder() {
  return request
  .post(url)
  .then((res) => res.body)
}