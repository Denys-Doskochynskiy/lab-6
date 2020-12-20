import React, { useState } from "react";
import { connect } from "react-redux";
import { adjustItemQty, removeFromCart } from '../reducers/Add-item-to-cart'
function CartItem({ item, adjustQty, removeFromCart }) {
  var priceItem = item.qty * item.price
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };
  return (
    <div className="item-cart-info">
      <iframe className="img-catalog" src={item.img} height="380" width="300" frameborder="0" scrolling="no"> </iframe>


      <div className="cart-data">
        <div className="cart-item-name" >{item.name}</div>
        <div className="cart-item-button">

          <p className="qty-cart">How many?</p>
          <input className="qty-cart-controll"
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
          <button className="cartRemove" onClick={() => removeFromCart(item.id)}>Remove?</button>
        </div>

        <div className="cart-item-price">Price by this books:</div>
        <p className="cart-item-price">${priceItem}</p>
      </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};
export default connect(null, mapDispatchToProps)(CartItem)