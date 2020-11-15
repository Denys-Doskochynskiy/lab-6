
import '../style/HeaderFooter/navigation.css';

function NavigationSection() {
    return (
        <div className="navigation-section">
          <img src="https://img.icons8.com/ios/75/000000/physics-book.png" className="img-section" alt="FUCK"/>
                    <div className="navigation">
                <a href="/" className="home">Home</a>
                <a href="/catalog"  className="catalog" >Catalog</a>
                <a href="/cart" className="cart">Cart</a>
            </div>
          
 
        </div>
    );
}
export default NavigationSection