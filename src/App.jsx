import React, { useEffect, useState } from 'react';

import BirthdayCard from './components/BirthdayCard';
import WishQuote from './components/WishQuote';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('');
  const [step, setStep] = useState('form');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    if (inputValue.trim()) {
      setName(inputValue);
      setStep('card');
    }
  };

  useEffect(() => {
    if (step === 'card') {
      const timer = setTimeout(() => {
        setStep('quote');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-10 overflow-hidden">

      {step === 'form' && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-md bg-white p-12 rounded-3xl shadow-xl">
          <h1 className="font-black text-4xl text-center text-gray-900">Birthday wishes....</h1>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your name..."
            className="border-4 border-gray-100 p-5 rounded-2xl text-xl focus:outline-none focus:border-blue-500 transition-all shadow-inner"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-5 rounded-2xl text-2xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
          >
            Create Magic ✨
          </button>
        </form>
      )}

      {step === 'card' && <BirthdayCard name={name} />}

      {step === 'quote' && (
        <WishQuote name={name} onStop={() => {
          setStep('form');
          setInputValue('');
        }} />
      )}

    </div>
  );
}

export default App;