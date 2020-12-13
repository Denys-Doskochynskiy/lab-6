import React, { useState } from "react";

import { useList } from "react-firebase-hooks/database";
import TutorialDataService from "../services/Service";
import NavigationButton, { NavigationButtonBuy } from './manga-list-button'
import Manga from './manga'
import './style/catalog.css';
import InfoItem from "./info-item"
import {
  Route
} from "react-router-dom";
import {addItem,loadCurrentItem} from "../reducers/Add-item-to-cart"
import {Provider} from 'react-redux'
import store from '../reducers/store'
import { BrowserRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import Cart from '../component/cart'

const MangasList = ({products,addItem}) => {
  // const counter=useSelector(state=>state.counter)
  // const dispatch = useDispatch()
  // console.log(counter)



  // var [tutorials, loading] = useList(TutorialDataService.getAll());



  const [title, setTitle] = useState('')

  const [filter, setFilter] = useState('')


  console.log(filter)
  
  var test = products.filter(tutorial => tutorial.name.toLowerCase().includes(title))
  products = test;

  var testFilter = products.filter(tutorial => tutorial.rating.includes(filter))
  products= testFilter;



  return (
    
    <div className="catalog-container">
      <div className="catalog-body">
     
        <Route exact path={["/catalog/cart"]} >
            <Cart  />

          </Route>
          <Route path={["/catalog/info"]} >
            <InfoItem manga={products} />

          </Route>
          <Route exact path={["/catalog"]}>
          
            <p className="find-text">Find:</p>
            <input id="find" type="text" className="find-magazin" onChange={event => setTitle(event.target.value)} />
            <p className="filter-text">Filter:</p>
            <select name="filter" class="filter-block" onChange={event => setFilter(event.target.value)}>
              <option id="sortOption"></option>

              <option id="sortOption" value="5">Rating:5+</option>
              <option id="sortOption" value="4">Rating:4-5</option>
              <option id="sortOption" value="3" >Rating:3-4</option>
              <option id="sortOption" value="2">Rating:2-3</option>


            </select>
            
            <ul
              className={"grid-list"}
            >
              {
                products.map((tutorial) => (
                 <Manga key={tutorial.id} tutorial={tutorial}></Manga>
                ))}
            </ul>
          </Route>
      

      </div>

    </div>
  

  );
};
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  }
}


export default connect(mapStateToProps)( MangasList);

