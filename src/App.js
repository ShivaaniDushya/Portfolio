import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Header from './components/header/Header';
import Designs from './views/Designs/Designs';
import Blogs from './views/blogs/Blogs';
import Youtube from './views/youtube/Youtube';
import GitHub from './views/github/Github';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/designs" component={Designs} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/youtube" component={Youtube} />
        <Route exact path="/git" component={GitHub} />
      </Switch>
    </Router>
  );
}

export default App;
