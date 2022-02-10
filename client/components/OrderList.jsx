import React, { useEffect } from 'react'
import Order from './Order'

import { useSelector, useDispatch } from 'react-redux'

import { fetchOrders } from '../actions/orders'


function OrderList({ children }) {
  // const orders = []
  const orders = useSelector(state => state.orders)

  // orders = useSlector(state => state.orders)
  console.log('hey', orders);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOrders())
  }, [])



  return (
    <div className='orderlist'>
      {children} { /* Holds the WaitIndicator */}
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
