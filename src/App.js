import './App.css';
import Header from './components/header/header';
import H1 from './components/cards/Titre';
import Card from './components/cards/card';
import Footer from './components/footer/footer';
import product1 from './components/images/images.jpg'
import product2 from './components/images/images2.jpg'
import product3 from './components/images/product.avif'

const App=()=>{
  return(<div>
    <Header/>
    <H1/>
    <div className='body'>
      <Card label={"Wireless bluetooth headset"} tag={"Nearest Seller"} delivery={"Shipped in 3-4 days"} price={"$35.99"} product={product1}/>
      <Card label={"Wireless bluetooth headset"} tag={"Nearest Seller"} delivery={"Shipped in 5-7 days"} price={"$43.99"}product={product2}/>
      <Card label={"Wireless bluetooth headset"} tag={"Nearest Seller"} delivery={"Shipped in 1-3 days"} price={"$55.99"}product={product3}/>
    </div>
    <Footer/>
  </div>)
}


export default App;
