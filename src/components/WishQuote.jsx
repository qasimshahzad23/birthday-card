import React, { useEffect, useState } from 'react';

const WishQuote = ({ name, onStop }) => {
  const quotes = [
    "May your year be filled with endless adventures!",
    "Wishing you a day as bright as your smile!",
    "Cheers to another year of making memories!",
    "May all your dreams turn into reality this year!",
    "You're not getting older, you're getting better!",
    "Sending you big hugs and many blessings!",
    "To a person who is forever young—have a great day!",
    "May your cake be sweet, but your year be sweeter.",
    "Life is a journey, enjoy every mile of it today.",
    "Keep shining, the world needs your light.",
    "Another year wiser, another year stronger.",
    "May your heart be full and your glass never empty.",
    "Sending you 365 days of smiles and joy.",
    "The world became a better place the day you were born.",
    "Don't count the candles, see the light they give.",
    "May your birthday be as incredible as you are.",
    "You deserve all the happiness in the world today.",
    "Here’s to many more years of health and prosperity.",
    "Make a wish and watch it come true!",
    "To the world's best person—Happy Birthday!",
    "May today be the start of your best year yet.",
    "Count your life by smiles, not tears.",
    "A birthday is the first day of another 365-day journey around the sun.",
    "Be happy! Today is the day you were brought into this world.",
    "You are a gift to everyone who knows you.",
    "Hope your special day is as wonderful as you!",
    "Enjoy your day to the fullest, you earned it.",
    "Sending you sunshine and laughter today.",
    "May you be gifted with life’s biggest joys.",
    "I hope all your birthday wishes come true!",
    "Today is about you. Enjoy every second.",
    "Thinking of you on your birthday and wishing you the best.",
    "May your birthday be full of happy hours and special moments.",
    "Wishing you a beautiful day and a lifetime of happiness.",
    "I hope your day is filled with love and laughter!",
    "May the joy that you have spread in the past come back to you.",
    "Happy birthday! May your Facebook wall be filled with messages from people you never talk to.",
    "Another year older, but definitely not another year wiser!",
    "You’re one in a million. Have a great one!",
    "The more you praise and celebrate your life, the more there is in life to celebrate.",
    "Your birthday is the perfect time to remind you what a wonderful person you are.",
    "Wishing you a day that is as special in every way as you are.",
    "Sending you smiles for every moment of your special day.",
    "Hope your birthday is just like you... totally awesome!",
    "Wishing you a day that's as beautiful as your soul.",
    "May your year be full of surprises and blessings.",
    "Keep calm and celebrate on!",
    "Age is just a number, but yours is getting quite large!",
    "You’re not old, you’re a classic.",
    "Wishing you the happiest of birthdays today.",
    "May you get everything you wished for today.",
    "Cheers to you for another great year!",
    "May your birthday be the window to a year of success.",
    "You make the world a better place just by being in it.",
    "Live your life and forget your age.",
    "Growing old is mandatory, but growing up is optional.",
    "I’m so glad you were born!",
    "Here's to a year of good health, big dreams, and great coffee.",
    "May your birthday be full of magic and sparkles.",
    "Wishing you endless happiness and zero stress.",
    "Stay true to yourself, you're amazing.",
    "Everything is better with you around.",
    "May your day be filled with your favorite things.",
    "Sending you a giant birthday hug!",
    "To many more years of friendship and fun.",
    "You are simply the best.",
    "May the force be with you on your birthday.",
    "Eat, drink, and be merry—it’s your day!",
    "Warmest wishes for a very happy birthday.",
    "May your path always be lined with flowers.",
    "Keep dreaming big!",
    "You are an inspiration to us all.",
    "Wishing you a legendary birthday celebration.",
    "May your coffee be strong and your birthday be long.",
    "Life is better with a friend like you.",
    "You are officially too old to die young!",
    "A simple wish for a wonderful person.",
    "May the stars align for you this year.",
    "You’ve got the whole world at your feet.",
    "Let’s eat cake and celebrate you!",
    "Wishing you a day of relaxation and luxury.",
    "You are loved more than you know.",
    "Keep your eyes on the stars and your feet on the ground.",
    "May your inner child never grow up.",
    "Sending you good vibes and great energy.",
    "To a year of breakthroughs and new beginnings.",
    "May you always have a reason to smile.",
    "Your life is a story, make this chapter the best one.",
    "The best is yet to come!",
    "Go out and celebrate—you deserve it.",
    "Happy Birthday to my favorite human.",
    "May your day be bright and your heart be light.",
    "To another year of incredible you!",
    "Wishing you peace, love, and plenty of cake.",
    "Stay awesome, stay you.",
    "The more candles, the bigger the wish!",
    "Wishing you a day filled with your favorite people.",
    "Today is the oldest you've ever been, and the youngest you'll ever be again.",
    "Make every moment count today.",
    "You are the highlight of every day.",
    "Sending you all the birthday love in the world!"
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState('translate-y-[-100px]'); // Initial direction

  const directions = [
    'translate-y-[-200px] opacity-0', // Top
    'translate-y-[200px] opacity-0',  // Bottom
    'translate-x-[-200px] opacity-0', // Left
    'translate-x-[200px] opacity-0',  // Right
    'scale-50 opacity-0',             // Zoom in
  ];

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      // Pick a random direction for the next entry
      const randomDir = directions[Math.floor(Math.random() * directions.length)];
      setDirection(randomDir);
      
      // Short delay to allow state to trigger re-render
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 50);
    }, 4000); // 4 seconds so user can actually read the long quotes

    return () => clearInterval(quoteInterval);
  }, [quotes.length]);

  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-5xl overflow-hidden p-10">
      {/* The 'key={index}' is the secret sauce. 
          It tells React to destroy and recreate the div, 
          which triggers the CSS animation every time the index changes.
      */}
      <div 
        key={index}
        className={`w-full p-24 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-[3rem] shadow-2xl text-white text-center transition-all duration-700 ease-out animate-slide-in`}
      >
        <h2 className="text-5xl italic font-serif leading-tight">
          "{quotes[index]}  <span className="font-bold border-b-2 border-white">{name}</span>"
        </h2>
      </div>
      
      <button 
        onClick={onStop}
        className="bg-black hover:bg-red-600 text-white px-12 py-5 rounded-2xl text-xl font-bold transition-all shadow-xl active:scale-95"
      >
        Stop Appearing
      </button>

      {/* Adding custom keyframe animation directly in the component */}
      <style>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: ${direction.includes('x') ? (direction.includes('-') ? 'translateX(-100px)' : 'translateX(100px)') : (direction.includes('-') ? 'translateY(-100px)' : 'translateY(100px)')};
          }
          100% {
            opacity: 1;
            transform: translate(0) scale(1);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WishQuote;