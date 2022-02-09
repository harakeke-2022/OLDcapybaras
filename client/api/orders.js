import request from 'superagent'

const orderUrl = '/api/v1/orders/'

export function postOrder(orders) {
    // const { name, quote } = orders //somthing form form get date. might be place order Array 
    console.log('this is from Api/orders', orders);
    return request
        .get(orderUrl)
        .send(orders)  //sending date somthing.......
        .then(res => res.body)
}
