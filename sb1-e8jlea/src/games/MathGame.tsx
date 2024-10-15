import React, { useState, useEffect } from 'react';

const MathGame: React.FC = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('+');
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setOperation(['+', '-', '*'][Math.floor(Math.random() * 3)]);
    setUserAnswer('');
    setFeedback('');
  };

  const checkAnswer = () => {
    let correctAnswer;
    switch (operation) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      default:
        correctAnswer = 0;
    }

    if (parseInt(userAnswer) === correctAnswer) {
      setFeedback('Correct! Great job!');
      setScore(score + 1);
    } else {
      setFeedback(`Oops! The correct answer is ${correctAnswer}.`);
    }

    setTimeout(generateQuestion, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-purple-600 mb-6">Math Adventure</h2>
      <div className="text-4xl font-bold text-center mb-6">
        {num1} {operation} {num2} = ?
      </div>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        placeholder="Enter your answer"
      />
      <button
        onClick={checkAnswer}
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

export default MathGame;