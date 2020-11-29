import React, { useState } from "react";

import { useList } from "react-firebase-hooks/database";
import TutorialDataService from "../services/Service";
import NavigationButton, { NavigationButtonBuy } from './manga-list-button'

import './style/catalog.css';
import InfoItem from "./info-item"
import {
  useParams,
  Route
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
const MangasList = () => {


  var [tutorials, loading] = useList(TutorialDataService.getAll());
  const [title, setTitle] = useState('')

  const [filter, setFilter] = useState('')
  console.log(filter)
  var test = tutorials.filter(tutorial => tutorial.val().name.toLowerCase().includes(title))
  tutorials = test;

  var testFilter = tutorials.filter(tutorial => tutorial.val().rating.includes(filter))
  tutorials = testFilter;



  return (
    <div className="catalog-container">
      <div className="catalog-body">
        <BrowserRouter>
          <Route path={["/catalog/info"]} >
            <InfoItem manga={tutorials} />

          </Route>
          <Route exact path={["/catalog"]}>
            {loading && <div class="loader"></div>}
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
              {!loading &&
                tutorials &&
                tutorials.map((tutorial) => (
                  <border-box>
                    <iframe className="img-catalog" src={tutorial.val().img} height="330" width="250" frameborder="0" scrolling="no"> </iframe>
                    <text>
                      <NavigationButton rref={"/catalog/info/" + tutorial.val().id} />

                      <p className="p-text" text-align="center">Name: {tutorial.val().name}</p>
                      <p className="p-text" text-align="center">Producer: {tutorial.val().producer}</p>
                      <p className="p-text" text-align="center">Rating: {tutorial.val().rating}</p>
                      <p className="p-text" text-align="center"  >Price {tutorial.val().price}</p>

                      <NavigationButtonBuy class="a-buy" rref={"/buy/" + tutorial.val().id} text="Buy" />
                    </text>

                  </border-box>

                ))}
            </ul>
          </Route>
        </BrowserRouter>
      </div>

    </div>
  );
};

export default MangasList;
