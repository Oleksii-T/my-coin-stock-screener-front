import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="hover:text-blue-200 transition">
          <h1 className="text-2xl font-bold">My App</h1>
        </Link>
        <ul className="flex space-x-6">
          <li></li>
          <li>
            <Link href="/about-us" className="hover:text-blue-200 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:text-blue-200 transition">
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="bg-white text-blue-600 py-2 px-4 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
