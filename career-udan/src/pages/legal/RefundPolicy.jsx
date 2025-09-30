import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Refund Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Refund Eligibility</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Career Udan offers refunds for premium subscriptions under the following conditions:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Refund request made within 7 days of purchase</li>
                <li>No job applications submitted using premium features</li>
                <li>Technical issues preventing service usage</li>
                <li>Duplicate payments or billing errors</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Non-Refundable Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The following services are non-refundable:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Free services and features</li>
                <li>Services used for more than 7 days</li>
                <li>Services where job applications have been submitted</li>
                <li>Services terminated due to policy violations</li>
                <li>Third-party services or external job applications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Refund Process</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To request a refund:
              </p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Contact our support team at support@careerudan.com</li>
                <li>Provide your account details and reason for refund</li>
                <li>Our team will review your request within 2-3 business days</li>
                <li>If approved, refund will be processed within 5-7 business days</li>
                <li>You will receive confirmation via email</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Refund Methods</h2>
              <p className="text-gray-600 leading-relaxed">
                Refunds will be processed using the same payment method used for the original transaction. 
                Processing time may vary depending on your bank or payment provider.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Partial Refunds</h2>
              <p className="text-gray-600 leading-relaxed">
                In some cases, we may offer partial refunds based on the extent of service usage. 
                This will be determined on a case-by-case basis by our support team.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cancellation Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing period. 
                No refunds will be provided for the unused portion of the current billing period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Dispute Resolution</h2>
              <p className="text-gray-600 leading-relaxed">
                If you are not satisfied with our refund decision, you may contact us to discuss alternative resolutions. 
                We are committed to resolving all disputes fairly and promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For refund requests or questions about this policy, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> support@careerudan.com<br />
                  <strong>Phone:</strong> +91-9876543210<br />
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

export default RefundPolicy;
