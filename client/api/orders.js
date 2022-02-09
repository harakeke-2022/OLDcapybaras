import request from 'superagent'

export function postOrder () {
  return request.get('/api/v1/products')
    .then((res) => res.body)
}
