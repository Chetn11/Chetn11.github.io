import About from "./Components/About";
import Contact from "./Components/Contact";
import Github from "./Components/Github";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import SocialLinks from "./Components/SocialLinks";


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Github/>
    <Contact/>
    <SocialLinks/>
    </div>
  );
}

export default App;
