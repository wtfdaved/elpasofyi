'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // TODO: Integrate with ConvertKit API
      // For now, this is a placeholder that logs the email
      console.log('Newsletter signup:', email);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      setStatus('success');
      setMessage('Thanks for signing up!');
      setEmail('');

      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'loading'}
          className="flex-1 px-4 py-3 bg-dark-bg-secondary border-2 border-sand text-dark-text placeholder-dark-text-dim font-mono text-sm transition-all duration-300 hover:border-sand focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={status === 'loading' || !email}
          className="btn-primary px-4 py-3 flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Submit</span>
        </button>
      </div>

      {/* Status messages */}
      {status === 'success' && (
        <div className="mt-2 text-sm text-sand animate-fadeIn">
          ✓ {message}
        </div>
      )}
      {status === 'error' && (
        <div className="mt-2 text-sm text-neon-pink animate-fadeIn">
          ✗ {message}
        </div>
      )}

      {/* Placeholder note */}
      <p className="mt-2 text-xs text-dark-text-dim font-mono">
        ConvertKit integration coming soon. Emails logged to console for now.
      </p>
    </form>
  );
}
