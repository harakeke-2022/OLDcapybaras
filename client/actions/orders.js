import { postOrder, getOrders } from '../api/orders'
import { showError } from '../actions/error'

export const PLACE_ORDER_PENDING = 'PLACE_ORDER_PENDING'
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS'

export const FETCH_ORDER_PENDING = 'FETCH_ORDER_PENDING'
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS'

export function placeOrderPending () {
  return {
    type: PLACE_ORDER_PENDING
  }
}

export function placeOrderSuccess (orders) {
  return {
    type: PLACE_ORDER_SUCCESS,
    orders: orders
  }
}

export function placeOrder (order) { // comes from React (front end)
  return (dispatch) => {
    dispatch(placeOrderPending())
    return postOrder(order) // posted api (here)
      .then((orders) => {
        dispatch(placeOrderSuccess(orders))
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}

// ----- Fetch Orders -----
export function fetchOrderPending () {
  return {
    type: FETCH_ORDER_PENDING
  }
}

export function fetchOrderSuccess (orders) {
  return {
    type: FETCH_ORDER_SUCCESS,
    orders: orders
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
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
