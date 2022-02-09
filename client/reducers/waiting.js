import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS } from '../actions/products'
import { PLACE_ORDER_PENDING, PLACE_ORDER_SUCCESS } from '../actions/orders'
import { SHOW_ERROR } from '../actions/error'

function waiting (state = false, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return true

    case FETCH_PRODUCTS_SUCCESS:

      break
    case PLACE_ORDER_PENDING:
      return true
    case PLACE_ORDER_SUCCESS:
      break

    case SHOW_ERROR:
      return false
    default:
      return state
  }
}

export default waiting
