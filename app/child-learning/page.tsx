'use client';

import { useState, useRef, useEffect } from 'react';

export default function ChildLearning() {
  const [activeModule, setActiveModule] = useState('speech');
  const [currentWord, setCurrentWord] = useState('Hello');
  const [speechScore, setSpeechScore] = useState(0);
  const [emotion, setEmotion] = useState<string | null>(null);
  const [gameScore, setGameScore] = useState(0);
  const [attentionScore, setAttentionScore] = useState(0);
  const [gameType, setGameType] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedShape, setSelectedShape] = useState<string | null>(null);
  const [isFocusGameActive, setIsFocusGameActive] = useState(false);
  const [focusTime, setFocusTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Speech Module
  const words = ['Hello', 'Thank You', 'Please', 'Water', 'Food', 'Help', 'Yes', 'No'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const nextWord = () => {
    const nextIndex = (currentWordIndex + 1) % words.length;
    setCurrentWordIndex(nextIndex);
    setCurrentWord(words[nextIndex]);
  };

  const speakWord = (word: string) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  // Emotion Recognition
  const startEmotionDetection = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        // Simulated emotion detection
        const emotions = ['happy', 'sad', 'angry', 'neutral', 'excited'];
        const interval = setInterval(() => {
          const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
          setEmotion(randomEmotion);
        }, 3000);
        
        return () => clearInterval(interval);
      });
  };

  // Learning Games
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
  const shapes = ['circle', 'square', 'triangle', 'star', 'heart', 'diamond'] as const;
  const shapeIcons: Record<(typeof shapes)[number], string> = {
    circle: '⭕',
    square: '⬜',
    triangle: '🔺',
    star: '⭐',
    heart: '❤️',
    diamond: '💎',
  };
  const [targetColor, setTargetColor] = useState<string | null>(null);
  const [targetShape, setTargetShape] = useState<string | null>(null);

  const startColorGame = () => {
    setGameType('color');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setSelectedColor(null);
    setGameScore(0);
  };

  const startShapeGame = () => {
    setGameType('shape');
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    setTargetShape(randomShape);
    setSelectedShape(null);
    setGameScore(0);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    if (color === targetColor) {
      setGameScore(gameScore + 10);
      setTimeout(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setTargetColor(randomColor);
        setSelectedColor(null);
      }, 1000);
    }
  };

  const handleShapeSelect = (shape: string) => {
    setSelectedShape(shape);
    if (shape === targetShape) {
      setGameScore(gameScore + 10);
      setTimeout(() => {
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        setTargetShape(randomShape);
        setSelectedShape(null);
      }, 1000);
    }
  };

  // Focus Trainer
  const startFocusGame = () => {
    setIsFocusGameActive(true);
    setFocusTime(0);
    const startTime = Date.now();
    const interval = setInterval(() => {
      setFocusTime(Math.floor((Date.now() - startTime) / 1000));
      if (focusTime >= 30) {
        setAttentionScore(Math.min(100, attentionScore + 10));
        setIsFocusGameActive(false);
        clearInterval(interval);
      }
    }, 1000);
  };

  // Dashboard Data
  const dashboardData = {
    dailyProgress: 75,
    speechScore: speechScore,
    emotionTrends: [
      { day: 'Mon', happy: 60, sad: 20, neutral: 20 },
      { day: 'Tue', happy: 70, sad: 10, neutral: 20 },
      { day: 'Wed', happy: 80, sad: 5, neutral: 15 },
    ],
    attentionScore: attentionScore,
    activityTime: '45 min',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Child Learning Platform
          </h1>
          <p className="text-xl text-gray-600">
            Specialized learning for children with special needs
          </p>
        </div>

        {/* Module Tabs */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="flex flex-wrap border-b border-gray-200">
            {[
              { id: 'speech', label: 'Speech & Communication' },
              { id: 'emotion', label: 'Emotion Recognition' },
              { id: 'games', label: 'Learning Games' },
              { id: 'focus', label: 'Focus Trainer' },
              { id: 'dashboard', label: 'Parent Dashboard' },
            ].map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`px-4 py-3 font-medium transition-colors text-sm md:text-base ${
                  activeModule === module.id
                    ? 'border-b-2 border-purple-600 text-purple-600 bg-purple-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {module.label}
              </button>
            ))}
          </div>

          <div className="p-8">
            {/* Speech & Communication Module */}
            {activeModule === 'speech' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Speech & Communication Module
                </h2>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Current Word: <span className="text-blue-600">{currentWord}</span>
                      </h3>
                      <p className="text-gray-600">Practice pronunciation and communication</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Score</p>
                      <p className="text-3xl font-bold text-purple-600">{speechScore}</p>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4 mb-6">
                    <button
                      onClick={() => speakWord(currentWord)}
                      className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                    >
                      🔊 Speak Word
                    </button>
                    <button
                      onClick={nextWord}
                      className="bg-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg"
                    >
                      Next Word →
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {words.map((word, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentWord(word);
                          setCurrentWordIndex(index);
                          speakWord(word);
                        }}
                        className="bg-white rounded-lg p-4 hover:bg-blue-50 transition-colors border-2 border-gray-200 hover:border-blue-400"
                      >
                        <p className="font-semibold text-gray-800">{word}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Emotion Recognition */}
            {activeModule === 'emotion' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Emotion Recognition 😊😔😡
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-700 mb-4">Camera Feed</h3>
                    <video
                      ref={videoRef}
                      className="w-full rounded-lg bg-gray-200"
                      style={{ height: '300px' }}
                      autoPlay
                      playsInline
                    />
                    <button
                      onClick={startEmotionDetection}
                      className="w-full mt-4 bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                    >
                      Start Emotion Detection
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-700 mb-4">Detected Emotion</h3>
                    {emotion ? (
                      <div className="text-center">
                        <p className="text-4xl font-bold text-gray-800 capitalize mb-4">
                          {emotion}
                        </p>
                        {emotion === 'sad' && (
                          <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                            <p className="text-blue-800">Showing calming animation...</p>
                          </div>
                        )}
                        {emotion === 'happy' && (
                          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                            <p className="text-yellow-800">Great! Keep it up!</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-12">
                        <p>Start detection to see emotions</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Learning Games */}
            {activeModule === 'games' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Interactive Learning Games
                </h2>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8">
                  {!gameType ? (
                    <div className="text-center">
                      <p className="text-lg text-gray-700 mb-6">Choose a game to play:</p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <button
                          onClick={startColorGame}
                          className="bg-red-500 text-white p-6 rounded-lg font-bold text-lg hover:bg-red-600 transition-colors shadow-lg"
                        >
                          Color Identification
                        </button>
                        <button
                          onClick={startShapeGame}
                          className="bg-blue-500 text-white p-6 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg"
                        >
                          Shape Matching
                        </button>
                        <button
                          onClick={() => setGameType('alphabet')}
                          className="bg-green-500 text-white p-6 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors shadow-lg"
                        >
                          Alphabet Learning
                        </button>
                      </div>
                    </div>
                  ) : gameType === 'color' ? (
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800">
                          Find the color: <span className="text-2xl capitalize">{targetColor}</span>
                        </h3>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Score</p>
                          <p className="text-3xl font-bold text-orange-600">{gameScore}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                        {colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => handleColorSelect(color)}
                            className={`h-24 rounded-lg transition-all transform hover:scale-110 ${
                              selectedColor === color ? 'ring-4 ring-yellow-400' : ''
                            }`}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      {selectedColor === targetColor && (
                        <div className="text-center bg-green-100 border border-green-300 rounded-lg p-4 mb-4">
                          <p className="text-2xl">Great job! +10 points</p>
                        </div>
                      )}
                      <button
                        onClick={() => setGameType(null)}
                        className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
                      >
                        Back to Games
                      </button>
                    </div>
                  ) : gameType === 'shape' ? (
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800">
                          Find the shape: <span className="text-2xl capitalize">{targetShape}</span>
                        </h3>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Score</p>
                          <p className="text-3xl font-bold text-orange-600">{gameScore}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                        {shapes.map((shape) => (
                          <button
                            key={shape}
                            onClick={() => handleShapeSelect(shape)}
                            className={`h-24 rounded-lg bg-blue-200 hover:bg-blue-300 transition-all transform hover:scale-110 flex flex-col items-center justify-center gap-1 ${
                              selectedShape === shape ? 'ring-4 ring-yellow-400' : ''
                            }`}
                          >
                            <span className="text-3xl" aria-hidden="true">{shapeIcons[shape]}</span>
                            <span className="text-sm font-semibold capitalize">{shape}</span>
                          </button>
                        ))}
                      </div>
                      {selectedShape === targetShape && (
                        <div className="text-center bg-green-100 border border-green-300 rounded-lg p-4 mb-4">
                          <p className="text-2xl">Great job! +10 points</p>
                        </div>
                      )}
                      <button
                        onClick={() => setGameType(null)}
                        className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
                      >
                        Back to Games
                      </button>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-6">Alphabet Learning</h3>
                      <div className="grid grid-cols-6 md:grid-cols-13 gap-3">
                        {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map((letter) => (
                          <button
                            key={letter}
                            onClick={() => speakWord(letter)}
                            className="bg-white rounded-lg p-4 hover:bg-blue-50 transition-colors border-2 border-gray-200 hover:border-blue-400 text-2xl font-bold"
                          >
                            {letter}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => setGameType(null)}
                        className="mt-6 bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
                      >
                        Back to Games
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Focus Trainer */}
            {activeModule === 'focus' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Focus & Attention Trainer
                </h2>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 text-center">
                  {!isFocusGameActive ? (
                    <div>
                      <p className="text-lg text-gray-700 mb-6">
                        Practice maintaining eye contact and focus for 30 seconds
                      </p>
                      <button
                        onClick={startFocusGame}
                        className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-colors shadow-lg"
                      >
                        Start Focus Game
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="text-2xl font-bold text-gray-800 mb-4">
                        Focus Time: {focusTime}s / 30s
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
                        <div
                          className="bg-green-600 h-4 rounded-full transition-all"
                          style={{ width: `${(focusTime / 30) * 100}%` }}
                        />
                      </div>
                      {focusTime >= 30 && (
                        <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                          <p className="text-2xl font-bold text-green-800">
                            Great job! Attention score: {attentionScore}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="mt-8 bg-white rounded-lg p-6">
                    <h3 className="font-semibold text-gray-700 mb-4">Attention Score</h3>
                    <p className="text-4xl font-bold text-green-600">{attentionScore}%</p>
                  </div>
                </div>
              </div>
            )}

            {/* Parent Dashboard */}
            {activeModule === 'dashboard' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Parent Dashboard
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-700 mb-4">Daily Progress</h3>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-blue-600 h-4 rounded-full"
                          style={{ width: `${dashboardData.dailyProgress}%` }}
                        />
                      </div>
                      <span className="text-2xl font-bold text-blue-600">
                        {dashboardData.dailyProgress}%
                      </span>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-700 mb-4">Speech Score</h3>
                    <p className="text-4xl font-bold text-purple-600">{dashboardData.speechScore}</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-700 mb-4">Attention Score</h3>
                    <p className="text-4xl font-bold text-green-600">{dashboardData.attentionScore}%</p>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-700 mb-4">Activity Time</h3>
                    <p className="text-4xl font-bold text-orange-600">{dashboardData.activityTime}</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-semibold text-gray-700 mb-4">Emotion Trends</h3>
                  <div className="space-y-3">
                    {dashboardData.emotionTrends.map((trend, index) => (
                      <div key={index}>
                        <p className="text-sm text-gray-600 mb-1">{trend.day}</p>
                        <div className="flex space-x-2">
                          <div
                            className="bg-yellow-400 h-6 rounded"
                            style={{ width: `${trend.happy}%` }}
                            title={`Happy: ${trend.happy}%`}
                          />
                          <div
                            className="bg-blue-400 h-6 rounded"
                            style={{ width: `${trend.sad}%` }}
                            title={`Sad: ${trend.sad}%`}
                          />
                          <div
                            className="bg-gray-400 h-6 rounded"
                            style={{ width: `${trend.neutral}%` }}
                            title={`Neutral: ${trend.neutral}%`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
