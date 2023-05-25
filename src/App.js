import './App.css';
import { BrowserRouter as Router,  Route ,  Routes } from "react-router-dom";
import Home from './pages/Home.js'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Contact from './pages/contact.js'
import Menu from './pages/menu.js'
import Testo from './pages/Testo.';
import PNF from './pages/PNF.js'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Testimonials" element={< Testo />} />
          <Route path="/*" element={< PNF/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
