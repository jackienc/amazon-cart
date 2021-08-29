import React from 'react'
import './CartTotal.css'
import NumberFormat from 'react-number-format';

function CartTotal({items}) {
    const getTotalPrice = () => {
        let total = 0;
        items.forEach((item) => {
            total += (item.price * item.quantity)
        });

        return total;
    }

    const getItemAmt = 
        items.reduce((acc,item) => acc + item.quantity,0)
       
    return (
        <div className="CartTotal">
            <h3>Subtotal ({getItemAmt} items):
                <span className="CartTotal-price">
                        <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
                </span>
            </h3>
            <button>
                Proceed to checkout
            </button>
        </div>
    )
}

export default CartTotal