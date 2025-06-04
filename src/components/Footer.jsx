export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16 px-6 py-10 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-base font-semibold mb-3">Shop</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Kids
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sale
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3">Company</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3">Stay Connected</h3>
          <p className="mb-2">Subscribe to our newsletter</p>
          <form className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 border border-gray-300 rounded sm:rounded-l focus:outline-none"
            />
            <button className="bg-black text-white px-4 py-2 rounded sm:rounded-r hover:bg-gray-800">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 text-center text-xs text-gray-500">
        © 2025 ShoeStore. All rights reserved.
      </div>
    </footer>
  );
}
