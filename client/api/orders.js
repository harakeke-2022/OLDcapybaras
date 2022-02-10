import request from 'superagent'

export function postOrder (order) {
  return request
    .post('/api/v1/orders')
    .send(order)
}

export function getOrders () {
  return request
    .get('api/v1/orders')
    .then(res => res.body)
}