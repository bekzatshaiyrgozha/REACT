const skills = ["JavaScript", "React", "Python", "HTML & CSS", "Git", "SQL"];

function Skills() {
  return (
    <section className="section">
      <h2>Skills</h2>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill} className="skill">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;