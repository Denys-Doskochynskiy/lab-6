import '../style/Layout/about-us.css';
function NavigationButton(props) {
    return (
        <a href={props.rref} className={props.class}>{props.text}</a>
    );
}
export default NavigationButton