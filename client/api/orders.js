import request from 'superagent'

const url = '/api/v1/orders'

export function postOrder (order) {
  const { id, quantity } = order
  return request.post('api/v1/orders')
    .post(url)
    .send({ id, quantity })
}
