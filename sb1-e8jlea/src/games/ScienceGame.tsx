import React, { useState } from 'react';

const questions = [
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Saturn", "Earth"],
    correctAnswer: "Jupiter"
  },
  {
    question: "Which of these is NOT a state of matter?",
    options: ["Solid", "Liquid", "Gas", "Rock"],
    correctAnswer: "Rock"
  },
  {
    question: "What is the process by which plants make their own food?",
    options: ["Photosynthesis", "Respiration", "Digestion", "Circulation"],
    correctAnswer: "Photosynthesis"
  }
];

const ScienceGame: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer('');
      }, 1000);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer('');
  };

  if (showResult) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-purple-600 mb-6">Science Explorer</h2>
        <p className="text-xl mb-4">Your score: {score} out of {questions.length}</p>
        <button
          onClick={resetQuiz}
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Play Again
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-purple-600 mb-6">Science Explorer</h2>
      <p className="text-xl mb-4">{question.question}</p>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            className={`w-full p-2 rounded ${
              selectedAnswer === option
                ? option === question.correctAnswer
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            disabled={!!selectedAnswer}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="mt-4 text-center">Question {currentQuestion + 1} of {questions.length}</p>
    </div>
  );
};

export default ScienceGame;