# 🌟 The Happy Place

An inclusive platform designed to empower everyone through assistive technology, specialized learning, and inclusion education.

## Features

### 🦻 Assistive Hub
- **AI Sign-Language ↔ Text/Voice Translator**: Real-time sign language recognition and translation
- **Speech-to-Text with Emotion Indicators**: Convert speech to text with emotion detection
- **Sign Language to Voice/Text Converter**: Help mute people express their thoughts
- **Image Description for Blind Users**: AI-powered image descriptions with text-to-speech
- **Emergency Communication with Symbols**: One-tap communication using visual symbols

### 🧒 Child Learning Platform
- **Speech & Communication Module**: Word practice, sentence practice, voice encouragement, multi-language support (Hindi + English)
- **Emotion Recognition**: Camera-based emotion detection with system reactions
- **Interactive Learning Games**: Color identification, shape matching, alphabet learning, object recognition, memory cards with gamified rewards
- **Focus & Attention Trainer**: 30-second eye contact game, follow moving object, attention score tracking
- **Parent Dashboard**: Daily progress, speech score, emotion trends, attention graph, activity time

### 📚 Inclusion Learning
- **Sign Language Learning**: Interactive lessons with visual guides
- **Braille Learning**: Learn braille patterns and letters
- **Interactive Quizzes**: Test your knowledge with quizzes
- **Progress Tracking**: Monitor your learning progress and achievements

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Firebase account (for authentication)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd winterhack
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or use an existing one
   - Go to Project Settings > General > Your apps
   - Add a web app and copy the configuration
   - Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

4. Enable Authentication in Firebase:
   - Go to Authentication > Sign-in method
   - Enable Email/Password authentication

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deploying to Vercel

1. Push your code to GitHub and import the project in [Vercel](https://vercel.com).
2. **If your repo root is a parent folder** (e.g. `winter hackathon/` with `winterhack/` inside): In Vercel Project Settings → General → **Root Directory**, set it to `winterhack`.
3. Add environment variables: `NEXT_PUBLIC_FIREBASE_API_KEY`, `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`, `NEXT_PUBLIC_FIREBASE_PROJECT_ID`, `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`, `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`, `NEXT_PUBLIC_FIREBASE_APP_ID`.
4. Deploy.

## Project Structure

```
winterhack/
├── app/
│   ├── assistive-hub/      # Assistive Hub page
│   ├── child-learning/      # Child Learning page
│   ├── inclusion-learning/  # Inclusion Learning page
│   ├── layout.tsx           # Root layout with AuthProvider
│   └── page.tsx             # Home page
├── components/
│   ├── AuthModal.tsx        # Login/Signup modal
│   └── Navbar.tsx           # Navigation bar
├── contexts/
│   └── AuthContext.tsx      # Firebase authentication context
└── lib/
    └── firebase.ts          # Firebase configuration
```

## Technologies Used

- **Next.js 16**: React framework with App Router
- **Firebase**: Authentication and database
- **Tailwind CSS**: Styling
- **TypeScript**: Type safety
- **React Hooks**: State management

## Features in Development

- Real-time sign language recognition using ML models
- Advanced emotion detection with camera
- Speech recognition API integration
- Image description using AI vision models
- Progress tracking with Firestore
- Multi-language support expansion

## Contributing

This is a hackathon project. Feel free to contribute and improve!

## License

MIT License

## Support

For issues or questions, please open an issue on GitHub.
