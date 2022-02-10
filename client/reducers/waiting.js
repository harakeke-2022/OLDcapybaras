import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS } from '../actions/products'
import { SHOW_ERROR } from '../actions/error'
import { FETCH_ORDER_SUCCESS } from '../actions/orders'

const initial = true

function waiting (state = initial, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return true

    case FETCH_PRODUCTS_SUCCESS:
    case FETCH_ORDER_SUCCESS:
    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting