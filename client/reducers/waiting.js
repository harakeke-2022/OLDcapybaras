import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS } from '../actions/products'
import { SHOW_ERROR } from '../actions/error'

// update the waiting reducer so it sets the state to true and false appropriately.
import { ADD_ORDER_PENDING, ADD_ORDER_SUCCESS } from '../actions/orders'



function waiting (state = false, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
    case ADD_ORDER_PENDING:
      return true 

    case FETCH_PRODUCTS_SUCCESS:
    case ADD_ORDER_SUCCESS:
    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

// original funcation
// function waiting (state = false, action) {
//   switch (action.type) {
//     case FETCH_PRODUCTS_PENDING:
//       return true

//     case FETCH_PRODUCTS_SUCCESS:
//     case SHOW_ERROR:
//       return false

//     default:
//       return state
//   }
// }

export default waiting
