import request from 'superagent'

export function postOrder () {
    return request.post('/api/v1/orders')
    .then((res) => res.body)
    .catch(errorHandler('POST', '/api/v1/orders'))
}

export function getOrders () {
    return request.get('/api/v1/orders')
    .then((res) => res.body)
    .catch(errorHandler('GET', '/api/v1/orders'))
}

export function patchOrders (id, status) {
    return request.patch('/api/v1/orders')
    .send({id, status})
    .then((res) => res.body)
    .catch(errorHandler('PATCH', '/api/v1/orders')) 
}


// `/api/v1/orders/${orders.id}`


// export function updatePost (post) {
//     // convert the large paragraphs string into an array of paragraphs
//     post.paragraphs = post.paragraphs.split('\n')
//     return request.patch(`/v1/posts/${post.id}`)
//       .send(post)
//       .then(res => {
//         validateNoSnakeCase(res.body)
//         validatePostResponse('PATCH', 'v1/posts/:id', res.body)
//         return res.body
//       })
//       .catch(errorHandler('PATCH', '/v1/posts/:id'))
//   }