
import './App.css';
import NavigationSection from './component/navigation-section';
import Header from './component/header';
import AboutUs from './component/about-us';
import TopProduct from './component/top-product';
import Footer from './component/footer';
import Line from './component/line';
import LineMidl from './component/line-midl';
function App() {
  return (
    <div className="App">
      <Header />
      <Line />
      <NavigationSection/>
      <LineMidl />
      <AboutUs />
      <LineMidl />
      <TopProduct />
      <Line />
      <Footer />
    </div>
  );
}

export default App;
