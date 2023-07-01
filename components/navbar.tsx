import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaDiscord } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-fuchsia-600 text-white px-4 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>Nash Sy</div>
        {/* Navigation links */}
        <ul className="flex space-x-10">
          <li>
            <Link href="/">
              <div className="cursor-pointer hover:text-fuchsia-200">Home</div>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <div className="relative group">
                <div className="cursor-pointer hover:text-fuchsia-200">
                  Services
                </div>
                <ul className="absolute hidden bg-white text-gray-700 group-hover:block">
                  <li>
                    <Link href="/services/mm">
                      <div className="py-2 px-4 cursor-pointer hover:bg-fuchsia-100">
                        MM/Midman
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/remittance">
                      <div className="py-2 px-4 cursor-pointer hover:bg-fuchsia-100">
                        Remittance
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/consignment">
                      <div className="py-2 px-4 cursor-pointer hover:bg-fuchsia-100">
                        Consignment
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/others">
                      <div className="py-2 px-4 cursor-pointer hover:bg-fuchsia-100">
                        Others
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/game-credits">
              <div className="relative group">
                <div className="cursor-pointer hover:text-fuchsia-200">
                  Game Credits
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/how-it-works">
              <div className="cursor-pointer hover:text-fuchsia-200">
                How It Works
              </div>
            </Link>
          </li>
          <li>
            <Link href="/testimonials">
              <div className="cursor-pointer hover:text-fuchsia-200">
                Testimonials
              </div>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <div className="cursor-pointer hover:text-fuchsia-200">FAQ</div>
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <div className="hover:text-gray-300 cursor-pointer">
              <FaInstagram size={20} />
            </div>
          </li>
          <li>
            <div className="hover:text-gray-300 cursor-pointer">
              <FaFacebook size={20} />
            </div>
          </li>
          <li>
            <div className="hover:text-gray-300 cursor-pointer">
              <FaDiscord size={20} />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
