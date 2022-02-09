import request from 'superagent'

// create a postOrder function that uses superagent to make a POST request to the route you just made.

export function postOrder (order) {
  return request
    .post('/api/v1/orders/')
    .send(order)
}