export const PLACE_ORDERS = 'PLACE_ORDERS'
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS'

import { postOrder } from "../api/orders" 

export function placeOrder (order) {
    return {
        type: PLACE_ORDERS,
        order: order
    }
}

export function placeOrderSucess() {
    return {
        type: PLACE_ORDER_SUCCESS
    }
}


export function createOrder () {
    return (dispatch) => {
        return postOrder()
        .then(order => {
            dispatch(placeOrder(order))
        })
        .then(() => {
            dispatch(placeOrderSucess())
            return null
        })
        .catch(err => {
            console.error(err)
        })
    }
}
