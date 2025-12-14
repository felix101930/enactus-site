// src/components/layouts/Footer.tsx

import enactusLogo from '../../assets/logos/logo-enactus-sait.png';

function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-8 text-gray-700">
          
          {/* Column 1: Logo */}
          <div className="md:col-span-1">
            <a href="/" aria-label="Back to Homepage">
              <img
                src={enactusLogo}
                alt="Enactus SAIT Logo"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Column 2: Location */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Located at</h3>
            <p className="text-sm leading-relaxed">
              1301 16 Ave NW, Calgary,
              <br />
              AB T2M 0L4
            </p>
            <p className="mt-4 text-sm">
              Mail:
              <br />
              <a href="mailto:enactus.saitpolytechnic@gmail.com" className="underline hover:text-yellow-500 transition-colors">
                enactus.saitpolytechnic@gmail.com
              </a>
            </p>
          </div>

          {/* Column 3: Socials */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Socials</h3>
            <ul className="space-y-2">
              {/* Updated Links */}
              <li><a href="https://www.youtube.com/@enactussait" target="_blank" rel="noopener noreferrer" className="text-sm underline hover:text-yellow-500 transition-colors">Youtube</a></li>
              <li><a href="https://www.instagram.com/EnactusSAIT" target="_blank" rel="noopener noreferrer" className="text-sm underline hover:text-yellow-500 transition-colors">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/enactus-sait/" target="_blank" rel="noopener noreferrer" className="text-sm underline hover:text-yellow-500 transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          {/* Column 4: Inquiries */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Inquiries</h3>
            <p className="text-sm leading-relaxed">
              For any inquiries, questions or commendations, please mail at:
            </p>
             <a href="mailto:enactus.saitpolytechnic@gmail.com" className="text-sm underline hover:text-yellow-500 transition-colors">
                enactus.saitpolytechnic@gmail.com
              </a>
          </div>

        </div>

        {/* Bottom Bar with "Go Up" Link */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-right">
          <a href="#top" className="text-sm text-gray-600 underline hover:text-yellow-500 transition-colors">
            Go Up
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;