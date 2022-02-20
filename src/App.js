import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Header from './components/header/Header';
import Designs from './views/Designs/Designs';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/designs" component={Designs} />
      </Switch>
    </Router>
  );
}

export default App;
