import React, { useState, setState/* useEffect */ } from "react";
import { useList } from "react-firebase-hooks/database";
import TutorialDataService from "../services/Service";


import './style/catalog.css';

const TutorialsList = () => {

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
        <input id="find"type="text" className="find-magazin" onChange={event => setTitle(event.target.value)} />
        <ul
          className={"grid-list"}
        >
          {!loading &&
            tutorials &&
            tutorials.map((tutorial) => (
              <border-box>
                <iframe className="img-catalog" src={tutorial.val().img} height="330" width="250" frameborder="0" scrolling="no"> </iframe>
                <text>
                  
                  <a href={"/info/" + tutorial.val().id}>
                    <img className="info" src="https://img.icons8.com/pastel-glyph/64/000000/info--v1.png" />
                  </a>

                  <p className="p-text" text-align="center">Name: {tutorial.val().name}</p>
                  <p className="p-text" text-align="center">Producer: {tutorial.val().producer}</p>
                  <p className="p-text" text-align="center">Rating: {tutorial.val().rating}</p>
                  <p className="p-text" text-align="center"  >Price {tutorial.val().price}</p>

                  <a className="a-buy" href={"/buy/" + tutorial.val().id}>Buy</a>
                </text>

              </border-box>

            ))}
        </ul>


      </div>

    </div>
  );
};

export default TutorialsList;
