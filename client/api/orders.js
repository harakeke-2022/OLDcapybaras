import request from 'superagent'

export function postOrders (order) {
  return request.post('/api/v1/orders')
    .then(res => res.body)
    .send(order)
}
