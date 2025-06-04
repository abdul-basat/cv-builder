// src/components/blocks/WorkExperienceBlock.jsx
import React, { useState } from 'react';

function WorkExperienceBlock({ blockId, content, template, onContentChange, onMoveBlockUp, onMoveBlockDown, isFirstOrderable, isLastOrderable }) {
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
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') { // Enter saves for input, not textarea
      handleSave(fieldName);
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  return (
    <div className={`work-experience-block cv-block template-${template}`}>
      <div className="block-controls" style={{ float: 'right', display: 'flex', gap: '5px', marginBottom: '5px' }}>
        {onMoveBlockUp && <button onClick={() => onMoveBlockUp(blockId)} disabled={isFirstOrderable} aria-label="Move up">↑</button>}
        {onMoveBlockDown && <button onClick={() => onMoveBlockDown(blockId)} disabled={isLastOrderable} aria-label="Move down">↓</button>}
      </div>
      <h4 style={{ clear: 'both' }}>Work Experience</h4> {/* Assuming h4 is not directly editable */}

      {editingField === 'jobTitle' || editingField === 'employer' ? (
        <p>
          <strong>
            {editingField === 'jobTitle' ? (
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={tempValue}
                onChange={handleInputChange}
                onBlur={() => handleSave('jobTitle')}
                onKeyDown={(e) => handleInputKeyDown(e, 'jobTitle')}
                autoFocus
              />
            ) : (
              <span onClick={() => handleEdit('jobTitle')}>{content.jobTitle || 'Job Title (Click to Edit)'}</span>
            )}
          </strong>
          {' at '}
          {editingField === 'employer' ? (
            <input
              type="text"
              name="employer"
              placeholder="Employer"
              value={tempValue}
              onChange={handleInputChange}
              onBlur={() => handleSave('employer')}
              onKeyDown={(e) => handleInputKeyDown(e, 'employer')}
              autoFocus
            />
          ) : (
            <span onClick={() => handleEdit('employer')}>{content.employer || 'Employer (Click to Edit)'}</span>
          )}
        </p>
      ) : (
        <p>
          <strong onClick={() => handleEdit('jobTitle')}>{content.jobTitle || 'Job Title (Click to Edit)'}</strong>
          {' at '}
          <span onClick={() => handleEdit('employer')}>{content.employer || 'Employer (Click to Edit)'}</span>
        </p>
      )}

      {editingField === 'duration' ? (
        <input
          type="text"
          name="duration"
          value={tempValue}
          onChange={handleInputChange}
          onBlur={() => handleSave('duration')}
          onKeyDown={(e) => handleInputKeyDown(e, 'duration')}
          autoFocus
        />
      ) : (
        <p onClick={() => handleEdit('duration')}>{content.duration || 'Duration (e.g., Jan 2020 - Present) (Click to Edit)'}</p>
      )}

      {editingField === 'responsibilities' ? (
        <textarea
          name="responsibilities"
          value={tempValue}
          onChange={handleInputChange}
          onBlur={() => handleSave('responsibilities')}
          onKeyDown={(e) => handleInputKeyDown(e, 'responsibilities')} // Escape only for textarea
          autoFocus
        />
      ) : (
        <p onClick={() => handleEdit('responsibilities')}>{content.responsibilities || 'Responsibilities (Click to Edit)'}</p>
      )}
    </div>
  );
}

export default WorkExperienceBlock;
