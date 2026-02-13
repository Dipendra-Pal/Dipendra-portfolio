import Navigation from './components/Navigation';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <section id="home">
          <Home />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
    </div>
  );
}

export default App;
