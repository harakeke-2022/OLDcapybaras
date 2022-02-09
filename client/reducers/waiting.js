import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS
} from '../actions/products'
import { POST_ORDER_PENDING, POST_ORDER_SUCCESS } from '../actions/orders'
import { SHOW_ERROR } from '../actions/error'

function waiting(state = false, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
    case POST_ORDER_PENDING:
      return true
    case POST_ORDER_SUCCESS:
    case FETCH_PRODUCTS_SUCCESS:
    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
