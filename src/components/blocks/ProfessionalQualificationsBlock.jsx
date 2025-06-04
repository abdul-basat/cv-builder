// src/components/blocks/ProfessionalQualificationsBlock.jsx
import React, { useState } from 'react';

function ProfessionalQualificationsBlock({ blockId, content, template, onContentChange, onMoveBlockUp, onMoveBlockDown, isFirstOrderable, isLastOrderable }) {
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
    <div className={`professional-qualifications-block cv-block template-${template}`}>
      <div className="block-controls" style={{ float: 'right', display: 'flex', gap: '5px', marginBottom: '5px' }}>
        {onMoveBlockUp && <button onClick={() => onMoveBlockUp(blockId)} disabled={isFirstOrderable} aria-label="Move up">↑</button>}
        {onMoveBlockDown && <button onClick={() => onMoveBlockDown(blockId)} disabled={isLastOrderable} aria-label="Move down">↓</button>}
      </div>
      <h4 style={{ clear: 'both' }}>Professional Qualifications</h4> {/* Assuming h4 is not directly editable */}

      {editingField === 'certification' ? (
        <input
          type="text"
          name="certification"
          value={tempValue}
          onChange={handleInputChange}
          onBlur={() => handleSave('certification')}
          onKeyDown={(e) => handleInputKeyDown(e, 'certification')}
          autoFocus
        />
      ) : (
        <p onClick={() => handleEdit('certification')}><strong>{content.certification || 'Certification (Click to Edit)'}</strong></p>
      )}

      {content.specialization || editingField === 'specialization' ? (
        editingField === 'specialization' ? (
          <input
            type="text"
            name="specialization"
            value={tempValue}
            placeholder="Specialization"
            onChange={handleInputChange}
            onBlur={() => handleSave('specialization')}
            onKeyDown={(e) => handleInputKeyDown(e, 'specialization')}
            autoFocus
          />
        ) : (
          <p onClick={() => handleEdit('specialization')}>Specialization: {content.specialization || '(Click to Edit)'}</p>
        )
      ): (
         <p onClick={() => handleEdit('specialization')} style={{ fontStyle: 'italic', color: '#aaa' }}>Specialization: (Click to add specialization)</p>
      )}


      {editingField === 'trainingBody' || editingField === 'year' ? (
        <>
          {editingField === 'trainingBody' ? (
            <input
              type="text"
              name="trainingBody"
              placeholder="Training Body"
              value={tempValue}
              onChange={handleInputChange}
              onBlur={() => handleSave('trainingBody')}
              onKeyDown={(e) => handleInputKeyDown(e, 'trainingBody')}
              autoFocus
            />
          ) : (
            <span onClick={() => handleEdit('trainingBody')}>{content.trainingBody || 'Training Body (Click to Edit)'}</span>
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
          <span onClick={() => handleEdit('trainingBody')}>{content.trainingBody || 'Training Body (Click to Edit)'}</span>
          {' - '}
          <span onClick={() => handleEdit('year')}>{content.year || 'Year (Click to Edit)'}</span>
        </p>
      )}
    </div>
  );
}

export default ProfessionalQualificationsBlock;
