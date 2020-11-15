
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import  firebase from 'firebase/app'
var firebaseConfig = {
  apiKey: "AIzaSyAyDL7DShOrN7ef-8E5DyZUzFNwgeJNeiM",
  authDomain: "ionkid-abd2f.firebaseio.com",
  databaseURL: "https://ionkid-abd2f.firebaseio.com/"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(

    <React.StrictMode>
    <App />
    </React.StrictMode>,
 
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

