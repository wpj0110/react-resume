import SelectedSkills from '../SelectedSkills/Selected-Skills';
import React, { useState } from 'react';
import './Skills.css';

function Skills(props) {

    const [selectedSkills, setSelectedSkills] = useState([]);

    function handleChange() {
        setSelectedSkills()
    }

    const mySkills = ["Angular", "React", "Spring", "TypeScript", "JavaScript", "HTML", "CSS","SQL"]

    const skillsCard = mySkills.map(skill => 
    <div 
    className={props.isChecked ? "skill-card card-dark-mode" : "skill-card card-light-mode"}>
            {skill}
        </div>
        )

  return (
    <div className="cards-container">
        {skillsCard}
    </div>
  );
}

export default Skills;