import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";


function App(){
  return(
    <div className="container"> 
      <Header />
      <About />
      <Skills />
      <Contact />

    </div>
    
  )
}
export default App;