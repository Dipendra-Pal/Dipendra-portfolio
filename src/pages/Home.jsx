import './Home.css';

function Home() {
  return (
    <div className="home-container" id="home-section">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Dipendra</span>
          </h1>
          <h2 className="hero-subtitle">Computer Engineer</h2>
          <p className="hero-description">
            Passionate about building innovative solutions and creating 
            exceptional digital experiences through code.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#about" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="code-snippet">
            <div className="code-line">
              <span className="code-keyword">const</span>{' '}
              <span className="code-variable">engineer</span> = {'{'}
            </div>
            <div className="code-line indent">
              <span className="code-property">name</span>: <span className="code-string">'Dipendra'</span>,
            </div>
            <div className="code-line indent">
              <span className="code-property">role</span>: <span className="code-string">'Computer Engineer'</span>,
            </div>
            <div className="code-line indent">
              <span className="code-property">passion</span>: <span className="code-string">'Building Solutions'</span>
            </div>
            <div className="code-line">{'}'};</div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon">💻</div>
          <h3>Full-Stack Development</h3>
          <p>Building end-to-end applications with modern technologies</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Innovation</h3>
          <p>Creating solutions that solve real-world problems</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3>Clean Code</h3>
          <p>Writing maintainable and scalable code</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
