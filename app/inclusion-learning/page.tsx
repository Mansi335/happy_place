'use client';

import { useState } from 'react';

export default function InclusionLearning() {
  const [activeTab, setActiveTab] = useState('sign-language');
  const [currentLesson, setCurrentLesson] = useState(0);
  const [quizActive, setQuizActive] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [progress, setProgress] = useState(0);

  // Sign Language Lessons (ASL fingerspelling A–Z)
  const signLanguageLessons = [
    { letter: 'A', description: 'Make a fist with your thumb alongside fingers', image: '✊' },
    { letter: 'B', description: 'Flat hand, all four fingers straight up, thumb folded across palm', image: '✋' },
    { letter: 'C', description: 'Form a C shape with your thumb and fingers', image: '🫱' },
    { letter: 'D', description: 'Index finger pointing up, other fingers in fist', image: '👆' },
    { letter: 'E', description: 'Fingers bent over thumb, thumb across palm', image: '✋' },
    { letter: 'F', description: 'Thumb and index tip touch, other fingers up (OK sign)', image: '👌' },
    { letter: 'G', description: 'Index finger pointing sideways, thumb in', image: '👉' },
    { letter: 'H', description: 'Index and middle fingers side by side, pointing up', image: '✌️' },
    { letter: 'I', description: 'Pinky extended up, thumb holds other fingers down', image: '🤙' },
    { letter: 'J', description: 'Pinky extended, trace a J in the air', image: '🤙' },
    { letter: 'K', description: 'Index and middle apart (V), thumb tip between them', image: '✌️' },
    { letter: 'L', description: 'Thumb and index form L, other fingers folded', image: '🤟' },
    { letter: 'M', description: 'Thumb under three fingers tucked down', image: '✊' },
    { letter: 'N', description: 'Thumb under index and middle fingers', image: '✊' },
    { letter: 'O', description: 'Fingers and thumb form an O shape', image: '⭕' },
    { letter: 'P', description: 'K hand flipped down, index and middle over thumb', image: '👌' },
    { letter: 'Q', description: 'G hand pointing down', image: '👇' },
    { letter: 'R', description: 'Index and middle crossed, index over middle', image: '🤞' },
    { letter: 'S', description: 'Fist with thumb in front of fingers', image: '✊' },
    { letter: 'T', description: 'Thumb between index and middle fingers', image: '✊' },
    { letter: 'U', description: 'Index and middle fingers together, pointing up', image: '✌️' },
    { letter: 'V', description: 'Index and middle fingers apart in V, pointing up', image: '✌️' },
    { letter: 'W', description: 'Thumb, index, and middle fingers up, spread', image: '🤟' },
    { letter: 'X', description: 'Index finger bent into a hook', image: '👆' },
    { letter: 'Y', description: 'Thumb and pinky extended out', image: '👍' },
    { letter: 'Z', description: 'Index finger traces a Z in the air', image: '👆' },
  ];

  // Braille Lessons
  const brailleLessons = [
    {
      letter: 'A',
      pattern: '⠁',
      description: 'Dot 1',
    },
    {
      letter: 'B',
      pattern: '⠃',
      description: 'Dots 1 and 2',
    },
    {
      letter: 'C',
      pattern: '⠉',
      description: 'Dots 1 and 4',
    },
    {
      letter: 'D',
      pattern: '⠙',
      description: 'Dots 1, 4, and 5',
    },
    {
      letter: 'E',
      pattern: '⠑',
      description: 'Dots 1 and 5',
    },
  ];

  // Quiz Questions
  const quizQuestions = [
    {
      question: 'What is the sign language gesture for "Hello"?',
      options: ['Wave hand', 'Thumbs up', 'Point to self', 'Clap hands'],
      correct: 0,
    },
    {
      question: 'In braille, which letter uses only dot 1?',
      options: ['A', 'B', 'C', 'D'],
      correct: 0,
    },
    {
      question: 'What does the sign language letter "A" look like?',
      options: ['Fist with thumb up', 'Open palm', 'Pointing finger', 'Closed fist'],
      correct: 0,
    },
    {
      question: 'How many dots are in a standard braille cell?',
      options: ['4', '6', '8', '10'],
      correct: 1,
    },
    {
      question: 'What is the sign for "Thank you"?',
      options: ['Thumbs up', 'Touch chin and move forward', 'Clap', 'Wave'],
      correct: 1,
    },
  ];

  const handleNextLesson = () => {
    if (currentLesson < signLanguageLessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
      setProgress(((currentLesson + 1) / signLanguageLessons.length) * 100);
    }
  };

  const handlePrevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
      setProgress((currentLesson / signLanguageLessons.length) * 100);
    }
  };

  const startQuiz = () => {
    setQuizActive(true);
    setCurrentQuizQuestion(0);
    setQuizScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex.toString());
    if (answerIndex === quizQuestions[currentQuizQuestion].correct) {
      setQuizScore(quizScore + 1);
      setShowResult(true);
    } else {
      setShowResult(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuizQuestion < quizQuestions.length - 1) {
      setCurrentQuizQuestion(currentQuizQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Quiz completed
      setQuizActive(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Inclusion Learning
          </h1>
          <p className="text-xl text-gray-600">
            Learn sign language, braille, and inclusive communication skills
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="flex flex-wrap border-b border-gray-200">
            {[
              { id: 'sign-language', label: 'Sign Language' },
              { id: 'braille', label: 'Braille' },
              { id: 'quiz', label: 'Quiz' },
              { id: 'progress', label: 'My Progress' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-green-600 text-green-600 bg-green-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-8">
            {/* Sign Language Learning */}
            {activeTab === 'sign-language' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Learn Sign Language
                </h2>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                  <div className="text-center mb-6">
                    <div className="text-8xl mb-4" role="img" aria-label={`Sign for letter ${signLanguageLessons[currentLesson].letter}`}>
                      {signLanguageLessons[currentLesson].image}
                    </div>
                    <h3 className="text-4xl font-bold text-gray-800 mb-2">
                      Letter: {signLanguageLessons[currentLesson].letter}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {signLanguageLessons[currentLesson].description}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-semibold text-gray-800">
                        {currentLesson + 1} / {signLanguageLessons.length}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-600 h-3 rounded-full transition-all"
                        style={{ width: `${((currentLesson + 1) / signLanguageLessons.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={handlePrevLesson}
                      disabled={currentLesson === 0}
                      className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={handleNextLesson}
                      disabled={currentLesson === signLanguageLessons.length - 1}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next →
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-13 gap-3">
                  {signLanguageLessons.map((lesson, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentLesson(index);
                        setProgress(((index + 1) / signLanguageLessons.length) * 100);
                      }}
                      className={`p-3 rounded-lg border-2 transition-all flex flex-col items-center ${
                        currentLesson === index
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 bg-white hover:border-blue-300'
                      }`}
                    >
                      <span className="text-3xl mb-1" aria-hidden="true">{lesson.image}</span>
                      <p className="font-semibold text-gray-800 text-sm">{lesson.letter}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Braille Learning */}
            {activeTab === 'braille' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Learn Braille
                </h2>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
                  <div className="text-center mb-6">
                    <div className="bg-gray-900 rounded-lg p-8 inline-block mb-4">
                      <div className="text-6xl text-white font-mono">
                        {brailleLessons[currentLesson].pattern}
                      </div>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-800 mb-2">
                      Letter: {brailleLessons[currentLesson].letter}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {brailleLessons[currentLesson].description}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-semibold text-gray-800">
                        {currentLesson + 1} / {brailleLessons.length}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-600 h-3 rounded-full transition-all"
                        style={{ width: `${((currentLesson + 1) / brailleLessons.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={handlePrevLesson}
                      disabled={currentLesson === 0}
                      className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={handleNextLesson}
                      disabled={currentLesson === brailleLessons.length - 1}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next →
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-5 gap-4">
                  {brailleLessons.map((lesson, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentLesson(index);
                        setProgress(((index + 1) / brailleLessons.length) * 100);
                      }}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        currentLesson === index
                          ? 'border-green-600 bg-green-50'
                          : 'border-gray-200 bg-white hover:border-green-300'
                      }`}
                    >
                      <div className="bg-gray-900 rounded p-2 mb-2">
                        <div className="text-2xl text-white font-mono text-center">
                          {lesson.pattern}
                        </div>
                      </div>
                      <p className="font-semibold text-gray-800">{lesson.letter}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quiz */}
            {activeTab === 'quiz' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Test Your Knowledge 📝
                </h2>

                {!quizActive ? (
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-12 text-center">
                    <div className="text-6xl mb-6">📝</div>
                    <p className="text-xl text-gray-700 mb-8">
                      Ready to test your knowledge? Take the quiz to see how much you've learned!
                    </p>
                    <button
                      onClick={startQuiz}
                      className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-colors shadow-lg"
                    >
                      Start Quiz
                    </button>
                  </div>
                ) : (
                  <div className="bg-white rounded-lg p-8 shadow-md">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Question {currentQuizQuestion + 1} of {quizQuestions.length}
                      </h3>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Score</p>
                        <p className="text-2xl font-bold text-yellow-600">{quizScore}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-2xl font-bold text-gray-800 mb-6">
                        {quizQuestions[currentQuizQuestion].question}
                      </p>

                      <div className="space-y-3">
                        {quizQuestions[currentQuizQuestion].options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => !showResult && handleQuizAnswer(index)}
                            disabled={showResult}
                            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                              showResult && index === quizQuestions[currentQuizQuestion].correct
                                ? 'border-green-500 bg-green-50'
                                : showResult && selectedAnswer === index.toString() && index !== quizQuestions[currentQuizQuestion].correct
                                ? 'border-red-500 bg-red-50'
                                : selectedAnswer === index.toString()
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                            }`}
                          >
                            <span className="font-medium text-gray-800">{option}</span>
                            {showResult && index === quizQuestions[currentQuizQuestion].correct && (
                              <span className="ml-2 text-green-600">Correct!</span>
                            )}
                            {showResult && selectedAnswer === index.toString() && index !== quizQuestions[currentQuizQuestion].correct && (
                              <span className="ml-2 text-red-600">Wrong</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {showResult && (
                      <div className="flex justify-end">
                        {currentQuizQuestion < quizQuestions.length - 1 ? (
                          <button
                            onClick={handleNextQuestion}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                          >
                            Next Question →
                          </button>
                        ) : (
                          <div className="w-full">
                            <div className="bg-green-100 border border-green-300 rounded-lg p-6 mb-4 text-center">
                              <p className="text-2xl font-bold text-green-800 mb-2">
                                Quiz Completed!
                              </p>
                              <p className="text-lg text-gray-700">
                                Your Score: {quizScore} / {quizQuestions.length}
                              </p>
                              <p className="text-sm text-gray-600 mt-2">
                                {((quizScore / quizQuestions.length) * 100).toFixed(0)}% Correct
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                setQuizActive(false);
                                setCurrentQuizQuestion(0);
                                setQuizScore(0);
                              }}
                              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                            >
                              Take Quiz Again
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Progress Tracking */}
            {activeTab === 'progress' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  My Learning Progress
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-700 mb-4">Sign Language</h3>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-semibold text-gray-800">60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-blue-600 h-3 rounded-full" style={{ width: '60%' }} />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">5 lessons completed</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-700 mb-4">Braille</h3>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-semibold text-gray-800">40%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-green-600 h-3 rounded-full" style={{ width: '40%' }} />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">2 lessons completed</p>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-700 mb-4">Quiz Score</h3>
                    <div className="mb-4">
                      <p className="text-4xl font-bold text-yellow-600 mb-2">
                        {quizScore > 0 ? ((quizScore / quizQuestions.length) * 100).toFixed(0) : 0}%
                      </p>
                      <p className="text-sm text-gray-600">
                        Best Score: {quizScore} / {quizQuestions.length}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-semibold text-gray-700 mb-4">Learning Streak</h3>
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-2xl font-bold text-gray-800">7 days</p>
                      <p className="text-sm text-gray-600">Keep it up!</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-semibold text-gray-700 mb-4">Achievements</h3>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-800">First Quiz</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-800">5 Lessons</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-800">Perfect Score</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-800">Learner</p>
                    </div>
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
