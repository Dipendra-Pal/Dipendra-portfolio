import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TypeScript', level: 80 },
        { name: 'Vue.js', level: 75 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Redis', level: 70 },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Linux', level: 80 },
        { name: 'CI/CD', level: 75 },
      ]
    }
  ];

  return (
    <div className="skills-container" id="skills-section">
      <div className="skills-header">
        <h1 className="page-title">Skills & Technologies</h1>
        <p className="page-subtitle">
          A comprehensive overview of my technical expertise and proficiency levels
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h2 className="category-title">{category.title}</h2>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="additional-skills">
        <h2 className="section-title">Additional Skills</h2>
        <div className="tags-container">
          {[
            'Problem Solving', 'System Design', 'Agile Methodology',
            'Code Review', 'Technical Writing', 'Team Collaboration',
            'Project Management', 'Debugging', 'Performance Optimization'
          ].map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
