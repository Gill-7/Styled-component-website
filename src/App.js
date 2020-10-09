import React from 'react';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/HomePage/Services/Services';
import Products from './pages/HomePage/Products/Products';
import SignUp from './pages/HomePage/SignUp/SignUp';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='./services' exact component={Services} />
        <Route path='./products' exact component={Products} />
        <Route path='./sign-up' exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
