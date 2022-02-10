import { FETCH_ORDER_SUCCESS } from '../actions/orders'

function orders (state = [], action) {
  switch (action.type) {
    case FETCH_ORDER_SUCCESS:
      return action.orders

    default:
      return state
  }
}
export default orders
