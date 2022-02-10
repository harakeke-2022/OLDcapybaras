import { getOrders, postOrder } from '../api/orders'
export const PLACE_ORDER_PENDING = 'PLACE_ORDER_PENDING'
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS'
export const FETCH_ORDER_PENDING = 'FETCH_ORDER_PENDING'
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS'

export function placeOrderPending () {
  return {
    type: PLACE_ORDER_PENDING
  }
}

export function placeOrderSuccess (order) {
  return {
    type: PLACE_ORDER_SUCCESS,
    order
  }
}

export function placeOrder (order) {
  return (dispatch) => {
    dispatch(placeOrderPending())
    return postOrder(order)
      .then(() => {
        dispatch(placeOrderSuccess(order))
        history.pushState('./orders', order)
        return null
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export function fetchOrderPending () {
  return {
    type: FETCH_ORDER_PENDING
  }
}

export function fetchOrderSuccess (orders) {
  return {
    type: FETCH_ORDER_SUCCESS,
    orders
  }
}

export function fetchOrders () {
  return (dispatch) => {
    dispatch(fetchOrderPending())
    return getOrders()
      .then((orders) => {
        dispatch(fetchOrderSuccess(orders))
        return null
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
