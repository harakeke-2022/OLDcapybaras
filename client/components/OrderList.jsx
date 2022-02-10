import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Order from './Order'
import { fetchOrders } from '../actions/orders'


function OrderList({ children }) {
  const dispatch = useDispatch()
  const orderList = useSelector(state => state.orders)

  useEffect(() => {
    dispatch(fetchOrders())
  }, [])

  return (
    <div className='orderlist'>
      {children} { /* Holds the WaitIndicator */}
      {orderList.map(order => {
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
