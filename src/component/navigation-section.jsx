
import '../component/style/HeaderFooter/navigation.css';
import NavigationButton from '../component/Header/navigation-button';

import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavigationSection({ cart }) {
    // const counter = useSelector(state => state.counter)
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });

        setCartCount(count);
    }, [cart, cartCount]);
    return (


        <div className="navigation-section">
            <img src="https://img.icons8.com/ios/75/000000/physics-book.png" className="img-section" alt="FUCK" />
            <div className="navigation">


                <Link to="/">
                    <NavigationButton class="home" text="Home" />
                </Link>
                <Link to="/catalog">
                    <NavigationButton class="catalog" text="Catalog" />
                </Link>

                <Link to="/cart">
                    <NavigationButton class="cart" text="Cart" />
                </Link>


                <p className="count">{cartCount}</p>
            </div>


        </div>


    );
}
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(NavigationSection)