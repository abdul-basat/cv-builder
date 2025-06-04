// src/components/blocks/HobbiesInterestsBlock.jsx
import React, { useState } from 'react';

function HobbiesInterestsBlock({ blockId, content, template, onContentChange, onMoveBlockUp, onMoveBlockDown, isFirstOrderable, isLastOrderable }) {
  const [editingField, setEditingField] = useState(null); // Though only one field, keep structure for consistency
  const [tempValue, setTempValue] = useState('');

  const handleEdit = (fieldName) => {
    setEditingField(fieldName);
    setTempValue(content[fieldName] || '');
  };

  const handleSave = (fieldName) => {
    if (tempValue !== content[fieldName]) {
      onContentChange(blockId, fieldName, tempValue);
    }
    setEditingField(null);
  };

  const handleCancelEdit = () => {
    setEditingField(null);
  };

  const handleInputChange = (e) => {
    setTempValue(e.target.value);
  };

  // For textarea, Enter might mean newline, so rely on Blur or Escape.
  const handleTextareaKeyDown = (e, fieldName) => {
    if (e.key === 'Escape') {
      handleCancelEdit();
    }
    // Optionally, Shift+Enter to save, or Ctrl+Enter to save
    // if (e.key === 'Enter' && (e.shiftKey || e.ctrlKey)) {
    //   handleSave(fieldName);
    // }
  };

  return (
    <div className={`hobbies-interests-block cv-block template-${template}`}>
      <div className="block-controls" style={{ float: 'right', display: 'flex', gap: '5px', marginBottom: '5px' }}>
        {onMoveBlockUp && <button onClick={() => onMoveBlockUp(blockId)} disabled={isFirstOrderable} aria-label="Move up">↑</button>}
        {onMoveBlockDown && <button onClick={() => onMoveBlockDown(blockId)} disabled={isLastOrderable} aria-label="Move down">↓</button>}
      </div>
      <h4 style={{ clear: 'both' }}>Hobbies & Interests</h4> {/* Assuming h4 is not directly editable */}

      {editingField === 'text' ? (
        <textarea
          name="text"
          value={tempValue}
          onChange={handleInputChange}
          onBlur={() => handleSave('text')}
          onKeyDown={(e) => handleTextareaKeyDown(e, 'text')}
          autoFocus
          style={{ width: '100%', minHeight: '80px' }}
        />
      ) : (
        <p onClick={() => handleEdit('text')}>{content.text || 'Your hobbies and interests (Click to Edit)'}</p>
      )}
    </div>
  );
}

export default HobbiesInterestsBlock;
