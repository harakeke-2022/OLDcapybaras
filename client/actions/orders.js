export const PLACE_ORDERS = 'PLACE_ORDERS'
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS'
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS' 

import { getOrders, postOrder} from "../api/orders" 

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

export function fetchOrdersSuccess (orders) {
    return {
        type: FETCH_ORDER_SUCCESS,
        order: orders
    }
}

export function createOrder () {
    return (dispatch) => {
        return postOrder()
        .then(orders => {
            dispatch(placeOrder(orders))
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

export function fetchOrders () {
    console.log('hello')
    return (dispatch) => {
        return getOrders()
        .then((orders) =>
        { console.log(orders)
            dispatch(fetchOrdersSuccess(orders))
            return null 
        })
        .catch(err => {
        console.error(err)
        })
    }
}