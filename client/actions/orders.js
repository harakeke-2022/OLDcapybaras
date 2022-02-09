import { postOrder } from "../api/orders";
import { fetchProductsPending } from '../actions/products'
import { async } from "regenerator-runtime";


export const ADD_ORDER_PENDING = 'ADD_ORDER_PENDING'
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS'

export function addOrderPending () {
    return {
        type: ADD_ORDER_PENDING
    }
}

export function addOrderSuccess (order) {
    return {
        type: ADD_ORDER_SUCCESS,
        order
    }
}

export function placeOrder (order) {
    return async (dispatch) => {
        dispatch(addOrderPending())
        try {
            const orders = await postOrder(order);
            dispatch(addOrderSuccess(order));
            // window.location = 'http://localhost:3000/orders'
            return null;
        } catch (error) {
            console.log(error);
        }
    }
}

// export function fetchOrders () {
//     return async (dispatch) => {
//         dispatch(fetchProductsPending(true))
//         try {
//             const orders = await postOrder();
//             dispatch(placeOrder(orders));
//             dispatch(fetchProductsPending(false));
//             return null;
//         } catch (error) {
//             console.error(error);
//         }
//     }
// }