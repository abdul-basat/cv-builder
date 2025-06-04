// src/components/forms/HobbiesInterestsForm.jsx
import React from 'react';

function HobbiesInterestsForm({ blockId, content, onContentChange, onRemoveBlock }) { // Added onRemoveBlock
  const handleChange = (e) => {
    onContentChange(blockId, e.target.name, e.target.value);
  };

  return (
    <div className="form-block">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4>Hobbies & Interests</h4>
        {onRemoveBlock && <button onClick={() => onRemoveBlock(blockId)} style={{backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px'}}>Remove</button>}
      </div>
      <label>Interests: <textarea name="text" value={content.text || ''} onChange={handleChange}></textarea></label>
    </div>
  );
}

export default HobbiesInterestsForm;
