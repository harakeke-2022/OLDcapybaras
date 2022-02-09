import request from 'superagent'

// TODO: Check that this post route is working
export function postOrder(orderRequest) {
  return request
    .post('/api/v1/orders')
    .set('Content-Type', 'application/json')
    .send(orderRequest)
    .then(res => res.body)
}
