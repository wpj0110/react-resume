import React, { useState } from 'react';
import './SideProjects.css';
import { SideProject } from '../../classes/SideProject';
import SideProjectsCard from '../SideProjectsCard/SideProjectsCard';
import SkillsCard from '../SkillsCard/SkillsCard';


function SideProjects(props) {
    const placeHolderDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Velit scelerisque in dictum non consectetur a erat nam. Ultricies mi eget mauris pharetra. Lectus vestibulum mattis ullamcorper velit sed. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Amet nisl suscipit adipiscing bibendum est ultricies. Penatibus et magnis dis parturient montes. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Eget egestas purus viverra accumsan in. Nibh nisl condimentum id venenatis. Ipsum dolor sit amet consectetur adipiscing elit ut. Nec ullamcorper sit amet risus nullam.";
    
    const washingtonElectricVehiclesPopulationDescription = (
    <div className="project-description">
      <div>
      Built in:
      </div>
      <div className="cards-container">
        <SkillsCard isChecked={props.isChecked} skill="React"></SkillsCard>
        <SkillsCard isChecked={props.isChecked} skill="HTML"></SkillsCard>
        <SkillsCard isChecked={props.isChecked} skill="CSS"></SkillsCard>
        <SkillsCard isChecked={props.isChecked} skill="JavaScript"></SkillsCard>
      </div>
      <div>
        Presents the Electric Vehicle Population Data in Washington State. All the data comes from the <a href="//data.wa.gov">data.wa.gov.</a> Charts and Graphs are presented using:
      </div>
      <div className="cards-container">
          <SkillsCard isChecked={props.isChecked} skill="Recharts"></SkillsCard>
        </div>
    </div>);


    const project1 = new SideProject("Electric Vehicles Population",washingtonElectricVehiclesPopulationDescription,"google.com");
    const project2 = new SideProject("Project2",placeHolderDescription,"bing.com");
    const project3 = new SideProject("Project3",placeHolderDescription,"gsmarena.com");

    const sideProjects = [project1, project2, project3];
    const sideProjectsCards = sideProjects.map(project => {
        return <SideProjectsCard key={project.getTitle()+"key"} item={project}></SideProjectsCard>
    });

  return (
    <>
    <h1 id="side-project-header">Side Projects:</h1>
    <div className="side-projects-container">
        {sideProjectsCards}
    </div>
    </>
  );
}

export default SideProjects;