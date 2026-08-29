/*
const skills = [
  ['HTML', 'Building clear page structure.'],
  ['CSS', 'Creating thoughtful visual systems.'],
  ['JavaScript', 'Adding useful interaction.']
];

function Skills() {
  return (
    <section className="skills page-section section-line" id="skills" aria-labelledby="skills-title">
      <div className="section-content">
        <div className="skills-heading">
          <h2 id="skills-title">Tools I’m<br /><em>learning.</em></h2>
          <p>The skills I’m practicing as I turn ideas into working pages.</p>
        </div>
        <div className="skill-list">
          {skills.map(([name, description]) => {
            const faviconClass = name === 'HTML' ? 'skill-favicon--html' : name === 'CSS' ? 'skill-favicon--css' : 'skill-favicon--js';
            const faviconLetter = name === 'HTML' ? 'H' : name === 'CSS' ? 'C' : 'J';

            return (
              <article className="skill-item" key={name}>
                <span className={`skill-favicon ${faviconClass}`} aria-hidden="true">{faviconLetter}</span>
                <div className="skill-copy"><h3>{name}</h3><p>{description}</p></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
*/
