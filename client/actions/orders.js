import { postOrder } from '../api/orders';
// import { watiting } from '../reducers/waiting'
// import { listOrders } from '../reducers/cart'
export const SHOW_DONE = 'SHOW_DONE'


export function showDone(success) {
    return {
        type: SHOW_DONE,
        success
    }
}
export const PLACE_ORDERS_PENDING = 'PLACE_ORDERS_PENDING'
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS'

export function placeOrdersPending() {
    return {
        type: PLACE_ORDERS_PENDING
    }
}

export function placeOrdersSuccess(orders) {
    return {
        type: PLACE_ORDER_SUCCESS,
        orders
    }
}


export function placeOrder(orders) {
    console.log('hey from Action/orders FIRST', orders);
    return (dispatch) => {
        // showDone(false)
        // dispatch(placeOrdersPending())
        // dispatch(listOrders(orders))
        return postOrder(orders)
            .then(() => {
                dispatch(placeOrdersSuccess(true))
                dispatch(showDone(true))
                return null
            })
            .catch(error => {
                console.error(error)
            })
    }
}

