import { postOrder } from '../api/orders'

export const PLACE_ORDERS = 'PLACE_ORDERS'
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCES'

// dispatch a pending action
export function orderPending () {
    return {
      type: ORDER_PENDING
    }
  }
  
  export function placeOrder (order) {
    return (dispatch) => {
      console.log('action', order)
      dispatch(orderPending())
      return postOrder(order)
        .then(() => {
          return orderSuccess()
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  // dispatch a success action
  export function orderSuccess () {
    return {
      type: ORDER_SUCCESS
    }
  }

