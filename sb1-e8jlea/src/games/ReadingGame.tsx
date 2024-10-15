import React, { useState, useEffect } from 'react';

const words = ['cat', 'dog', 'sun', 'tree', 'book', 'star', 'moon', 'fish', 'bird', 'house'];

const ReadingGame: React.FC = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    newWord();
  }, []);

  const newWord = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    setUserInput('');
    setFeedback('');
  };

  const checkWord = () => {
    if (userInput.toLowerCase() === currentWord) {
      setFeedback('Correct! Great job!');
      setScore(score + 1);
    } else {
      setFeedback(`Oops! The correct word is "${currentWord}".`);
    }

    setTimeout(newWord, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-purple-600 mb-6">Reading Quest</h2>
      <div className="text-4xl font-bold text-center mb-6">{currentWord}</div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        placeholder="Type the word you see"
      />
      <button
        onClick={checkWord}
        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
      >
        Submit
      </button>
      {feedback && (
        <p className="mt-4 text-center font-semibold">{feedback}</p>
      )}
      <p className="mt-4 text-center">Score: {score}</p>
    </div>
  );
};

export default ReadingGame;