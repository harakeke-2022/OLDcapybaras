import request from 'superagent'

// create a postOrder function that uses superagent to make a POST request to the route you just made.

import request from 'superagent'

export function postOrders (order) {
  return request.post('/api/v1/orders')
    .then(res => res.body)
    .send(order)
}