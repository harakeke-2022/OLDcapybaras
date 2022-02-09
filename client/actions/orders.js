import { postOrder } from '../api/orders'
import { showError } from '../actions/error'
import { placeOrderSuccess } from './cart'

export const POST_ORDER_PENDING = 'POST_ORDER_PENDING'
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS'

export function postOrderPending() {
  return {
    type: POST_ORDER_PENDING
  }
}

export function postOrderSuccess() {
  return {
    type: POST_ORDER_SUCCESS
  }
}

export function placeOrder(orderRequest) {
  return dispatch => {
    dispatch(postOrderPending())
    return postOrder(orderRequest)
      .then(res => {
        dispatch(postOrderSuccess())
        dispatch(placeOrderSuccess())
        return null
      })
      .catch(err => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
