import request from 'superagent'

export function postOrder(requestOrder) {
  return request
    .post('/api/v1/orders')
    .send(requestOrder)
}
