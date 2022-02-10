import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Order from './Order'
import { fetchOrders } from '../actions/orders'

function OrderList ({ children }) {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.order)

  useEffect(()=> {
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
