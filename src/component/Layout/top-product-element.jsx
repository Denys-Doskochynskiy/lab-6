
import '../style/Layout/element.css';
function Element(props) {
    return (
        <div className="element">
            <iframe src={props.img} className=""
                title="dvv" height="320" width="236" frameborder="0" scrolling="no" > </iframe>
            <p className="name">{props.name}</p>
            {/* <span className="show-more">Show more...</span> */}
            <span className="description">{props.shortDescription}</span>
        </div>
    );
}
export default Element;