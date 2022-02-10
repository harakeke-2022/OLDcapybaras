import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

//  ===================================
// STRETCH GOAL : use <Routes> </Routes> in App.component
// WEEK4 WED-AM
// npm i install
// npm i react-router-dom to install latest 
// newHook
// useNavigate 
// "history" was old vergion(version 5) of navigate
//  ===================================

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

    event.preventDefault()
    dispatch(placeOrder(cart))

    history.push('/orders');
    // other way:  props.history('/orders')

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
