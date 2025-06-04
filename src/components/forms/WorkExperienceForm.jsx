// src/components/forms/WorkExperienceForm.jsx
import React from 'react';

function WorkExperienceForm({ blockId, content, onContentChange, onRemoveBlock }) { // Added onRemoveBlock
  const handleChange = (e) => {
    onContentChange(blockId, e.target.name, e.target.value);
  };

  return (
    <div className="form-block">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4>Work Experience</h4>
        {onRemoveBlock && <button onClick={() => onRemoveBlock(blockId)} style={{backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px'}}>Remove</button>}
      </div>
      <label>Job Title: <input type="text" name="jobTitle" value={content.jobTitle || ''} onChange={handleChange} /></label>
      <label>Employer: <input type="text" name="employer" value={content.employer || ''} onChange={handleChange} /></label>
      <label>Duration: <input type="text" name="duration" value={content.duration || ''} onChange={handleChange} /></label>
      <label>Responsibilities: <textarea name="responsibilities" value={content.responsibilities || ''} onChange={handleChange}></textarea></label>
    </div>
  );
}

export default WorkExperienceForm;
