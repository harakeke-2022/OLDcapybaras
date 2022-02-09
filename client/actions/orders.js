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


export function placeOrder() {
  return (dispatch) => {

    dispatch(placeOrderPending())
    return postOrder()
      .then((orders) => {
        dispatch(placeOrderSuccess(orders))
        return null
      })
      .catch((err) => {
        // if the error is from our routes, this will use the message our route
        // sends back, rather than the generic 'Internal Server Error' from a
        // status 500
        // if the error is from elsewhere in the Promise chain, there won't be
        // an err.response object, so we use err.message
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
