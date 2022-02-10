import { postOrder } from '../api/orders'

export const ORDER_PENDING = 'ORDER_PENDING'
export const ORDER_SUCCESS = 'ORDER_SUCCESS'

export function orderPending () {
  return {
    type: ORDER_PENDING
  }
}

export function orderSuccess () {
  return {
    type: ORDER_SUCCESS
  }
}

export function placeOrder (order) {
  return (dispatch) => {
    dispatch(orderPending())
    return postOrder(order)
      .then(() => {
        console.log('hello')
        dispatch(orderSuccess())
        return null
      })
      .catch(error => {
        console.error(error)
      })
  }
}
