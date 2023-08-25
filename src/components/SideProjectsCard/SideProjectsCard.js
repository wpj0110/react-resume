import React, { useState } from 'react';
import './SideProjectsCard.css';

function SideProjectsCard(props) {

  return (
    <div className="side-projects-card">
        <div className="project-title" onClick={() =>openLinkInNewTab(props.item.getUrl())}>{props.item.getTitle()}</div>
        <div className="project-description">{props.item.getDescription()}</div>
    </div>
  );

  function openLinkInNewTab(url) {
    window.open(`//${url}`, '_blank');
  }
}

export default SideProjectsCard;