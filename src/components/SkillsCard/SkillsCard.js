import React, { useState } from 'react';
import './SkillsCard.css';
import { skills } from '../Constants';

function SkillsCard(props) {

  return (
    <div 
        className={props.isChecked ? `skill-card card-dark-mode`: `skill-card card-light-mode`}
        style={{backgroundColor: `${getSkillColor(props.skill)}`}}>
        {props.skill}
    </div>
  );

  function getSkillColor(skill) {
    if (skills.programming.findIndex(sk => sk === skill) >= 0){
      return "blue";
    } else if (skills.frontend.findIndex(sk => sk === skill) >= 0){
      return "green";
    } else if (skills.backend.findIndex(sk => sk === skill) >= 0){
      return "purple";
    } else if (skills.testing.findIndex(sk => sk === skill) >= 0){
      return "darkOrange";
    } else if (skills.tools.findIndex(sk => sk === skill) >= 0 || skills.others.findIndex(sk => sk === skill) >= 0){
      return "darkGrey";
    }
  }
}

export default SkillsCard;