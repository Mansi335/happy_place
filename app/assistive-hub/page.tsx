'use client';

import { useState, useRef } from 'react';

export default function AssistiveHub() {
  const [activeTab, setActiveTab] = useState('sign-language');
  const [signText, setSignText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [speechText, setSpeechText] = useState('');
  const [emotion, setEmotion] = useState<string | null>(null);
  const [imageDescription, setImageDescription] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sign Language Translator
  const handleSignLanguageTranslate = () => {
    // Simulated translation - in production, this would use ML models
    const translations: { [key: string]: string } = {
      'hello': 'Hello',
      'thank you': 'Thank you',
      'help': 'Help',
      'water': 'Water',
      'food': 'Food',
    };
    setTranslatedText(translations[signText.toLowerCase()] || 'Translation not available');
  };

  // Speech to Text
  const startRecording = () => {
    setIsRecording(true);
    setSpeechText('');
    setEmotion(null);
    
    // Simulated speech recognition
    setTimeout(() => {
      setSpeechText('Hello, I need help with something important.');
      setEmotion('neutral');
    }, 2000);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  // Image Description
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Simulated image description
      setImageDescription('This image shows a person standing in front of a building. The building has multiple windows and a main entrance. The person is wearing casual clothing and appears to be waiting.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Assistive Hub
          </h1>
          <p className="text-xl text-gray-600">
            Empowering communication and independence for everyone
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="flex flex-wrap border-b border-gray-200">
            {[
              { id: 'sign-language', label: 'Sign Language Translator' },
              { id: 'speech-text', label: 'Speech-to-Text' },
              { id: 'image-desc', label: 'Image Description' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-8">
            {/* Sign Language Translator */}
            {activeTab === 'sign-language' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  AI Sign-Language ↔ Text/Voice Translator
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-700 mb-4">Sign Language Input</h3>
                    <div className="mb-4">
                      <video
                        ref={videoRef}
                        className="w-full rounded-lg bg-gray-200"
                        style={{ height: '300px' }}
                        autoPlay
                        playsInline
                      />
                      <canvas ref={canvasRef} className="hidden" />
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Use your camera to perform sign language gestures
                    </p>
                    <button
                      onClick={() => {
                        navigator.mediaDevices.getUserMedia({ video: true })
                          .then(stream => {
                            if (videoRef.current) {
                              videoRef.current.srcObject = stream;
                            }
                          });
                      }}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Start Camera
                    </button>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-700 mb-4">Text Input/Output</h3>
                    <textarea
                      value={signText}
                      onChange={(e) => setSignText(e.target.value)}
                      placeholder="Type text to translate to sign language or enter sign language gesture..."
                      className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
                    />
                    <button
                      onClick={handleSignLanguageTranslate}
                      className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors mb-4"
                    >
                      Translate
                    </button>
                    
                    {translatedText && (
                      <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                        <p className="text-gray-800 font-medium">Translation:</p>
                        <p className="text-lg mt-2">{translatedText}</p>
                        <button
                          onClick={() => {
                            const utterance = new SpeechSynthesisUtterance(translatedText);
                            window.speechSynthesis.speak(utterance);
                          }}
                          className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
                        >
                          🔊 Speak Translation
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Speech-to-Text with Emotion */}
            {activeTab === 'speech-text' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Speech-to-Text with Emotion Indicators
                </h2>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 text-center">
                  <div className="mb-6">
                    {isRecording ? (
                      <div className="inline-block animate-pulse">
                        <p className="text-xl font-semibold text-gray-700">Recording...</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="flex justify-center space-x-4 mb-6">
                    {!isRecording ? (
                      <button
                        onClick={startRecording}
                        className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
                      >
                        Start Recording
                      </button>
                    ) : (
                      <button
                        onClick={stopRecording}
                        className="bg-gray-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-700 transition-colors shadow-lg"
                      >
                        Stop Recording
                      </button>
                    )}
                  </div>

                  {speechText && (
                    <div className="bg-white rounded-lg p-6 shadow-md mt-6">
                      <p className="text-lg text-gray-800 mb-4">{speechText}</p>
                      {emotion && (
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-sm text-gray-600">Emotion detected:</span>
                          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
                            {emotion === 'happy' && 'Happy'}
                            {emotion === 'sad' && 'Sad'}
                            {emotion === 'angry' && 'Angry'}
                            {emotion === 'neutral' && 'Neutral'}
                            {emotion === 'excited' && 'Excited'}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Image Description */}
            {activeTab === 'image-desc' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Image Description
                </h2>
                
                <div className="bg-gray-50 rounded-lg p-8">
                  <div className="text-center mb-6">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
                    >
                      Upload Image
                    </button>
                  </div>

                  {imageDescription && (
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="font-semibold text-gray-800 mb-3">Image Description:</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">{imageDescription}</p>
                      <button
                        onClick={() => {
                          const utterance = new SpeechSynthesisUtterance(imageDescription);
                          window.speechSynthesis.speak(utterance);
                        }}
                        className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                      >
                        Read Aloud
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
