export default function AboutUsPage() {
  return (
    <div className="bg-gray-100">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-12">
            Welcome to My App! We are passionate about helping individuals and
            teams achieve their goals by providing a seamless and intuitive task
            management platform. Our mission is to empower people to work
            smarter, not harder, with tools designed for efficiency and
            productivity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <img
                src="/images/person-1.jpeg"
                alt="Team Member 1"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <img
                src="/images/person-2.webp"
                alt="Team Member 2"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Alex Johnson</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <img
                src="/images/person-3.jpg"
                alt="Team Member 3"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Product Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
