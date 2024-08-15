import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import Projects from './Components/Projects';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';

import './Styles/navbar.scss';
import './Styles/home.scss';
import './Styles/services.scss';
import './Styles/project.scss';
import './Styles/contact.scss';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <section id="home"><Home /></section>
        <section id="services"><Services /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
        <section id="about"><About /></section>
      </div>
    </BrowserRouter>
  );
}

export default App;
