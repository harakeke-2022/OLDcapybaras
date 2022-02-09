import { postOrder } from '../api/orders'
import { showError } from './error'

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

export function placeOrder () {
  return (dispatch) => {
    dispatch(placeOrderPending())
    return postOrder()
      .then(() => {
        dispatch(placeOrderSuccess())
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
