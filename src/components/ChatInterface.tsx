import { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChatMessage } from '../types';
import { queryOpenAI } from '../utils/api';

interface ChatInterfaceProps {
  contextData?: string;
  messages?: ChatMessage[];
  onMessagesChange?: (messages: ChatMessage[]) => void;
}

export default function ChatInterface({ contextData, messages: externalMessages, onMessagesChange }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(externalMessages || [
    {
      role: 'assistant',
      content: 'Hello! I am your Road Safety Intervention GPT. Ask me about road safety measures, accident hotspots, or specific highway interventions across India.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const loadingMessages = [
    '🔍 Analyzing road safety issue...',
    '📊 Framing best safety interventions...',
    '⚡ Finding optimal solutions...',
    '✓ Crafting comprehensive response...',
    '🚀 Preparing best possible answer...',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setCurrentStatusIndex(prev => (prev + 1) % loadingMessages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    if (externalMessages && externalMessages.length > 0) {
      setMessages(externalMessages);
    }
  }, [externalMessages]);

  useEffect(() => {
    if (onMessagesChange) {
      onMessagesChange(messages);
    }
  }, [messages, onMessagesChange]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await queryOpenAI(input, contextData);
      
      const cleanedResponse = response
        .replace(/<br\s*\/?>/g, '\n')
        .replace(/<br>/g, '\n')
        .replace(/&lt;br&gt;/g, '\n')
        .replace(/&lt;br\s*\/?&gt;/g, '\n');

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: cleanedResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: 'Sorry, I encountered an error processing your request. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden transition-colors duration-300">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-slate-700 dark:to-slate-800 p-4 flex-shrink-0 transition-colors duration-300">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <Bot className="w-6 h-6" />
          MargDarshak AI Safety Assistant
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                message.role === 'user'
                  ? 'bg-blue-500'
                  : 'bg-gradient-to-br from-yellow-400 to-orange-500'
              }`}>
                {message.role === 'user' ? (
                  <User className="w-5 h-5 text-white" />
                ) : (
                  <Bot className="w-5 h-5 text-white" />
                )}
              </div>
              <div className={`flex-1 max-w-full ${
                message.role === 'user' ? 'text-right' : 'text-left'
              }`}>
                <div className={`p-4 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white rounded-tr-none inline-block max-w-[80%] ml-auto'
                    : 'bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-100 rounded-tl-none w-full'
                }`}>
                  {message.role === 'user' ? (
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  ) : (
                    <div className="text-sm leading-relaxed prose prose-sm max-w-none dark:prose-invert">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          table: ({ children, ...props }) => (
                            <div className="overflow-x-auto my-4 rounded-lg border border-gray-300 dark:border-gray-600">
                              <table className="w-full border-collapse" {...props}>
                                {children}
                              </table>
                            </div>
                          ),
                          thead: ({ children, ...props }) => (
                            <thead className="bg-blue-50 dark:bg-slate-600" {...props}>
                              {children}
                            </thead>
                          ),
                          tbody: ({ children, ...props }) => (
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700" {...props}>
                              {children}
                            </tbody>
                          ),
                          tr: ({ children, ...props }) => (
                            <tr className="divide-x divide-gray-200 dark:divide-gray-700" {...props}>
                              {children}
                            </tr>
                          ),
                          th: ({ children, ...props }) => (
                            <th className="px-4 py-3 text-left font-bold bg-blue-50 dark:bg-slate-600 text-gray-800 dark:text-gray-100 whitespace-nowrap" {...props}>
                              {children}
                            </th>
                          ),
                          td: ({ children, ...props }) => (
                            <td className="px-4 py-2 text-gray-700 dark:text-gray-200 whitespace-normal break-words" {...props}>
                              {children}
                            </td>
                          ),
                          p: ({ children, ...props }) => (
                            <p className="mb-4 last:mb-0" {...props}>
                              {children}
                            </p>
                          ),
                          ul: ({ children, ...props }) => (
                            <ul className="list-disc list-inside mb-4 space-y-1" {...props}>
                              {children}
                            </ul>
                          ),
                          ol: ({ children, ...props }) => (
                            <ol className="list-decimal list-inside mb-4 space-y-1" {...props}>
                              {children}
                            </ol>
                          ),
                          li: ({ children, ...props }) => (
                            <li className="mb-1" {...props}>
                              {children}
                            </li>
                          ),
                          strong: ({ children, ...props }) => (
                            <strong className="font-semibold" {...props}>
                              {children}
                            </strong>
                          ),
                          em: ({ children, ...props }) => (
                            <em className="italic" {...props}>
                              {children}
                            </em>
                          ),
                          h1: ({ children, ...props }) => (
                            <h1 className="text-xl font-bold mb-4 mt-6 first:mt-0" {...props}>
                              {children}
                            </h1>
                          ),
                          h2: ({ children, ...props }) => (
                            <h2 className="text-lg font-bold mb-3 mt-5 first:mt-0" {...props}>
                              {children}
                            </h2>
                          ),
                          h3: ({ children, ...props }) => (
                            <h3 className="text-base font-semibold mb-2 mt-4 first:mt-0" {...props}>
                              {children}
                            </h3>
                          ),
                          code: ({ children, ...props }) => (
                            <code className="bg-gray-200 dark:bg-slate-600 px-2 py-1 rounded text-sm font-mono" {...props}>
                              {children}
                            </code>
                          ),
                          pre: ({ children, ...props }) => (
                            <pre className="bg-gray-200 dark:bg-slate-600 p-4 rounded overflow-x-auto mb-4" {...props}>
                              {children}
                            </pre>
                          ),
                          br: () => <div className="my-2" />,
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
                <p className={`text-xs text-gray-500 dark:text-gray-400 mt-1 px-1 ${
                  message.role === 'user' ? 'text-right' : 'text-left'
                }`}>
                  {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
              <motion.div
                key={currentStatusIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="text-gray-700 dark:text-gray-200 text-sm font-medium"
              >
                {loadingMessages[currentStatusIndex]}
              </motion.div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 transition-colors duration-300 flex-shrink-0">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about road safety interventions..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-slate-700 text-white rounded-xl transition-all duration-200 flex items-center gap-2 disabled:cursor-not-allowed flex-shrink-0"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
