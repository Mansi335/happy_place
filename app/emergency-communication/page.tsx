'use client';

import { useState } from 'react';

export default function EmergencyCommunication() {
  const [selectedEmergency, setSelectedEmergency] = useState<string | null>(null);

  const emergencyOptions = [
    { id: 'help', symbol: '🆘', label: 'I need help', bg: 'bg-red-100', textCls: 'text-red-800' },
    { id: 'medical', symbol: '🏥', label: 'Medical emergency', bg: 'bg-red-50', textCls: 'text-red-900' },
    { id: 'police', symbol: '🚔', label: 'Call police', bg: 'bg-blue-100', textCls: 'text-blue-800' },
    { id: 'fire', symbol: '🔥', label: 'Fire emergency', bg: 'bg-orange-100', textCls: 'text-orange-800' },
    { id: 'water', symbol: '💧', label: 'I need water', bg: 'bg-sky-100', textCls: 'text-sky-800' },
    { id: 'bathroom', symbol: '🚽', label: 'Bathroom', bg: 'bg-green-100', textCls: 'text-green-800' },
    { id: 'hungry', symbol: '🍽️', label: 'I am hungry', bg: 'bg-amber-100', textCls: 'text-amber-800' },
    { id: 'pain', symbol: '😣', label: 'I am in pain', bg: 'bg-rose-100', textCls: 'text-rose-800' },
  ];

  const handleEmergencySelect = (id: string) => {
    setSelectedEmergency(id);
    setTimeout(() => {
      alert(`Emergency message sent: ${emergencyOptions.find(opt => opt.id === id)?.label}`);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Emergency Communication
          </h1>
          <p className="text-xl text-gray-600">
            One-tap help with visual symbols — communicate quickly when words are hard
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Emergency Communication with Symbols
          </h2>
          <p className="text-gray-600 mb-8">
            Tap a symbol below to send an emergency message. No speech required.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {emergencyOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleEmergencySelect(option.id)}
                className={`${option.bg} ${option.textCls} rounded-xl p-6 hover:brightness-95 transition-all transform hover:scale-105 shadow-md border border-white/50 ${
                  selectedEmergency === option.id ? 'ring-2 ring-gray-400 ring-offset-2' : ''
                }`}
              >
                <div className="text-4xl mb-2" aria-hidden="true">{option.symbol}</div>
                <div className="font-semibold text-sm">{option.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
