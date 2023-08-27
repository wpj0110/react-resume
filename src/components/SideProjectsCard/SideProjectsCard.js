import React, { useState } from 'react';
import './SideProjectsCard.css';
import { openLinkInNewTab } from '../Helpers';

function SideProjectsCard(props) {

  return (
    <div className="side-projects-card">
        <div className="project-title" onClick={() =>openLinkInNewTab(props.item.getUrl())}>{props.item.getTitle()}</div>
        {props.item.getDescription()}
    </div>
  );

}

export default SideProjectsCard;