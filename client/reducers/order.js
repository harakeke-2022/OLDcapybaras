import { FETCH_ORDER_SUCCESS } from "../actions/orders"

const initial = []

function order (state = initial, action) {
    switch (action.type) {
        case FETCH_ORDER_SUCCESS:
            return action.order

        default:
            return state
            
    }

}

export default order