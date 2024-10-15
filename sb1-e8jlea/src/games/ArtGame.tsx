import React, { useState, useRef, useEffect } from 'react';

const ArtGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        context.lineCap = 'round';
        context.lineJoin = 'round';
      }
    }
  }, []);

  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(event);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (context && canvas) {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      context.strokeStyle = color;
      context.lineWidth = brushSize;
      context.lineTo(x, y);
      context.stroke();
      context.beginPath();
      context.moveTo(x, y);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (context && canvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-purple-600 mb-6">Art Studio</h2>
      <div className="mb-4 flex justify-between items-center">
        <div>
          <label htmlFor="color" className="mr-2">Color:</label>
          <input
            type="color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="border rounded"
          />
        </div>
        <div>
          <label htmlFor="brushSize" className="mr-2">Brush Size:</label>
          <input
            type="range"
            id="brushSize"
            min="1"
            max="20"
            value={brushSize}
            onChange={(e) => setBrushSize(parseInt(e.target.value))}
            className="w-32"
          />
        </div>
        <button
          onClick={clearCanvas}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear
        </button>
      </div>
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        onMouseLeave={stopDrawing}
        className="border border-gray-300 rounded"
      />
    </div>
  );
};

export default ArtGame;