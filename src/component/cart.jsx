import CartItem from './cart-item'
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import LineMidl from './line-midl'
import './style/Cart/cart.css'
function Cart({ cart }) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        });

        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    console.log(cart)
    return (

        <div className="cartInfo">

            <div className="cartItems">
                <ul
                    className={"grid-list-cart"}
                >
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </ul>
            </div>

<div className= "cartLine">

            <div className="totalInfo" >
                <p className="totalCount">
                    Total count item: {totalItems}
                </p>
                <p className="totalPrice">Total price: ${totalPrice}</p>
            </div>
            </div>
        </div>)
}
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Cart)