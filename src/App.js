import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
// import Home from './Home';
import Firestore from './Components/Firestore';

function App() {


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Firestore />
        </Route >
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
