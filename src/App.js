import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Header from './components/header/Header';
import Designs from './views/Designs/Designs';
import Blogs from './views/blogs/Blogs';
import Youtube from './views/youtube/Youtube';
import GitHub from './views/github/Github';
import { useEffect, useState } from 'react';


function App() {

  const [theme, setTheme] = useState(("theme" in localStorage) ? localStorage.theme : "dark");

    useEffect(() => {
        if (!("theme" in localStorage)) {
            localStorage.theme = theme;
            document.documentElement.classList.add("dark");
        }
        else {
            if (localStorage.theme === "dark") {
                document.documentElement.classList.add("dark");
            }
            else {
                document.documentElement.classList.remove("dark");
            }
        }

    }, [theme])

    const toggleTheme = () => {
        if (theme === "dark") {
            localStorage.theme = "light";
            setTheme("light");
        }
        else {
            localStorage.theme = "dark";
            setTheme("dark");
        }
    }


  return (
    <Router>
      <Header toggle={toggleTheme} mode={theme}/>
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
