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


// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'

// import { fetchFilms } from '../actions/films'
// import Indicator from './Indicator'

// function List () {
//   console.log('List is rendered')
//   const dispatch = useDispatch()
//   const filmState = useSelector(state => state.films)
//   const indicator = useSelector(state => state.indicator)

//   useEffect(() => {
//     const action = fetchFilms()
//     dispatch(action)
//   }, [])

//   return (<div className="list">
//     <h2 className="list-title">Films</h2>
//     {indicator && <Indicator />}
//     <div className='cards'>
//       {filmState.map(film =>
//         <div className='card' key={film.id}>
//           <h3>{film.name}</h3>
//           <p>{film.quote}</p>
//         </div>
//       )}
//     </div>
//   </div>)
// }

// export default List