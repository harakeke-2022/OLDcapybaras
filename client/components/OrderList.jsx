import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOrders } from '../actions/orders'

import Order from './Order'

function OrderList ({ children }) {
  const orders = useSelector(state => state.orders)
  const dispatch = useDispatch()

  useEffect(() => {
    const action = fetchOrders()
    dispatch(action)
  }, [])

  return (
    <div className='orderlist'>
      {children} { /* Holds the WaitIndicator */ }
      {orders?.map(order => {
        return (
          <Order
            key={order.id}
            order={order}
          />
        )
      })}
    </div>
  )
}

export default OrderList
