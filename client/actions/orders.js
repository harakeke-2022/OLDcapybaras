import { postOrder, getOrders } from '../api/orders';

export const PLACE_ORDERS_PENDING = 'PLACE_ORDERS_PENDING'
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS'
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS'


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


export function addOrderlist(orderArray) {
    return {
        type: FETCH_ORDERS_SUCCESS,
        orderArray
    }
}

export function placeOrder(orders) {
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
        return getOrders()
            .then((res) => {
                dispatch(addOrderlist(res))
                return getOrders()
            })
            .catch(error => {
                console.error(error)
            })
    }
}