import React, { useEffect, useState } from 'react';

import { quotes } from '../quotes.js'; // Clean import

const WishQuote = ({ name, onStop }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState('translate-y-[-100px]');

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      // Logic for random direction
      const directions = ['top', 'bottom', 'left', 'right', 'zoom'];
      setDirection(directions[Math.floor(Math.random() * directions.length)]);
      
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-5xl overflow-hidden p-10">
      <div 
        key={index}
        className="w-full p-24 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-[3rem] shadow-2xl text-white text-center animate-slide-in"
      >
        <h2 className="text-5xl italic font-serif leading-tight">
          "{quotes[index]} <span className="font-bold border-b-2 border-white">{name}</span>"
        </h2>
      </div>
      
      <button 
        onClick={onStop}
        className="bg-black hover:bg-red-600 text-white px-12 py-5 rounded-2xl text-xl font-bold transition-all shadow-xl active:scale-95"
      >
        Stop Appearing
      </button>

      <style>{`
        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WishQuote;