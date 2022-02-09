import { postOrder } from '../api/orders'
import { showError } from '../actions/error'

export const PLACE_ORDER_PENDING = 'PLACE_ORDER_PENDING'
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS'

// it should dispatch a pending action, so the user gets feedback that something is happening
// then use the postOrder function from client/api/orders.js to make the POST request.
export function placeOrderPending() {
  return {
    type: PLACE_ORDER_PENDING
  }
}

export function placeOrderSuccess(orders) {
  return {
    type: PLACE_ORDER_SUCCESS,
    orders: orders
  }
}


export function placeOrder(cart) {
  return (dispatch) => {

    dispatch(placeOrderPending())
    return postOrder(cart)

      .then((orders) => {
        dispatch(placeOrderSuccess(orders))
        //  to redirect the user to the My Orders page

        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
