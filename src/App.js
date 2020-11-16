import './App.css';
import Profile from './Pages/Profile';
import Navbar from './components/NavBar';
import Biography from './Pages/Biography';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer';


function App() {
  return (
    <Router>

    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path={["/", "Verdant"]}>
            <Profile />
            <Biography />
        </Route>
        <Route exact path={["/Portfolio"]}>
        <Portfolio />
        </Route>
        <Route exact path={["/Contact"]}>
        <Contact />
        </Route>
        </Switch>
        <Footer />
      </div>
      </Router>
  );
}



export default App;
