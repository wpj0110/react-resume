import React, { useState } from 'react';
import './Switch.css';
import App from '../App/App';

function Switch() {

    const [checked, setChecked] = useState(true);

    function handleChange() {
      setChecked(!checked)
    }
    const bodyElement = document.body;
    bodyElement.style.backgroundColor = checked ? "black" : "white";

    const data = {
        isChecked: checked
    }

  return (
    <div style={checked ? { background: 'black' } : { background: 'white' }}>
        <div 
        className="toggle-container"
        style={checked ? { background: 'black' } : { background: 'white' }}
        >
            <input
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
            onClick={handleChange}
            />
            <label
                className={"react-switch-label"}
                style={checked ? { background: 'green' } : { background: 'grey' }}
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
            <h3 style={checked ? { color: 'DarkGrey' } : { color: 'black' }}>
                {checked ? "Dark Mode" : "Light Mode"}
            </h3>
        </div>
        <App data={data}></App>
    </div>
  );
};

export default Switch;