import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS } from '../actions/products'
import { ORDER_PENDING, ORDER_SUCCESS } from '../actions/orders'
import { SHOW_ERROR } from '../actions/error'

function waiting (state = false, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
    case ORDER_PENDING:
      return true

    case FETCH_PRODUCTS_SUCCESS:
    case SHOW_ERROR:
    case ORDER_SUCCESS:
      return false

    default:
      return state
  }
}

export default waiting
