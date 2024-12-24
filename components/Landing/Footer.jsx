import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        {/* Footer Links */}
        <ul className="flex justify-center space-x-8 mb-6">
          <li>
            <Link href="/terms" className="hover:text-gray-400 transition">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:text-gray-400 transition">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:text-gray-400 transition">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Footer Text */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
