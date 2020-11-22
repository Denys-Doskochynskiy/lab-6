import React, { useState, setState/* useEffect */ } from "react";
import { useList } from "react-firebase-hooks/database";
import TutorialDataService from "../services/Service";
import NavigationButton,{NavigationButtonBuy} from './manga-list-button'


import './style/catalog.css';

const MangasList = () => {

  var [tutorials, loading] = useList(TutorialDataService.getAll());
  const [title, setTitle] = useState('')



  console.log(title)
  var test = tutorials.filter(tutorial => tutorial.val().name.toLowerCase().includes(title))
  tutorials = test;



  return (
    <div className="catalog-container">
      <div className="catalog-body">
        {loading && <div class="loader"></div>}
        <p className="find-text">Find:</p>
        <input id="find" type="text" className="find-magazin" onChange={event => setTitle(event.target.value)} />
        <ul
          className={"grid-list"}
        >
          {!loading &&
            tutorials &&
            tutorials.map((tutorial) => (
              <border-box>
                <iframe className="img-catalog" src={tutorial.val().img} height="330" width="250" frameborder="0" scrolling="no"> </iframe>
                <text>
                  <NavigationButton rref={"/info/" + tutorial.val().id} />
                  <p className="p-text" text-align="center">Name: {tutorial.val().name}</p>
                  <p className="p-text" text-align="center">Producer: {tutorial.val().producer}</p>
                  <p className="p-text" text-align="center">Rating: {tutorial.val().rating}</p>
                  <p className="p-text" text-align="center"  >Price {tutorial.val().price}</p>

                  <NavigationButtonBuy class="a-buy" rref={"/buy/" + tutorial.val().id} text="Buy"/>
                </text>

              </border-box>

            ))}
        </ul>


      </div>

    </div>
  );
};

export default MangasList;
