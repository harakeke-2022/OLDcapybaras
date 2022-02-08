import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addToCart } from '../actions/cart'
import { fetchProducts } from '../actions/products'

import ProductListItem from './ProductListItem'

// deconstructing the product lists so that all keys are within props
function ProductList (props) {
  const { children, history } = props
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  // useEffect allows you to perform a side effect within the function
  // runs after every completed render
  useEffect(() => {
    // dispatches an action, and triggers a state change 
    dispatch(fetchProducts())
  }, [])

  function addProductToCart (product) {
    const { id, name } = product
    const newCartItem = { id, name }
    dispatch(addToCart(newCartItem))
    history.push('/cart')
  }

  return (
    <div className='productlist'>
      <div className='welcome'>
        <p>
          Welcome! Please choose from our delicious selection and don&apos;t
          hesitate to let us know if we can answer any of your questions.
        </p>
      </div>
      {children} {/* This holds the WaitIndicator (from App) */}
      {products.map(product => {
        return (
          <ProductListItem
            key={product.id}
            product={product}
            addToCart={addProductToCart}
          />
        )
      })}
    </div>
  )
}

export default ProductList
