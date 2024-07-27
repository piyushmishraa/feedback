import React, { useState } from 'react';
import EmojiDisplay from './EmojiDisplay';
import excitedEmoji from '../assets/Emojis/excited.png';
import happyEmoji from '../assets/Emojis/happy.png';
import dissatisfiedEmoji from '../assets/Emojis/dissatisfied.png';
import upsetEmoji from '../assets/Emojis/upset.png';

const feedbackOptions = [
  { label: 'I am excited', color: 'bg-customGreen', borderColor: 'border-customGreen', emoji: excitedEmoji },
  { label: 'I am happy', color: 'bg-customYellow', borderColor: 'border-customYellow', emoji: happyEmoji },
  { label: 'I am dissatisfied', color: 'bg-customOrange', borderColor: 'border-customOrange', emoji: dissatisfiedEmoji },
  { label: 'I am upset', color: 'bg-customRed', borderColor: 'border-customRed', emoji: upsetEmoji },
];

const FeedbackComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getShadowColor = (color) => {
    // Define a function to convert the Tailwind color class to its hex or RGB value
    switch (color) {
      case 'bg-customGreen': return '#4CBB17';
      case 'bg-customYellow': return '#D4CD16';
      case 'bg-customOrange': return '#FCB001';
      case 'bg-customRed': return '#FF3F00';
      default: return '#000'; // Fallback color
    }
  };

  return (
    <div className="flex flex-col items-center">
      <EmojiDisplay emoji={feedbackOptions[selectedIndex].emoji} />
      <div className="flex items-center space-x-40">
        {feedbackOptions.map((option, index) => (
          <React.Fragment key={index}>
            {index !== 0 && (
                            <div
                            className="line"
                            style={{
                                left: `calc(${index * 25}% +25rem  `, // Adjust the value as needed
                            }}
                          ></div>

                          
                          
            
            )}
            <div
              className={`flex flex-col items-center cursor-pointer ${selectedIndex === index ? 'transform scale-110' : ''}`}
              onClick={() => setSelectedIndex(index)}
            >
               <div
                className={`w-8 h-8 rounded-full ${option.color}  ${selectedIndex === index ? 'ring' : ''}`}
                style={{
                  
                  boxShadow: selectedIndex === index ? `0 0 10px 4px ${getShadowColor(option.color)}` : 'none',
                }}
              ></div>
              <span className={`mt-2 ${selectedIndex === index ? 'font-semibold text-customFont' : 'text-customFont'}`}>
                {option.label}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FeedbackComponent;
