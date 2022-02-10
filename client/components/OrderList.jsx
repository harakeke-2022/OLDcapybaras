import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../actions/orders'

import Order from './Order'

function OrderList ({ children }) {
  const dispath = useDispatch()
  const orders = useSelector(state => state.orders)

  useEffect(() => {
    const action = fetchOrders()
    dispath(action)
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
