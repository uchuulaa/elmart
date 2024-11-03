export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>
        
        <div className="space-y-6 rounded-lg bg-white p-8 shadow-sm">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using ELMart, you agree to be bound by these Terms of Service
              and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">2. Products and Pricing</h2>
            <p className="text-gray-600">
              We strive to provide accurate product information and pricing. However, we
              reserve the right to refuse or cancel any orders containing pricing errors.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">3. Shipping and Delivery</h2>
            <p className="text-gray-600">
              Delivery times are estimates only. We are not responsible for delays
              beyond our control. Risk of loss and title pass to you upon delivery.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">4. Returns and Refunds</h2>
            <p className="text-gray-600">
              Products may be returned within 30 days of delivery. Items must be unused
              and in original packaging. Refunds will be processed within 5-7 business days.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">5. Intellectual Property</h2>
            <p className="text-gray-600">
              All content on ELMart is protected by copyright and other intellectual
              property rights owned by or licensed to us.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}