import './App.css';
import Profile from './components/Profile';
import Navbar from './components/NavBar';
import Biography from './components/Biography';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Biography />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
