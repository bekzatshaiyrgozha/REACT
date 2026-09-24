import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
