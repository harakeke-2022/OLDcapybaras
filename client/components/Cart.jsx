import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import CartItem from './CartItem'

import { placeOrder } from '../actions/orders'

// import { useHistory } from "react-router-dom";


function Cart(props) {
  // let history = useHistory();
  const { children, history } = props
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()
  // using "dispatch" instead of useState
  // BEFORE:const [orders, setOrders] = useState({ id: 1, quantity: 0 })

  function submitCart(event) {
    console.log('history', history)
    event.preventDefault()
    dispatch(placeOrder(cart))
    history.push('/orders');

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
