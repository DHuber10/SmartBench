
export function Footer() {
  return (
    <footer className="border-t bg-smartbench-gray-light">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-smartbench-blue text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M3 3v18h18" />
                  <path d="m7 17 4-4 4 4 6-6" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-gray-900">SmartBench</span>
            </div>
            <p className="mt-4 text-sm text-gray-500 max-w-xs">
              SmartBench helps small business owners make better decisions with actionable data insights.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-smartbench-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-smartbench-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-smartbench-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-smartbench-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">Product</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#features" className="text-gray-500 hover:text-smartbench-blue">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-500 hover:text-smartbench-blue">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-smartbench-blue">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-smartbench-blue">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-500 hover:text-smartbench-blue">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-smartbench-blue">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-smartbench-blue">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-smartbench-blue">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-500 hover:text-smartbench-blue">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-smartbench-blue">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-smartbench-blue">
                  Status Page
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between gap-4">
          <div className="flex space-x-4">
            <a href="#" className="text-xs text-gray-500 hover:text-smartbench-blue">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-smartbench-blue">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-smartbench-blue">
              Cookie Policy
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <div className="rounded-full border border-green-500 px-2 py-0.5 text-xs text-green-600">
              GDPR-ready
            </div>
            <span className="text-xs text-gray-500">
              © {new Date().getFullYear()} SmartBench. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
