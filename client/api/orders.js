import request from 'superagent'

const orderUrl = '/api/v1/orders/'

export function postOrder(orders) {
    return request
        .post(orderUrl)
        .send(orders)  
}


export function getOrders() {
    return request
        .get(orderUrl)
        .then(res => res.body)
}