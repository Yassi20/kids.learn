import React from 'react';

interface Game {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface GameSelectorProps {
  games: Game[];
  onSelectGame: (gameId: string) => void;
}

const GameSelector: React.FC<GameSelectorProps> = ({ games, onSelectGame }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {games.map((game) => (
        <button
          key={game.id}
          onClick={() => onSelectGame(game.id)}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-transform transform hover:scale-105"
        >
          <div className="text-purple-600 mb-4">{game.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800">{game.name}</h3>
        </button>
      ))}
    </div>
  );
};

export default GameSelector;