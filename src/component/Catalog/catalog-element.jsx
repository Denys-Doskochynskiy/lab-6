import { Component } from "react";
import '../style/HeaderFooter/catalog.css';
import firebase from 'firebase'
var keys = []
var listData = []
var testEl = ``
var sort = ``
export default class Catalog_element extends Component {

    componentDidMount() {
        const db = firebase.database();
        console.log(db)
        console.log("sfvdbfv")
        console.log("sfvdbfv")
        db.ref("Books").on("value", getData);
        const searchList = document.getElementById('find-magazin');
        search(searchList);
        console.log(searchList.value)
    }


    render() {
        return (
            <div className="catalog-body">
                <input type="text"
                    id="find-magazin" className="find-magazin"></input>
                <ul id="123" className="grid-list">
                </ul>
            </div>

        );
    }
}
function search(searchList) {
    let chemicalsTest = listData;

    searchList.addEventListener('keyup', (searchedString) => {
        console.log(searchList.value)
        const filterString = searchedString.target.value.toLowerCase();
        const findMedicineByName = listData.filter(medicine => {
            return medicine.name.toLowerCase().includes(filterString);
        });
        chemicalsTest = findMedicineByName;
        console.log(chemicalsTest)
        displayItem(chemicalsTest);
    })
}
const displayItem = (chemicalDisplay) => {
    const list = document.getElementById("123")
    const displayItems = chemicalDisplay.forEach((listDataTest, i) => {
        sort += `
        <border-box>
        <iframe src= ${listDataTest.img} height="450" width="305" frameborder="0" scrolling="no"> </iframe>
         <text>
              <p text-align="center">Name: ${listDataTest.name}</p>
              <p text-align="center">Producer: ${listDataTest.producer}</p>
              <p text-align="center">Rating: ${listDataTest.rating}</p>
              <p text-align="center">Price ${listDataTest.price}</p>
              <a href="/buy/${listDataTest.id}">Buy</a>
        </text>
              
         </border-box>   `

    });
    list.innerHTML = sort;
    sort = ``
}


function getData(data) {

    var medicines = data.val();
    keys = Object.keys(data.val());


    keys.forEach((testData, index) => {

        let key = keys[index]
        testData = medicines[key]
        listData.push(testData);

    }
    );
    const list = document.getElementById("123")
    for (let i = 0; i < listData.length; i++) {
        console.log(listData[i].name)
        testEl += `
        <border-box>
        <iframe src= ${listData[i].img} height="450" width="305" frameborder="0" scrolling="no"> </iframe>
                <text>
                <p text-align="center">Name: ${listData[i].name}</p>
                <p text-align="center">Producer: ${listData[i].producer}</p>
                <p text-align="center">Rating: ${listData[i].rating}</p>
                <p text-align="center">Price ${listData[i].price}</p>
                <a  href="/buy/${listData[i].id}">Buy</a>
                </text>
                
                </border-box>   
        `
    }

    list.innerHTML = testEl

}



