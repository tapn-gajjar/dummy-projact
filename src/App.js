import logo from './logo.svg';
import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/ProductList/ProductList';
import Contect from './components/Contect/Contect';
import Toggle from './components/Toggle/Toggle';
function App() {
  return (
    <div className="App">{/* <intro/> */} 
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contect/>
      
    </div>
  );
}

export default App;
