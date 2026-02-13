import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Navigation.css';

function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode, toggleTheme } = useTheme();
  // Profile image from public/images folder
  const profileImage = '/images/profile.jpg';

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a 
          href="#home" 
          className="nav-logo"
          onClick={(e) => handleClick(e, 'home')}
        >
          <div className="logo-image-container">
            <img
              src={profileImage}
              alt="Dipendra"
              className="logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className="logo-text">DIPENDRA</span>
          </div>
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => handleClick(e, 'home')}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#skills" 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={(e) => handleClick(e, 'skills')}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#projects" 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => handleClick(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => handleClick(e, 'about')}
            >
              About
            </a>
          </li>
        </ul>
        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
