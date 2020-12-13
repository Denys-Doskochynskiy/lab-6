import firebase from "firebase";
import "firebase/database";

let config = {
 
        apiKey: "AIzaSyAyDL7DShOrN7ef-8E5DyZUzFNwgeJNeiM",
        authDomain: "ionkid-abd2f.firebaseio.com",
        databaseURL: "https://ionkid-abd2f.firebaseio.com/"
      
};

firebase.initializeApp(config);
console.log("зашибісь")
export default firebase.database();