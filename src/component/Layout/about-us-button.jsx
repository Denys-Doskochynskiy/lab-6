import { Link } from 'react-router-dom';
import '../style/Layout/about-us.css';

function NavigationButton(props) {
    return (
   
        <a  className={props.class}>{props.text}</a>
  
    );
}
export default NavigationButton