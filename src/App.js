import Home from './Screens/Home';
import Services from './Screens/Services';
import HowWeWork from './Screens/HowWeWork';
import Benefits from './Screens/Benefits';
import Contact from './Screens/Contact';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Services />
      <HowWeWork />
      <Benefits />
      <Contact />
      
    </div>
  );
}

export default App;
