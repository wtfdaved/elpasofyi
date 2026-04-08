'use client';

import { useForm } from '@formspree/react';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

export function SubmitEventForm() {
  const [state, handleSubmit] = useForm('xnjoryqb');
  const [showSuccess, setShowSuccess] = useState(false);

  // Auto-hide success message after 3 seconds
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div className="w-full bg-light-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Success Message */}
        {showSuccess && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3 animate-fadeIn">
            <Check className="w-5 h-5 text-green-600" />
            <p className="text-green-700 font-medium">Event dropped successfully. We'll add it to the radar.</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Name */}
          <div>
            <label htmlFor="eventName" className="block text-sm font-semibold text-slate-900 mb-2">
              Event Name *
            </label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              required
              minLength={2}
              placeholder="e.g., Summer Music Festival, Pop-Up Market"
              disabled={state.submitting}
              className="w-full px-4 py-3 border border-slate-300 rounded-2xl bg-white text-slate-900 placeholder-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sunset-orange/20 focus:border-sunset-orange disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Date & Time */}
          <div>
            <label htmlFor="dateTime" className="block text-sm font-semibold text-slate-900 mb-2">
              Date & Time *
            </label>
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              required
              disabled={state.submitting}
              className="w-full px-4 py-3 border border-slate-300 rounded-2xl bg-white text-slate-900 placeholder-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sunset-orange/20 focus:border-sunset-orange disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Venue / Location */}
          <div>
            <label htmlFor="venue" className="block text-sm font-semibold text-slate-900 mb-2">
              Venue / Location *
            </label>
            <input
              type="text"
              id="venue"
              name="venue"
              required
              minLength={2}
              placeholder="e.g., Downtown Plaza, The Tap Room, San Jacinto Park"
              disabled={state.submitting}
              className="w-full px-4 py-3 border border-slate-300 rounded-2xl bg-white text-slate-900 placeholder-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sunset-orange/20 focus:border-sunset-orange disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* The Vibe / Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-slate-900 mb-2">
              The Vibe / Description *
            </label>
            <p className="text-xs text-slate-500 mb-2">What should people expect?</p>
            <textarea
              id="description"
              name="description"
              required
              minLength={10}
              maxLength={500}
              placeholder="Tell us about the event vibe, energy, what attendees can expect..."
              rows={5}
              disabled={state.submitting}
              className="w-full px-4 py-3 border border-slate-300 rounded-2xl bg-white text-slate-900 placeholder-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sunset-orange/20 focus:border-sunset-orange disabled:opacity-50 disabled:cursor-not-allowed resize-none"
            />
          </div>

          {/* Link */}
          <div>
            <label htmlFor="link" className="block text-sm font-semibold text-slate-900 mb-2">
              Link <span className="text-slate-500 font-normal">(optional)</span>
            </label>
            <p className="text-xs text-slate-500 mb-2">Link to tickets, RSVP, or Instagram post</p>
            <input
              type="url"
              id="link"
              name="link"
              placeholder="https://example.com/tickets"
              disabled={state.submitting}
              className="w-full px-4 py-3 border border-slate-300 rounded-2xl bg-white text-slate-900 placeholder-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sunset-orange/20 focus:border-sunset-orange disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Submitting...' : 'Submit Event'}
          </button>

          {/* Error Message */}
          {state.errors && Object.keys(state.errors).length > 0 && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
              <p className="text-red-700 text-sm font-medium">
                There was an error submitting your form. Please try again.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
