import { postOrder } from '../api/orders';


export function addOrder(orderRequest) {
    // remove item names from order (we have the id)
    const order = orderRequest.map((item) => {
        return {
            id: item.id,
            quantity: item.quantity
        }
    })
}

export function placeOrder(orders) {
    console.log('hey from Action/orders FIRST', orders);
    return (dispatch) => {
        return postOrder(orders)
            .then(res => {
                console.log('hey from Action/orders', res.body, res, orders);
                dispatch(addOrder(orders))
                return null
            })
            .catch(error => {
                console.error(error)
            })
    }
}

