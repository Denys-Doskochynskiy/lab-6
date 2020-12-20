
import './App.css';
import NavigationSection from './component/navigation-section';
import Header from './component/Header/header';
import AboutUs from './component/Layout/about-us';
import TopProduct from './component/Layout/top-product';
import Footer from './component/Footer/footer';
import Line from './component/line';
import React from "react";
import Buy from './component/buy'

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MangasList from "./component/manga-list";
import LineMidl from './component/line-midl';
import CartHeader from './component/Header/cart-header'
import { BrowserRouter as Router,Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Catalog from './component/Header/catalog'
import Cart from './component/cart'
function App() {


  return (

    <Router>
  
        <div className="App">

          <Route exact path='/' component={Header} />
          <Route exact path='/catalog' component={Catalog} />
       
          <Route exact path='/cart' component={CartHeader} />
          <Line />

          <NavigationSection />
          <LineMidl />
          <Switch>
          <Route exact path={["/catalog"]} component={MangasList} />
          <Route path={["/catalog/info"]} component={MangasList} />
          <Route exact path={["/cart"]} component={Cart} />
          <Route exact path={["/buy"]} component={Buy} />
          </Switch>
          <Route exact path='/' component={AboutUs} />

          <LineMidl />

          <Route exact path='/' component={TopProduct} />
          <Line />
          <Footer />

        </div>


    </Router>

  );

}

export default App

