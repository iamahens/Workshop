import { FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0f0f0f] text-white py-16 px-6 sm:px-10 overflow-hidden">
      {/* Background glowing hues */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[radial-gradient(circle,_#00ffff,_#9333ea,_transparent)] blur-[120px] opacity-20 z-0"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-[radial-gradient(circle,_#ff00cc,_#00ffff,_transparent)] blur-[120px] opacity-20 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10">
        {/* Left: Description */}
        <div className="space-y-4 max-w-lg">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            The Next Worth
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Join a transformative webinar designed to help you unlock remote work potential, gain practical skills, and achieve real financial independence — no prior experience needed.
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-200">Follow Us</h3>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 transition text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 transition text-xl"
            >
              <FaYoutube />
            </a>
            <a
              href="mailto:info@thenextworth.com"
              className="text-cyan-400 hover:text-cyan-300 transition text-xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} The Next Worth. All rights reserved.
      </div>
    </footer>
  );
}
