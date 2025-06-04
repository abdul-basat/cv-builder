// src/components/forms/AcademicQualificationsForm.jsx
import React from 'react';

function AcademicQualificationsForm({ blockId, content, onContentChange, onRemoveBlock }) { // Added onRemoveBlock
  const handleChange = (e) => {
    onContentChange(blockId, e.target.name, e.target.value);
  };

  return (
    <div className="form-block">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4>Academic Qualification</h4>
        {/* Conditionally render remove button if onRemoveBlock is provided */}
        {onRemoveBlock && <button onClick={() => onRemoveBlock(blockId)} style={{backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px'}}>Remove</button>}
      </div>
      {/* ... rest of the form inputs ... */}
      <label>Degree: <input type="text" name="degree" value={content.degree || ''} onChange={handleChange} /></label>
      <label>Institution: <input type="text" name="institution" value={content.institution || ''} onChange={handleChange} /></label>
      <label>Year: <input type="text" name="year" value={content.year || ''} onChange={handleChange} /></label>
      <label>Grades: <input type="text" name="grades" value={content.grades || ''} onChange={handleChange} /></label>
    </div>
  );
}

export default AcademicQualificationsForm;
