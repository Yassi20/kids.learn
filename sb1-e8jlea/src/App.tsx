import React, { useState } from 'react';
import { Book, Brain, Palette, Award, Settings } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import GameSelector from './components/GameSelector';
import MathGame from './games/MathGame';
import ReadingGame from './games/ReadingGame';
import ScienceGame from './games/ScienceGame';
import ArtGame from './games/ArtGame';

const App: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games = [
    { id: 'math', name: 'Math Adventure', icon: <Brain size={24} /> },
    { id: 'reading', name: 'Reading Quest', icon: <Book size={24} /> },
    { id: 'science', name: 'Science Explorer', icon: <Palette size={24} /> },
    { id: 'art', name: 'Art Studio', icon: <Award size={24} /> },
  ];

  const renderGame = () => {
    switch (selectedGame) {
      case 'math':
        return <MathGame />;
      case 'reading':
        return <ReadingGame />;
      case 'science':
        return <ScienceGame />;
      case 'art':
        return <ArtGame />;
      default:
        return <GameSelector games={games} onSelectGame={setSelectedGame} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderGame()}
      </main>
      <Footer />
    </div>
  );
};

export default App;