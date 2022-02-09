import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS } from '../actions/products'
import { PLACE_ORDERS_PENDING, PLACE_ORDER_SUCCESS } from '../actions/orders'
import { SHOW_ERROR } from '../actions/error'

function waiting(state = false, action) {
  console.log(state, action)
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
    case PLACE_ORDERS_PENDING:
      return true

    case FETCH_PRODUCTS_SUCCESS:
    case SHOW_ERROR:
    case PLACE_ORDER_SUCCESS:
      return false

    default:
      return state
  }
}

export default waiting
