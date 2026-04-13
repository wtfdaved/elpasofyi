'use client';

import { useForm } from '@formspree/react';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

export function SubmitForm() {
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
            <p className="text-green-700 font-medium">Thanks for the drop! We'll review it soon.</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Submission Type */}
          <div>
            <label htmlFor="submissionType" className="block text-sm font-semibold text-slate-900 mb-2">
              Submission Type *
            </label>
            <select
              id="submissionType"
              name="submissionType"
              required
              disabled={state.submitting}
              className="w-full px-4 py-3 border border-slate-300 rounded-2xl bg-white text-slate-900 placeholder-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">Select a type</option>
              <option value="Restaurant / Bar">Restaurant / Bar</option>
              <option value="Local Event">Local Event</option>
              <option value="General Feedback">General Feedback</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
              Name of Spot/Event *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minLength={2}
              placeholder="e.g., El Paso Café, Summer Concert Series"
              disabled={state.submitting}
              className="w-full px-4 py-3 border border-slate-300 rounded-2xl bg-white text-slate-900 placeholder-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* The Vibe */}
          <div>
            <label htmlFor="vibe" className="block text-sm font-semibold text-slate-900 mb-2">
              The Vibe
            </label>
            <input
              type="text"
              id="vibe"
              name="vibe"
              placeholder="e.g., cozy, upscale, casual, energetic"
              disabled={state.submitting}
              className="w-full px-4 py-3 border border-slate-300 rounded-2xl bg-white text-slate-900 placeholder-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* The Experience */}
          <div>
            <label htmlFor="experience" className="block text-sm font-semibold text-slate-900 mb-2">
              The Experience *
            </label>
            <textarea
              id="experience"
              name="experience"
              required
              minLength={10}
              maxLength={500}
              placeholder="Tell us about your experience, what made it special, what you loved..."
              rows={5}
              disabled={state.submitting}
              className="w-full px-4 py-3 border border-slate-300 rounded-2xl bg-white text-slate-900 placeholder-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta disabled:opacity-50 disabled:cursor-not-allowed resize-none"
            />
          </div>

          {/* Rating */}
          <div>
            <label htmlFor="rating" className="block text-sm font-semibold text-slate-900 mb-2">
              Rating (1-10)
            </label>
            <select
              id="rating"
              name="rating"
              disabled={state.submitting}
              className="w-full px-4 py-3 border border-slate-300 rounded-2xl bg-white text-slate-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">Select a rating</option>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num} - {num <= 3 ? 'Not great' : num <= 6 ? 'Good' : num <= 8 ? 'Great' : 'Amazing'}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Submitting...' : 'Submit Tip'}
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
