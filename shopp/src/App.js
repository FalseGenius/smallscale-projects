import Header from './components/Header';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route path='/' exact component={ProductListing} />
        <Route path='/product/:productId' exact component={ProductDetails} />
        <Route>404 not Found!</Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
