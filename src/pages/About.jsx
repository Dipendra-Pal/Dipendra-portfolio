import './About.css';

function About() {
  // Profile image from public/images folder
  const profileImage = '/images/profile.jpg';

  return (
    <div className="about-container" id="about-section">
      <div className="about-header">
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">
          Get to know more about my journey, passion, and what drives me as a Computer Engineer
        </p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h2 className="section-title">Who I Am</h2>
            <p>
              I'm a passionate Computer Engineer with a strong foundation in software development
              and a drive to create innovative solutions. My journey in technology started with
              curiosity and has evolved into a career focused on building impactful applications
              that solve real-world problems.
            </p>
            <p>
              I believe in writing clean, maintainable code and following best practices.
              Whether it's frontend development, backend systems, or full-stack applications,
              I approach each project with attention to detail and a commitment to excellence.
            </p>
          </div>
          <div className="about-image">
            <div className="profile-image-container">
              <img
                src={profileImage}
                alt="Dipendra - Computer Engineer"
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="profile-placeholder" style={{ display: 'none' }}>
                <span className="profile-icon">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>

        <div className="education-section">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Bachelor of Engineering in Computer Engineering</h3>
                <p className="timeline-location">Nepal Engineering College</p>
                <p className="timeline-date">2021 - 2026</p>
                <p className="timeline-description">
                  Focused on software engineering, algorithms, data structures, and computer systems.
                  Graduated with honors and completed multiple projects in web development and
                  software engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h2 className="section-title">What I Value</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Problem Solving</h3>
              <p>Breaking down complex problems into manageable solutions</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📚</div>
              <h3>Continuous Learning</h3>
              <p>Staying updated with the latest technologies and best practices</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>Working effectively in teams to achieve common goals</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Quality</h3>
              <p>Delivering high-quality code and exceptional user experiences</p>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-text">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Feel free to reach out!
          </p>
          <div className="contact-buttons">
            <a href="mailto:brightstar2057@gmail.com" className="contact-btn">
              📧 Email Me
            </a>
            <a href="www.linkedin.com/in/dipendra-pal" className="contact-btn" target="_blank" rel="noopener noreferrer">
              💼 LinkedIn
            </a>
            <a href="https://github.com/Dipendra-Pal" className="contact-btn" target="_blank" rel="noopener noreferrer">
              💻 GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
