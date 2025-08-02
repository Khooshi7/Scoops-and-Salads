import React, { useState, useEffect } from 'react';
import "./Welcome.css"

const Welcome = () => {
  const [index, setIndex] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const phrases = ['','घर जैसा खाना', "Cook","Eat", "Repeat",  ]; // List of phrases to display

  useEffect(() => {
    const interval = setInterval(() => {setIsVisible(false); // Hide the text
    setTimeout(() => {
      setIndex(prevIndex => (prevIndex + 1) % phrases.length); // Change the index
      setIsVisible(true); // Show the next text
    }, 50); 
},1000  );
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="text-container">
      {isVisible && (
        <h1 className="slide-from-bottom">{phrases[index]}</h1>
      )}
    </div>
  );
};


export default Welcome;
