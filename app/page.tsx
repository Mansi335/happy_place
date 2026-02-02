import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative Border Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top decorative elements */}
        <div className="absolute top-4 left-4 text-4xl">👦</div>
        <div className="absolute top-4 right-4 text-4xl">👧</div>
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-5xl">☁️</div>
        
        {/* Bottom decorative elements */}
        <div className="absolute bottom-4 left-4 text-4xl">👧</div>
        <div className="absolute bottom-4 right-4 text-4xl">👦</div>
        <div className="absolute bottom-8 left-8 text-3xl">🌼</div>
        <div className="absolute bottom-8 left-16 text-3xl">🌼</div>
        <div className="absolute bottom-8 right-8 text-3xl">🌼</div>
        <div className="absolute bottom-8 right-16 text-3xl">🌼</div>
        
        {/* Side decorative elements */}
        <div className="absolute top-1/4 left-2 text-3xl">🌼</div>
        <div className="absolute top-1/3 left-2 text-3xl">🌼</div>
        <div className="absolute top-1/4 right-2 text-3xl">🌼</div>
        <div className="absolute top-1/3 right-2 text-3xl">🌼</div>
      </div>

      {/* Main Content Container with Border */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative border-8 border-emerald-200 rounded-3xl bg-white/80 backdrop-blur-sm p-8 md:p-12 shadow-2xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            The Happy Place
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An inclusive platform designed to empower everyone through assistive technology, 
            specialized learning, and inclusion education.
          </p>
        </div>

        {/* Main Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Assistive Hub Card */}
          <Link href="/assistive-hub" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                Assistive Hub
              </h2>
              <p className="text-gray-600 mb-6">
                Empowering physically challenged individuals with AI-powered tools for communication, 
                navigation, and daily assistance.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center"><span className="mr-2">•</span><span>Sign Language Translator</span></div>
                <div className="flex items-center"><span className="mr-2">•</span><span>Speech-to-Text with Emotions</span></div>
                <div className="flex items-center"><span className="mr-2">•</span><span>Image Description</span></div>
              </div>
              <div className="mt-6 text-blue-600 font-medium group-hover:underline">
                Explore → 
              </div>
            </div>
          </Link>

          {/* Child Learning Card */}
          <Link href="/child-learning" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                Child Learning
              </h2>
              <p className="text-gray-600 mb-6">
                Specialized learning platform for children with special needs featuring 
                interactive games, emotion recognition, and progress tracking.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center"><span className="mr-2">•</span><span>Speech & Communication Module</span></div>
                <div className="flex items-center"><span className="mr-2">•</span><span>Emotion Recognition</span></div>
                <div className="flex items-center"><span className="mr-2">•</span><span>Interactive Learning Games</span></div>
                <div className="flex items-center"><span className="mr-2">•</span><span>Parent Dashboard</span></div>
              </div>
              <div className="mt-6 text-purple-600 font-medium group-hover:underline">
                Explore → 
              </div>
            </div>
          </Link>

          {/* Inclusion Learning Card */}
          <Link href="/inclusion-learning" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-pink-600 transition-colors">
                Inclusion Learning
              </h2>
              <p className="text-gray-600 mb-6">
                Learn sign language, braille, and inclusive communication skills. 
                Test your knowledge with quizzes and track your progress.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center"><span className="mr-2">•</span><span>Sign Language Learning</span></div>
                <div className="flex items-center"><span className="mr-2">•</span><span>Braille Learning</span></div>
                <div className="flex items-center"><span className="mr-2">•</span><span>Interactive Quizzes</span></div>
                <div className="flex items-center"><span className="mr-2">•</span><span>Progress Tracking</span></div>
              </div>
              <div className="mt-6 text-pink-600 font-medium group-hover:underline">
                Explore → 
              </div>
            </div>
          </Link>
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why The Happy Place?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2">AI-Powered</h3>
              <p className="text-sm text-gray-600">Advanced AI technology for better assistance</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2">Accessible</h3>
              <p className="text-sm text-gray-600">Designed with accessibility in mind</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2">Progress Tracking</h3>
              <p className="text-sm text-gray-600">Monitor learning and development</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2">Inclusive</h3>
              <p className="text-sm text-gray-600">For everyone, everywhere</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
