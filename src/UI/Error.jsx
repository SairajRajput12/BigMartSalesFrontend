import React from 'react';
import './Error.css';

export default function Error({ message }) {
  return (
    <div className="error-container">
      <p className="error-message">{message || "An unexpected error occurred. Please try again later."}</p>
    </div>
  );
}
