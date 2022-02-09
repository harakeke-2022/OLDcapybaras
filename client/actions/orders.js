import { postOrder } from '../api/orders'

export const PLACE_ORDERS = 'PLACE_ORDERS'
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCES'

export function placeOrder (order) {
  return {
    type: PLACE_ORDERS,
    order: order
    
  }
}

export function placeOrderSuccess(){
  return {
    type: PLACE_ORDER_SUCCESS,
}
}

export function makeOrder() {
  return (dispatch) => {
    return postOrder()
      .then(order => {
        dispatch(placeOrder(order))
        return null 
      })
      .then(() => {
        dispatch(placeOrderSuccess())
        return null
      })
     
      .catch(err => {
      console.error(err)
    })
  }
}



// export function fetchFilms () {
//   return (dispatch) => {
//     dispatch(setIndicator(true))
//     return getFilms()
//       .then(films => {
//         dispatch(addFilms(films))
//         dispatch(setIndicator(false))
//         return null
//       })
//       .catch(error => {
//         console.error(error)
//       })
//   }
// }
