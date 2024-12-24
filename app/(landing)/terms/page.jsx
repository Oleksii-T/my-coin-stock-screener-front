export default function TermsOfServicePage() {
  return (
    <div className="bg-gray-100">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">
            Terms of Service
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Welcome to My App. By using our platform, you agree to comply with
            and be bound by the following terms and conditions. Please review
            these terms carefully. If you do not agree to these terms, you
            should not use this platform.
          </p>

          {/* Terms Sections */}
          <div className="mt-12 space-y-8">
            {/* Section 1 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                1. Acceptance of Terms
              </h3>
              <p className="text-gray-700">
                By accessing and using our platform, you acknowledge that you
                have read, understood, and agree to be bound by these terms,
                along with our privacy policy.
              </p>
            </div>
            {/* Section 2 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                2. Use of the Platform
              </h3>
              <p className="text-gray-700">
                You agree to use the platform only for lawful purposes and in
                compliance with all applicable laws and regulations.
                Unauthorized use or misuse of the platform is strictly
                prohibited.
              </p>
            </div>
            {/* Section 3 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                3. Intellectual Property
              </h3>
              <p className="text-gray-700">
                All content, trademarks, and intellectual property on this
                platform are the property of My App or its licensors. You may
                not copy, reproduce, or distribute any content without prior
                written permission.
              </p>
            </div>
            {/* Section 4 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                4. Limitation of Liability
              </h3>
              <p className="text-gray-700">
                My App is not liable for any direct, indirect, incidental, or
                consequential damages arising from the use or inability to use
                the platform, even if we have been advised of the possibility of
                such damages.
              </p>
            </div>
            {/* Section 5 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                5. Changes to Terms
              </h3>
              <p className="text-gray-700">
                We reserve the right to update or modify these terms at any time
                without prior notice. Your continued use of the platform
                constitutes acceptance of the updated terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
