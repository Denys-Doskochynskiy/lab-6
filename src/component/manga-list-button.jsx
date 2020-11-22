import './style/catalog.css';
function NavigationButton(props) {
    return (
        <a href={props.rref} className={props.class}>
            <img className="info" src="https://img.icons8.com/pastel-glyph/64/000000/info--v1.png" />
        </a>
    );
}

export default NavigationButton;

function NavigationButtonBuy(props) {
    return (
        <a href={props.rref} className={props.class}>
            {props.text}
        </a>
    ); 
}
export {NavigationButtonBuy}