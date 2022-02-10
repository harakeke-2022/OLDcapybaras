import request from 'superagent'

export function postOrder () {
    return request.post('/api/v1/orders')
    .then((res) => res.body )
}

export function getOrders () {
    return request.get('/api/v1/orders')
    .then((res) => res.body)
}