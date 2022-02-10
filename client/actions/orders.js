import { postOrder } from '../api/orders'
export const PLACE_ORDER_PENDING = 'PLACE_ORDER_PENDING'
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS'

export function placeOrderPending () {
  return {
    type: PLACE_ORDER_PENDING
  }
}

export function placeOrderSuccess () {
  return {
    type: PLACE_ORDER_SUCCESS
  }
}

export function placeOrder (order) {
  return (dispatch) => {
    dispatch(placeOrderPending())
    return postOrder(order)
      .then(() => {
        dispatch(placeOrderSuccess())
        history.pushState('./orders')
        return null
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
