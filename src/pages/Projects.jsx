import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Pustak',
      description: 'A full-stack book sharing solution with user authentication, admin dashboard, and book recommendation system. Built with HTML, CSS, JavaScript, PHP, and MySQL.',
      technologies: ['HTML', 'CSS', 'PHP', 'Email Intigration', 'MySQL'],
      image: '🛒',
      github: 'https://github.com/Dipendra-Pal/Pustak'
    },
    {
      id: 2,
      title: 'Ride Share',
      description: 'A cross platform ride sharing app for android and ios built with flutter and firebase.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      image: '📋',
      github: 'https://github.com/Dipendra-Pal/Ride_Share'
    },
    {
      id: 3,
      title: 'Social Media Analytics',
      description: 'Analytics platform for social media metrics with data visualization, reporting, and insights. Includes dashboard with real-time updates.',
      technologies: ['React', 'Python', 'Django', 'D3.js', 'Redis'],
      image: '📊',
      github: 'https://github.com/Dipendra-Pal/Social_Media_Analytics'
    },
    {
      id: 4,
      title: 'Portfolio Dipendra',
      description: 'A modern, responsive portfolio website showcasing projects and skills. Built with React and featuring smooth animations and transitions. This is the website you are currently on.',
      technologies: ['React', 'CSS3', 'React Router', 'JavaScript', 'HTML', 'CSS'],
      image: '💼',
      github: 'https://github.com/Dipendra-Pal/Portfolio_Dipendra'
    },
    {
      id: 5,
      title: "Let's Talk",
      description: 'A real-time chat application with multiple rooms, file sharing, and emoji support. Features end-to-end encryption for secure messaging.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      image: '💬',
      github: 'https://github.com/Dipendra-Pal/Lets_Talk'
    }
  ];

  return (
    <div className="projects-container" id="projects-section">
      <div className="projects-header">
        <h1 className="page-title">My Projects</h1>
        <p className="page-subtitle">
          A collection of projects showcasing my skills and experience in software development
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="project-image">
              <span className="project-emoji">{project.image}</span>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <span>💻</span> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
