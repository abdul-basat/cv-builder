// src/components/forms/ProfessionalQualificationsForm.jsx
import React from 'react';

function ProfessionalQualificationsForm({ blockId, content, onContentChange, onRemoveBlock }) { // Added onRemoveBlock
  const handleChange = (e) => {
    onContentChange(blockId, e.target.name, e.target.value);
  };

  return (
    <div className="form-block">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4>Professional Qualification</h4>
        {onRemoveBlock && <button onClick={() => onRemoveBlock(blockId)} style={{backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px'}}>Remove</button>}
      </div>
      <label>Certification: <input type="text" name="certification" value={content.certification || ''} onChange={handleChange} /></label>
      <label>Specialization: <input type="text" name="specialization" value={content.specialization || ''} onChange={handleChange} /></label>
      <label>Training Body: <input type="text" name="trainingBody" value={content.trainingBody || ''} onChange={handleChange} /></label>
      <label>Year: <input type="text" name="year" value={content.year || ''} onChange={handleChange} /></label>
    </div>
  );
}

export default ProfessionalQualificationsForm;
