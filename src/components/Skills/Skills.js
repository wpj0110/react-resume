import SelectedSkills from '../SelectedSkills/Selected-Skills';
import React, { useState } from 'react';
import './Skills.css';

function Skills(props) {

    const [selectedSkills, setSelectedSkills] = useState([]);

    function handleChange() {
        setSelectedSkills()
    }

    const programming = ["Java", "JavaScript", "TypeScript", "Python"];
    const frontend = [ "HTML", "CSS", "Angular", "NgRx", "React" ];
    const backend = ["Spring", "Node", "Microsoft SQL"];
    const testing = ["JUnit", "Karma", "Selenium", "Ruby on Rails", "Docker", "Mockito"];
    const tools = ["Git", "Git Bash", "REST APIs", "IntelliJ", 
      "Visual Studio", "Azure DevOps", "Azure",  "Jenkins", "Octopus", 
      "Jupyter", "Eclipse", "Maven", "Gradle", "Flyway", "dbVisualizer", "Redux", "Wiremock"
    ];
    const others = ["Extreme Programming", "Bash Scripting", "CI/CD Pipelining"  ]
    let everything = [...programming, ...frontend, ...backend, ...testing, ...tools, ...others];

    const skillsCard = everything.map(skill => 
    <div 
    className={props.isChecked ? `skill-card card-dark-mode`: `skill-card card-light-mode`}
    style={{backgroundColor: `${getSkillColor(skill)}`}}>
            {skill}
        </div>
        )

  return (
    <div className="cards-container">
        {skillsCard}
    </div>
  );

  function getSkillColor(skill) {
    if (programming.findIndex(sk => sk === skill) >= 0){
      return "blue";
    } else if (frontend.findIndex(sk => sk === skill) >= 0){
      return "green";
    } else if (backend.findIndex(sk => sk === skill) >= 0){
      return "purple";
    } else if (testing.findIndex(sk => sk === skill) >= 0){
      return "darkGreen";
    } else if (tools.findIndex(sk => sk === skill) >= 0 || others.findIndex(sk => sk === skill) >= 0){
      return "darkGrey";
    }
  }
}

export default Skills;