import React from 'react';
import './TodoTemplate.scss';

export default function TodoTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">Schedule Table</div>
      <div className="content">{children}</div>
    </div>
  );
}
