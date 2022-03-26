import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total += product.price * product.quantity;
        shipping += product.shipping;
    }
    let tax = (total * 0.1).toFixed(2);
    let grand = total + shipping + parseFloat(tax);
    return (
        <div className="cart">
            <h3>Oder Summery</h3>
            <p>Seleted Items:{quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge:   {shipping}</p>
            <p>Tax:{tax}</p>
            <h4>Grand Total:{grand.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;