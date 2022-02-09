import { postOrder, getOrders, putOrder } from '../api/orders'
export const ADD_ORDER = 'ADD_ORDER'

export const ADD_ORDER_PENDING = 'ADD_ORDER_PENDING'
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS'
export const FETCH_ORDER_PENDING = 'FETCH_ORDER_PENDING'
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS'
export const PUT_ORDER_PENDING = 'PUT_ORDER_PENDING'
export const PUT_ORDER_SUCCESS = 'PUT_ORDER_SUCCESS'

export function addOrderPending () {
  return {
    type: ADD_ORDER_PENDING
  }
}

export function addOrderSuccess (order) {
  return {
    type: ADD_ORDER_SUCCESS,
    order
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

export function putOrderPending () {
  return {
    type: PUT_ORDER_PENDING
  }
}

export function putOrderSuccess (order) {
  return {
    type: PUT_ORDER_SUCCESS,
    order
  }
}

export function fetchOrders () {
  return (dispatch) => {
    dispatch(fetchOrderPending())
    return getOrders()
      .then((orders) => {
        console.log(orders)
        dispatch(fetchOrderSuccess(orders))
        return null
      })
  }
}

export function updateOrder (id, newStatus) {
  return (dispatch) => {
    const theOrder = {
      id,
      newStatus
    }
    dispatch(putOrderPending())
    return putOrder(theOrder)
      .then((order) => {
        // console.log(order)
        dispatch(putOrderSuccess(order))
        return null
      })
  }
}

export function placeOrder (order) {
  return (dispatch) => {
    dispatch(addOrderPending())
    return postOrder(order)
      .then(() => {
        dispatch(addOrderSuccess(order))
        window.location = 'http://localhost:3000/orders'
        return null
      })
      .catch(error => {
        console.error(error)
      })
  }
}
