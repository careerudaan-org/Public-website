import { Link } from 'react-router-dom';

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Cancellation Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Subscription Cancellation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may cancel your Career Udan premium subscription at any time through your account settings or by contacting our support team. 
                Cancellation will take effect at the end of your current billing period.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access to premium features will continue until the end of the billing period</li>
                <li>No partial refunds for unused time in the current billing period</li>
                <li>Your account will revert to free tier after cancellation</li>
                <li>You can resubscribe at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How to Cancel</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can cancel your subscription through:
              </p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li><strong>Account Settings:</strong> Log in to your account and go to Subscription settings</li>
                <li><strong>Email:</strong> Send cancellation request to support@careerudan.com</li>
                <li><strong>Phone:</strong> Call our support team at +91-9876543210</li>
                <li><strong>Live Chat:</strong> Use our in-app support chat feature</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Immediate Cancellation</h2>
              <p className="text-gray-600 leading-relaxed">
                In certain circumstances, we may provide immediate cancellation and refund:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Technical issues preventing service usage</li>
                <li>Billing errors or unauthorized charges</li>
                <li>Service discontinuation by Career Udan</li>
                <li>Violation of terms leading to account termination</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Retention After Cancellation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                After cancellation, your data will be handled as follows:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Profile information will be retained for 30 days</li>
                <li>Job application history will be archived</li>
                <li>Resume and documents will be deleted after 30 days</li>
                <li>Account can be reactivated within 30 days</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Account Deletion</h2>
              <p className="text-gray-600 leading-relaxed">
                You may request complete account deletion, which will permanently remove all your data from our systems. 
                This action cannot be undone. Account deletion requests will be processed within 7 business days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Employer Account Cancellation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For employer accounts, cancellation policies include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Active job postings will remain live until expiration</li>
                <li>Candidate applications will be accessible for 90 days</li>
                <li>Billing will stop at the end of current period</li>
                <li>Company profile will be deactivated</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Reinstatement</h2>
              <p className="text-gray-600 leading-relaxed">
                If you wish to reactivate your account after cancellation, you can do so within 30 days without losing your data. 
                After 30 days, you may need to create a new account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact for Cancellation</h2>
              <p className="text-gray-600 leading-relaxed">
                For assistance with cancellation or questions about this policy:
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> support@careerudan.com<br />
                  <strong>Phone:</strong> +91-9876543210<br />
                  <strong>Live Chat:</strong> Available 24/7 on our website<br />
                  <strong>Business Hours:</strong> Monday - Friday, 9 AM - 6 PM IST
                </p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
