import { postOrder } from '../api/orders'
/// GET PRODUCTS IS A PRODUCTS GET CALL....

import { showError } from '../actions/error'

export const FETCH_ORDER_PENDING = 'FETCH_ORDER_PENDING'
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS'

export function fetchOrderPending () {
  return {
    type: FETCH_ORDER_PENDING
  }
}

export function fetchOrderSuccess () {
  return {
    type: FETCH_ORDER_SUCCESS
  }
}

export function addOrder (order, location) {
  return (dispatch) => {
    dispatch(fetchOrderPending())
    return postOrder(order)
      .then((order) => {
        console.log('prehaps your order had been added to the DB', order)
        dispatch(fetchOrderSuccess())
        location.push('/')
// history.push('/') is probably more correct 
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
