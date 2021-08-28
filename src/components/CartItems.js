import React from 'react'
import CartItem from './CartItem'
import './CartItems.css'

function CartItems({items}) {
    console.log('inside cart items component', items)
    return (
        <div className="CartItems">
        <h1>Shopping Cart</h1>
        <hr />
        <div className="CartItems-items">
            <CartItem />
        </div>
        </div>
    )
}

export default CartItems