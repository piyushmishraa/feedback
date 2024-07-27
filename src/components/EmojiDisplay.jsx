import React from 'react';

const EmojiDisplay = ({ emoji }) => {
  return (
    <div className="emoji-container">
      <img src={emoji} alt="feedback emoji" className="emoji" />
    </div>
  );
};

export default EmojiDisplay;
