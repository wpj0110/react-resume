import Skills from '../Skills/Skills';
import Switch from '../Switch/Switch';
import './App.css';

function App(props) {
  const isChecked = props.data.isChecked;
  console.log(isChecked)

  const aboutMeContent = "I am a Full Stack Developer, versatile in using modern web development technologies. My proficiency in both React and Angular" +
                          " frameworks allows me to be flexible in using my knowledge and skills as needed depending on the frontend framework I am using." +
                          " I am also proficient in Spring as my backend. I am experienced with the Software Development Lifecycle, implementing frontend" +
                          " designs/features and building robust backend codebases.";
  return (
    <div className="App" 
    style={isChecked ? {color: "DarkGrey"} : {color: "black"}}>
      <div className="content">
        <h1>William Javier</h1>
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

      </div>
    </div>
  );
}

export default App;
