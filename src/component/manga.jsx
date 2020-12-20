import { addItem} from "../reducers/Add-item-to-cart"
import './style/catalog.css';
import {connect} from 'react-redux'
import NavigationButton from './manga-list-button'
function Manga({tutorial, addItem}) {
    return (
        <border-box>
            <iframe className="img-catalog" src={tutorial.img} height="330" width="250" frameborder="0" scrolling="no"> </iframe>
            <text>
                <NavigationButton rref={"/catalog/info/" + tutorial.name} />

                <p className="p-text" text-align="center">Name: {tutorial.name}</p>
                <p className="p-text" text-align="center">Producer: {tutorial.producer}</p>
                <p className="p-text" text-align="center">Rating: {tutorial.rating}</p>
                <p className="p-text" text-align="center"  >Price: {tutorial.price}$</p>
                {/* rref={"/buy/" + tutorial.val().id} */}
                <a onClick={() => addItem(tutorial.id)} className="a-buy" >Buy</a>
            </text>
      

        </border-box>

    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (id) => dispatch(addItem(id))
    };
};

export default connect(null, mapDispatchToProps)(Manga)