
import './App.css';
import NavigationSection from './component/Header/navigation-section';
import Header from './component/Header/header';
import AboutUs from './component/Layout/about-us';
import TopProduct from './component/Layout/top-product';
import Footer from './component/Footer/footer';
import Line from './component/line';

import LineMidl from './component/line-midl';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Catalog_element from './component/Catalog/catalog-element'
import Catalog from './component/Header/catalog'

import React, { Component } from 'react';

function App () {

 
  
  return (
    <BrowserRouter>
    <div className="App">
   
    <Route exact path='/' component= {Header} />
    <Route exact path='/catalog' component= {Catalog} />
        
    
       
      <Line />

      <NavigationSection />
      <LineMidl />
      <Route exact path='/catalog' component= {Catalog_element} />
      <Route exact path='/' component= {AboutUs} />  
      <LineMidl />
    
      <Route exact path='/' component= {TopProduct} />   
      <Line />
      <Footer />
     
    </div>
    </BrowserRouter>
  );
  
}

 export default App
