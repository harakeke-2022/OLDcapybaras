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

export default function placeNewOrder (order) {
  return (dispatch) => {
    console.log('action', order)
    dispatch(placeOrderPending())
    return postOrder(order)
      .then(() => {
        dispatch(placeOrderSuccess())
        console.log('order is added to db')
        window.location = 'http://localhost:3000/orders'
        return null
      })
      .catch(error => {
        console.error(error)
      })
  }
}
postOrder()
