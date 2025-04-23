import React from 'react';
import './DynamicContent.css';

function DynamicContent({ content }) {
  return (
    <div className="dynamic-overlay">
      <p className="close-x" onClick={() => document.getElementById('roll_dinami').style.visibility = 'hidden'}>×</p>
      <h1 className="dynamic-title">{content.title}</h1>
      <p className="dynamic-desc">{content.description}</p>
      <div className="dynamic-buttons">
        {content.buttons.map((text, index) => (
          <button key={index} className="dynamic-btn">{text}</button>
        ))}
      </div>
    </div>
  );
}

export default DynamicContent;