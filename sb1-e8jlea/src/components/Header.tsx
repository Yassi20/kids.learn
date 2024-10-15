import React from 'react';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Sparkles className="text-yellow-500" size={32} />
          <h1 className="text-2xl font-bold text-purple-600">KidLearn Explorer</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-purple-600 hover:text-purple-800">Home</a></li>
            <li><a href="#" className="text-purple-600 hover:text-purple-800">Games</a></li>
            <li><a href="#" className="text-purple-600 hover:text-purple-800">Progress</a></li>
            <li><a href="#" className="text-purple-600 hover:text-purple-800">Settings</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;