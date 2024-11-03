export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
        
        <div className="space-y-6 rounded-lg bg-white p-8 shadow-sm">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Information We Collect</h2>
            <p className="text-gray-600">
              We collect information you provide directly to us, including name, email address, 
              shipping address, and payment information when you make a purchase.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">How We Use Your Information</h2>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>To process your orders and provide customer service</li>
              <li>To send you updates about your orders</li>
              <li>To improve our products and services</li>
              <li>To send marketing communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@elmart.com" className="text-blue-600 hover:underline">
                privacy@elmart.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}