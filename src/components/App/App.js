import SideProjects from '../SideProjects/SideProjects';
import Skills from '../Skills/Skills';
import Switch from '../Switch/Switch';
import './App.css';

function App(props) {
  const isChecked = props.data.isChecked;
  console.log(isChecked)

  const today = new Date();
  const fullStackExperience = calculateExperience("2022-08-01", today);
  const aboutMeContent = `I am a Full Stack Developer with`+
                          ` ${fullStackExperience.years} year`+
                          ` ${fullStackExperience.months == 0 ? "": "and " + fullStackExperience.months +" month(s)"} ` +
                          ` of experience, versatile in using modern web development technologies. My proficiency in both React and Angular` +
                          ` frameworks allows me to be flexible in using my knowledge and skills as needed depending on the frontend framework I am using.` +
                          ` I am also proficient in Spring as my backend. I am experienced with the Software Development Lifecycle, implementing frontend` +
                          ` designs/features and building robust backend codebases.`;
  return (
    <div className="App" 
    style={isChecked ? {color: "DarkGrey"} : {color: "black"}}>
      <div className="content">
        <div id="my-name-container"> 
          <div id="my-name" style={isChecked ? {color: "darkGrey"} : {color: "white"}}>William Javier</div>
        </div>
        <div id="about-me-tech-skills">
          <div className="about-me-tech-skills-item">
            <h2>About Me: </h2>
            <p style={isChecked ? {color: "white"} : {color: "black"}}>{aboutMeContent}</p>
          </div>
          <div className="about-me-tech-skills-item">
            <h2>Technical Skills </h2>
            <Skills isChecked={isChecked}></Skills>
          </div>
        </div>
        <SideProjects isChecked={isChecked}></SideProjects>
      </div>
    </div>
  );

  function calculateExperience(initialDate, finalDate = new Date()) {
    const startDate = new Date(initialDate);
    const endDate = new Date(finalDate);

    const timeDifference = endDate - startDate;
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * (365.25 / 12))) - 12;

    return { years, months };
  }
}

export default App;
