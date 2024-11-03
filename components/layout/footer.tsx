export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              About ELMart
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Premium e-commerce platform offering high-quality products for the modern lifestyle.
              We curate the finest selection of products to enhance your daily experiences.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/products" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Products
                </a>
              </li>
              <li>
                <a href="/categories" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Categories
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:elijahbag456@gmail.com"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  elijahbag456@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/elias-balude-9a85122b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              © {currentYear} ELMart. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Created with ❤️ by <a href="https://eliasbalude.vercel.app/" className="text-lg font-semibold bg-gradient-to-r from-green-400 to-blue-700 bg-clip-text text-transparent" >Elias Balude</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}