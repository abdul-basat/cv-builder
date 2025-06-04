// src/components/blocks/LanguagesBlock.jsx
import React, { useState } from 'react';

function LanguagesBlock({ blockId, content, template, onContentChange, onMoveBlockUp, onMoveBlockDown, isFirstOrderable, isLastOrderable }) {
  const [editingField, setEditingField] = useState(null);
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

  const handleInputKeyDown = (e, fieldName) => {
    if (e.key === 'Enter') {
      handleSave(fieldName);
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  return (
    <div className={`languages-block cv-block template-${template}`}>
      <div className="block-controls" style={{ float: 'right', display: 'flex', gap: '5px', marginBottom: '5px' }}>
        {onMoveBlockUp && <button onClick={() => onMoveBlockUp(blockId)} disabled={isFirstOrderable} aria-label="Move up">↑</button>}
        {onMoveBlockDown && <button onClick={() => onMoveBlockDown(blockId)} disabled={isLastOrderable} aria-label="Move down">↓</button>}
      </div>
      <h4 style={{ clear: 'both' }}>Languages</h4> {/* Assuming h4 is not directly editable */}

      {editingField === 'language' || editingField === 'fluency' ? (
        <p>
          {editingField === 'language' ? (
            <input
              type="text"
              name="language"
              placeholder="Language"
              value={tempValue}
              onChange={handleInputChange}
              onBlur={() => handleSave('language')}
              onKeyDown={(e) => handleInputKeyDown(e, 'language')}
              autoFocus
            />
          ) : (
            <span onClick={() => handleEdit('language')}>{content.language || 'Language (Click to Edit)'}</span>
          )}
          {': '}
          {editingField === 'fluency' ? (
            <input
              type="text"
              name="fluency"
              placeholder="Fluency Level"
              value={tempValue}
              onChange={handleInputChange}
              onBlur={() => handleSave('fluency')}
              onKeyDown={(e) => handleInputKeyDown(e, 'fluency')}
              autoFocus
            />
          ) : (
            <span onClick={() => handleEdit('fluency')}>{content.fluency || 'Fluency Level (Click to Edit)'}</span>
          )}
        </p>
      ) : (
        <p>
          <span onClick={() => handleEdit('language')}>{content.language || 'Language (Click to Edit)'}</span>
          {': '}
          <span onClick={() => handleEdit('fluency')}>{content.fluency || 'Fluency Level (Click to Edit)'}</span>
        </p>
      )}
    </div>
  );
}

export default LanguagesBlock;
