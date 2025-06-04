// src/components/blocks/PersonalInfoBlock.jsx
import React, { useState } from 'react';

function PersonalInfoBlock({ blockId, content, template, onContentChange }) {
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState('');

  const handleEdit = (fieldName) => {
    setEditingField(fieldName);
    setTempValue(content[fieldName] || '');
  };

  const handleSave = (fieldName) => {
    // Only call onContentChange if the value actually changed
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
    <div className={`personal-info-block cv-block template-${template}`}>
      {editingField === 'name' ? (
        <input
          type="text"
          name="name"
          value={tempValue}
          onChange={handleInputChange}
          onBlur={() => handleSave('name')} // Save on blur
          onKeyDown={(e) => handleInputKeyDown(e, 'name')}
          autoFocus // Focus the input when it appears
        />
      ) : (
        <h3 onClick={() => handleEdit('name')}>{content.name || 'Your Name (Click to Edit)'}</h3>
      )}

      {/* Email field - similar structure */}
      {editingField === 'email' ? (
        <input
          type="email"
          name="email"
          value={tempValue}
          onChange={handleInputChange}
          onBlur={() => handleSave('email')}
          onKeyDown={(e) => handleInputKeyDown(e, 'email')}
          autoFocus
        />
      ) : (
        <p onClick={() => handleEdit('email')}>
          {content.email ? `Email: ${content.email}` : 'Email: your.email@example.com (Click to Edit)'}
        </p>
      )}

      {/* Phone field */}
      {editingField === 'phone' ? (
        <input
          type="tel"
          name="phone"
          value={tempValue}
          onChange={handleInputChange}
          onBlur={() => handleSave('phone')}
          onKeyDown={(e) => handleInputKeyDown(e, 'phone')}
          autoFocus
        />
      ) : (
        <p onClick={() => handleEdit('phone')}>
          {content.phone ? `Phone: ${content.phone}` : 'Phone: (Click to Edit)'}
        </p>
      )}

      {/* LinkedIn field */}
      {editingField === 'linkedIn' ? (
        <input
          type="url"
          name="linkedIn"
          value={tempValue}
          onChange={handleInputChange}
          onBlur={() => handleSave('linkedIn')}
          onKeyDown={(e) => handleInputKeyDown(e, 'linkedIn')}
          autoFocus
        />
      ) : (
        <p onClick={() => handleEdit('linkedIn')}>
          LinkedIn: {content.linkedIn ? <a href={content.linkedIn.startsWith('http') ? content.linkedIn : `https://${content.linkedIn}`} target="_blank" rel="noopener noreferrer">{content.linkedIn}</a> : '(Click to Edit)'}
        </p>
      )}

      {/* Summary field (using textarea) */}
      {editingField === 'summary' ? (
        <textarea
          name="summary"
          value={tempValue}
          onChange={handleInputChange}
          onBlur={() => handleSave('summary')}
          onKeyDown={(e) => { if (e.key === 'Escape') handleCancelEdit(); }}
          autoFocus
        />
      ) : (
        <p onClick={() => handleEdit('summary')}>{content.summary || 'Summary (Click to Edit)'}</p>
      )}
    </div>
  );
}
export default PersonalInfoBlock;
