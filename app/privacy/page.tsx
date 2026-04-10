import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | elpaso.fyi',
  description: 'Privacy Policy for elpaso.fyi - The Unofficial Guide to El Paso',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-light-bg py-16 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-12 text-slate-900">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-slate-900">
              Introduction
            </h2>
            <p>
              Welcome to elpaso.fyi ("we," "us," "our," or "Company"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains our data practices in plain language.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-slate-900">
              Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide to us through our website forms. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Any content you submit (reviews, event details, recommendations)</li>
            </ul>
            <p className="mt-4">
              We do not require you to provide personal information to browse our website. Information is only collected when you voluntarily submit it through our community submission forms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-slate-900">
              How We Use Your Information
            </h2>
            <p>
              We use the information you provide exclusively for the purpose of:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>Reviewing and processing your community submissions (reviews, events, recommendations)</li>
              <li>Contacting you regarding your submission if we have questions</li>
              <li>Improving our website and services</li>
            </ul>
            <p className="mt-4">
              We do not use your information for marketing purposes unless you have explicitly opted in to receive communications from us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-slate-900">
              Third-Party Services
            </h2>
            <p>
              We use Formspree as our form submission service. When you submit information through our forms, your data is transmitted to Formspree's servers for processing. We recommend reviewing Formspree's privacy policy to understand how they handle your data. We have configured Formspree to use your information only for form submission management and do not authorize them to use your data for their own marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-slate-900">
              Data Protection & Sale of Personal Data
            </h2>
            <p>
              <strong>We do not sell, trade, or rent your personal information to third parties.</strong> Your data is used solely for the purposes described in this policy. We take reasonable measures to protect your information from unauthorized access, alteration, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-slate-900">
              Cookies & Analytics
            </h2>
            <p>
              Our website may use standard cookies and analytics tools to:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>Improve site performance and user experience</li>
              <li>Track usage patterns and engagement</li>
              <li>Remember your preferences</li>
            </ul>
            <p className="mt-4">
              These tools help us understand how visitors use our site and allow us to enhance functionality. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-slate-900">
              Your Rights
            </h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>Request access to your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt out of communications</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at hello@elpaso.fyi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-slate-900">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We will notify you of significant changes by updating the date at the bottom of this page. Your continued use of our website indicates your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-slate-900">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> hello@elpaso.fyi
            </p>
          </section>

          <div className="pt-8 border-t border-slate-300 mt-12">
            <p className="text-sm text-slate-600">
              Last updated: April 2026
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
