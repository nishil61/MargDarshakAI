import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';

function AppContent() {
  const [chatMessages, setChatMessages] = useState<any[]>([
    {
      role: 'assistant',
      content: 'Hello! I am your Road Safety Intervention GPT. Ask me about road safety measures, specific highway interventions, or recommend solutions for particular safety issues across India.',
      timestamp: new Date()
    }
  ]);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <Header />

      <main className="flex-1 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full">
          <ChatInterface 
            messages={chatMessages}
            onMessagesChange={setChatMessages}
          />
        </div>
      </main>

      <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 py-4 flex-shrink-0 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Built for National Road Safety Hackathon 2025 | Team MargDarshak AI
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
