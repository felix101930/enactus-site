// src/components/layouts/Footer.tsx

import enactusLogo from '../../assets/logos/logo-enactus-sait.png';

function Footer() {
  return (
    // The background color from your design is a very light tan/off-white.
    // Tailwind's bg-gray-50 is a close, clean approximation.
    <footer className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-8 text-gray-700">
          
          {/* Column 1: Logo */}
          <div className="md:col-span-1">
            <img
              src={enactusLogo}
              alt="Enactus SAIT Logo"
              className="h-12 w-auto"
            />
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
              <a href="mailto:enactus.saitpolytechnic@gmail.com" className="underline">
                enactus.saitpolytechnic@gmail.com
              </a>
            </p>
          </div>

          {/* Column 3: Socials */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Socials</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm underline hover:text-yellow-500">Youtube</a></li>
              <li><a href="#" className="text-sm underline hover:text-yellow-500">Instagram</a></li>
              <li><a href="#" className="text-sm underline hover:text-yellow-500">LinkedIn</a></li>
            </ul>
          </div>

          {/* Column 4: Inquiries */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Inquiries</h3>
            <p className="text-sm leading-relaxed">
              For any inquiries, questions or commendations, please mail at:
            </p>
          </div>

        </div>

        {/* Bottom Bar with "Go Up" Link */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-right">
          <a href="#" className="text-sm text-gray-600 underline hover:text-yellow-500">
            Go Up
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;