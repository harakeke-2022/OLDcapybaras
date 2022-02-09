import request from 'superagent'

const url = '/api/v1/orders'

export function postOrder (order) {
  return request
    .post(url)
    .send(order) // to server
}
