import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import { addOrder } from '../actions/orders'

import CartItem from './CartItem'

function Cart (props) {
  const { children, history } = props
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  function submitCart (event) {
    event.preventDefault()
    console.log('this is the event object from your cart comp', event);
/// the event pass we're putting here is just. 

    console.log('this is the cart coming from your cart comp', cart)
    console.log('this is props from cart comp:', history)
    return dispatch(addOrder(cart, history))
  }

  return cart.length
    ? (
      <div className='cart'>
        <table>
          <thead>
            <tr>
              <td role='columnheader'>Product</td>
              <td role='columnheader'>Quantity</td>
              <td role='columnheader'>Remove</td>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, id) => {
              return (
                <CartItem
                  key={id}
                  item={item}
                />)
            })}
          </tbody>
        </table>
        <p className='actions'>
          <Link to='/'>Continue shopping</Link>
          <span>
            {children} { /* Holds the WaitIndicator */}
            <button
              className='button-primary'
              onClick={submitCart}>
              Place Order
            </button>
          </span>
        </p>
      </div>
    )
    : <p>Your cart is empty! Start shopping <Link to='/'>here</Link></p>
}

export default Cart
