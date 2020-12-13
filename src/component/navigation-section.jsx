
import '../component/style/HeaderFooter/navigation.css';
import NavigationButton from '../component/Header/navigation-button';
import store from '../reducers/store'
import { Provider } from 'react-redux'
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Route
} from "react-router-dom";
import { BrowserRouter as Router, Switch } from 'react-router-dom'
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
                        {/* <NavigationButton rref="/" class="home" text="Home" />
                        <NavigationButton rref="/catalog" class="catalog" text="Catalog" />
                        
                        <NavigationButton rref="/cart" class="cart" text="Cart" /> */}
                  
                                <Link to="/">
                        <NavigationButton class="home" text="Home" />
                        </Link>
                        <Link to="/catalog">
                        <NavigationButton class="catalog" text="Catalog" />
                        </Link>
                     
                        <Link to="/cart">
                        <NavigationButton  class="cart" text="Cart" />
                        </Link>
                        

                            <p className="count">{cartCount}</p>
                       
                        

                        {/* <a href="/" className="home">Home</a>
                <a href="/catalog"  className="catalog" >Catalog</a>
                <a href="/cart" className="cart">Cart</a> */}
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