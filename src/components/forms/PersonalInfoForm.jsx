// src/components/forms/PersonalInfoForm.jsx
import React from 'react';

function PersonalInfoForm({ blockId, content, onContentChange }) {
  const handleChange = (e) => {
    onContentChange(blockId, e.target.name, e.target.value);
  };

  return (
    <div className="form-block">
      <h4>Personal Information</h4>
      <label>Name: <input type="text" name="name" value={content.name || ''} onChange={handleChange} /></label>
      <label>Email: <input type="email" name="email" value={content.email || ''} onChange={handleChange} /></label>
      <label>Phone: <input type="tel" name="phone" value={content.phone || ''} onChange={handleChange} /></label>
      <label>LinkedIn: <input type="url" name="linkedIn" value={content.linkedIn || ''} onChange={handleChange} /></label>
      <label>Summary: <textarea name="summary" value={content.summary || ''} onChange={handleChange}></textarea></label>
    </div>
  );
}

export default PersonalInfoForm;
