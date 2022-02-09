import { FETCH_ORDER_SUCCESS, PUT_ORDER_SUCCESS } from '../actions/orders'

function orders (state = [], action) {
  switch (action.type) {
    case FETCH_ORDER_SUCCESS:
      return action.orders

    case PUT_ORDER_SUCCESS:
      return state.map(order => {
        if (order.id === action.order.id) {
          return { ...order, status: action.order.newStatus }
        } else { return order }
      })

    default:
      return state
  }
}

export default orders
