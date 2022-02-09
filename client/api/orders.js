import request from 'superagent'

const url = '/api/v1/orders/'

export function postOrder (order) {
  // const { name, quantity } = order
  return request
    .post(url)
    .send(order)
}
