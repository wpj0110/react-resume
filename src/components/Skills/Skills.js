import React, { useState } from 'react';
import './Skills.css';
import { skills } from '../Constants';
import SkillsCard from '../SkillsCard/SkillsCard';

function Skills(props) {

    const [selectedSkills, setSelectedSkills] = useState([]);

    function handleChange() {
        setSelectedSkills()
    }

    let everything = [...skills.programming, ...skills.frontend, ...skills.backend, ...skills.testing, ...skills.tools, ...skills.others];

    const skillsCard = everything.map(skill => 
      <SkillsCard 
      isChecked={props.isChecked}
      skill={skill}></SkillsCard>
        )

  return (
    <div className="cards-container">
        {skillsCard}
    </div>
  );
  
}

export default Skills;