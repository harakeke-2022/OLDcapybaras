import { FETCH_ORDERS_SUCCESS } from '../actions/orders'



function orders(state = [], action) {
    switch (action.type) {
        case FETCH_ORDERS_SUCCESS:
            return action.orderArray

        default:
            return state
    }
}
export default orders



//💜💜💜
//Also make sure to update the waiting reduce <== I didn't do this parts