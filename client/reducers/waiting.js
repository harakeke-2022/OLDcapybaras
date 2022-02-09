import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS } from '../actions/products'
import { ADD_ORDER_PENDING, ADD_ORDER_SUCCESS, FETCH_ORDER_PENDING, FETCH_ORDER_SUCCESS, PUT_ORDER_PENDING, PUT_ORDER_SUCCESS } from '../actions/orders'
import { SHOW_ERROR } from '../actions/error'

function waiting (state = false, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return true

    case ADD_ORDER_PENDING:
      return true

    case FETCH_ORDER_PENDING:
      return true

    case PUT_ORDER_PENDING:
      return true

    case FETCH_PRODUCTS_SUCCESS:
    case SHOW_ERROR:
      return false

    case ADD_ORDER_SUCCESS:
      return false

    case FETCH_ORDER_SUCCESS:
      return false

    case PUT_ORDER_SUCCESS:
      return false

    default:
      return state
  }
}

export default waiting
