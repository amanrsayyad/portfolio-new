import React from 'react';
import './skill-card.css';

function SkillCard({ skill }) {
  return (<div className='skill-card'>
     <div className="skill-icon">{skill.devicon}</div>     
     <label className='skill-name'>{skill.name}</label>
  </div>
  );
}

export default SkillCard;
