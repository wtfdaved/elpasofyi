'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { subscribeToNewsletter } from '@/app/actions/newsletter';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const formData = new FormData();
      formData.append('email', email);

      const result = await subscribeToNewsletter(formData);

      if (result.success) {
        setStatus('success');
        setMessage(result.message);
        setEmail('');

        // Reset after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage(result.message);

        // Reset after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Try again.');

      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'loading'}
          className="min-h-12 flex-1 rounded-full border border-sand-line bg-white px-5 py-3 font-sans text-sm text-ink placeholder-ink-faint transition-colors hover:border-ink/30 focus:border-sun disabled:cursor-not-allowed disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading' || !email}
          className="btn-primary whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Subscribe</span>
        </button>
      </div>

      {/* Status messages */}
      {status === 'success' && (
        <div className="mt-3 animate-fadeIn text-sm font-medium text-sage">
          ✓ {message}
        </div>
      )}
      {status === 'error' && (
        <div className="mt-3 animate-fadeIn text-sm font-medium text-chile">
          ✗ {message}
        </div>
      )}
    </form>
  );
}
