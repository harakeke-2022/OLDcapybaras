import request from 'superagent'

const url = '/api/v1/orders/'

export function postOrder (order) {
  return request
    .post(url)
    .send(order)
}

export function getOrders () {
  return request.get(url)
    .then((res) => res.body)
}

export function putOrder (theOrder) {
  return request.put(url)
    .send(theOrder)
    .then((res) => res.body)
}
