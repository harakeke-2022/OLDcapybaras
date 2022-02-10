import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchOrders } from '../actions/orders'

import Order from './Order'

function OrderList ({ children }) {
  // console.log('hi: ', children)
  const orders = useSelector(state => state.orders) // goes in and grab the list of orders
  const dispatch = useDispatch() // pushes the order (updates state)
  useEffect(() => {
    dispatch(fetchOrders()) // func gets the list
  }, [])

  return (
    <div className='orderlist'>
      {children} { /* Holds the WaitIndicator */ }
      {orders?.map(order => { // gets mapped here
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
