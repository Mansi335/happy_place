'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import AuthModal from './AuthModal';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">The Happy Place</span>
            </Link>
            
            <div className="flex items-center space-x-6">
              <Link href="/assistive-hub" className="hover:text-teal-200 transition-colors">
                Assistive Hub
              </Link>
              <Link href="/emergency-communication" className="hover:text-teal-200 transition-colors">
                Emergency Help
              </Link>
              <Link href="/child-learning" className="hover:text-teal-200 transition-colors">
                Child Learning
              </Link>
              <Link href="/inclusion-learning" className="hover:text-teal-200 transition-colors">
                Inclusion Learning
              </Link>
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm">Welcome, {user.email?.split('@')[0]}</span>
                  <button
                    onClick={() => signOut()}
                    className="bg-white text-teal-700 px-4 py-2 rounded-lg font-medium hover:bg-teal-50 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleAuthClick('login')}
                  className="bg-white text-teal-700 px-4 py-2 rounded-lg font-medium hover:bg-teal-50 transition-colors"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        mode={authMode}
        onSwitchMode={(newMode) => setAuthMode(newMode)}
      />
    </>
  );
}
