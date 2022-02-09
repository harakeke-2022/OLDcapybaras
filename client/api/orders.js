import request from 'superagent'

export function postOrder (orderRequest) {
    return request.post('/api/v1/orders')
    .send(orderRequest)
}