export default function LandingPage() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to My App</h1>
          <p className="text-lg mb-8">
            The ultimate platform to manage tasks, increase productivity, and
            achieve your goals.
          </p>
          <div>
            <button className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="ml-4 bg-transparent border border-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <img
                src="/images/feature-1.jpeg"
                alt="Feature 1"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                Our platform is designed to be user-friendly and intuitive for
                all.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <img
                src="/images/feature-2.jpg"
                alt="Feature 2"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Secure and Reliable
              </h3>
              <p className="text-gray-600">
                Your data is safe with our advanced security protocols.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <img
                src="/images/feature-3.jpeg"
                alt="Feature 3"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">
                Scale your operations effortlessly with our robust features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              My App is committed to revolutionizing task management by
              providing a seamless, secure, and intuitive platform. We believe
              in empowering individuals and teams to achieve their goals by
              simplifying the way they organize and execute tasks. With a focus
              on innovation and user experience, our mission is to create a tool
              that adapts to your needs and grows with you.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What is My App?</h3>
              <p className="text-gray-600">
                My App is a task management platform designed to help
                individuals and teams organize, prioritize, and achieve their
                goals efficiently.
              </p>
            </div>
            {/* FAQ Item 2 */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Is My App free to use?
              </h3>
              <p className="text-gray-600">
                Yes, My App offers a free plan with essential features. Advanced
                features and increased limits are available in our premium
                plans.
              </p>
            </div>
            {/* FAQ Item 3 */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Can I use My App on multiple devices?
              </h3>
              <p className="text-gray-600">
                Absolutely! My App is cloud-based and works seamlessly across
                desktops, tablets, and smartphones.
              </p>
            </div>
            {/* FAQ Item 4 */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                How do I get support?
              </h3>
              <p className="text-gray-600">
                You can reach out to our support team via the{" "}
                <a href="/contact-us" className="text-blue-600 hover:underline">
                  Contact Us
                </a>{" "}
                page. We’re here to help!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
