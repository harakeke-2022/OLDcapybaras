export const PLACE_ORDERS = 'PLACE_ORDERS'
import { postOrder } from "../api/orders" 

export function placeOrder (order) {
    return {
        type: PLACE_ORDERS,
        order: order
    }
}

export function createOrder () {
    return (dispatch) => {
        return postOrder ()
        .then(order => {
            dispatch(placeOrder(order))
            return null 
        })
        .catch(err => {
            console.error(err)
        })
    }
}
