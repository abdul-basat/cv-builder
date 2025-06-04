// src/components/forms/LanguagesForm.jsx
import React from 'react';

function LanguagesForm({ blockId, content, onContentChange, onRemoveBlock }) { // Added onRemoveBlock
  const handleChange = (e) => {
    onContentChange(blockId, e.target.name, e.target.value);
  };

  return (
    <div className="form-block">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4>Language</h4>
        {onRemoveBlock && <button onClick={() => onRemoveBlock(blockId)} style={{backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px'}}>Remove</button>}
      </div>
      <label>Language: <input type="text" name="language" value={content.language || ''} onChange={handleChange} /></label>
      <label>Fluency: <input type="text" name="fluency" value={content.fluency || ''} onChange={handleChange} /></label>
    </div>
  );
}

export default LanguagesForm;
