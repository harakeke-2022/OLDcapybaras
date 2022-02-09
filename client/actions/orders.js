import { postOrder, getOrders } from '../api/orders';

export const PLACE_ORDERS_PENDING = 'PLACE_ORDERS_PENDING'
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS'

export function placeOrdersPending() {
    return {
        type: PLACE_ORDERS_PENDING,
    }
}

export function placeOrdersSuccess(condition) {
    return {
        type: PLACE_ORDER_SUCCESS,
        condition: condition
    }
}

export function placeOrder(orders) {
    console.log('hey from Action/orders FIRST', orders);
    return (dispatch) => {
        dispatch(placeOrdersPending())
        return postOrder(orders)
            .then(() => {
                dispatch(placeOrdersSuccess(true))

                return null
            })
            .catch(error => {
                console.error(error)
            })
    }
}

export function fetchOrders() {
    return (dispatch) => {
        dispatch(placeOrdersPending())
        return getOrders()
            .then(() => {
                dispatch(placeOrdersSuccess(true))
                return null
            })
            .catch(error => {
                console.error(error)
            })
    }
}