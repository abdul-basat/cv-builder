// src/components/blocks/AcademicQualificationsBlock.jsx
import React, { useState } from 'react';

function AcademicQualificationsBlock({ blockId, content, template, onContentChange, onMoveBlockUp, onMoveBlockDown, isFirstOrderable, isLastOrderable }) {
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
    <div className={`academic-qualifications-block cv-block template-${template}`}>
      <div className="block-controls" style={{ float: 'right', display: 'flex', gap: '5px', marginBottom: '5px' }}>
        {onMoveBlockUp && <button onClick={() => onMoveBlockUp(blockId)} disabled={isFirstOrderable} aria-label="Move up">↑</button>}
        {onMoveBlockDown && <button onClick={() => onMoveBlockDown(blockId)} disabled={isLastOrderable} aria-label="Move down">↓</button>}
      </div>
      <h4 style={{ clear: 'both' }}>Academic Qualifications</h4> {/* Assuming h4 is not directly editable but could be made so if needed */}

      {editingField === 'degree' ? (
        <input
          type="text"
          name="degree"
          value={tempValue}
          onChange={handleInputChange}
          onBlur={() => handleSave('degree')}
          onKeyDown={(e) => handleInputKeyDown(e, 'degree')}
          autoFocus
        />
      ) : (
        <p onClick={() => handleEdit('degree')}><strong>{content.degree || 'Degree (Click to Edit)'}</strong></p>
      )}

      {editingField === 'institution' || editingField === 'year' ? (
        <>
          {editingField === 'institution' ? (
            <input
              type="text"
              name="institution"
              placeholder="Institution"
              value={tempValue}
              onChange={handleInputChange}
              onBlur={() => handleSave('institution')}
              onKeyDown={(e) => handleInputKeyDown(e, 'institution')}
              autoFocus
            />
          ) : (
            <span onClick={() => handleEdit('institution')}>{content.institution || 'Institution (Click to Edit)'}</span>
          )}
          {' - '}
          {editingField === 'year' ? (
            <input
              type="text"
              name="year"
              placeholder="Year"
              value={tempValue}
              onChange={handleInputChange}
              onBlur={() => handleSave('year')}
              onKeyDown={(e) => handleInputKeyDown(e, 'year')}
              autoFocus
            />
          ) : (
            <span onClick={() => handleEdit('year')}>{content.year || 'Year (Click to Edit)'}</span>
          )}
        </>
      ) : (
        <p>
          <span onClick={() => handleEdit('institution')}>{content.institution || 'Institution (Click to Edit)'}</span>
          {' - '}
          <span onClick={() => handleEdit('year')}>{content.year || 'Year (Click to Edit)'}</span>
        </p>
      )}

      {content.grades || editingField === 'grades' ? (
        editingField === 'grades' ? (
          <input
            type="text"
            name="grades"
            value={tempValue}
            onChange={handleInputChange}
            onBlur={() => handleSave('grades')}
            onKeyDown={(e) => handleInputKeyDown(e, 'grades')}
            autoFocus
          />
        ) : (
          <p onClick={() => handleEdit('grades')}>Grades: {content.grades || '(Click to Edit)'}</p>
        )
      ) : (
        <p onClick={() => handleEdit('grades')} style={{ fontStyle: 'italic', color: '#aaa' }}>Grades: (Click to add grades)</p>
      )}
    </div>
  );
}

export default AcademicQualificationsBlock;
