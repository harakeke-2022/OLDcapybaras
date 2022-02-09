import request from 'superagent'

export function postOrder () {
    return request.post('/api/v1/orders')
    .then((res) => res.body )
}
