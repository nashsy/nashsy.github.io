import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-fuchsia-950 text-white py-8 bottom-0">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Site links */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Site Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <div className="hover:text-fuchsia-300 cursor-pointer">
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <div className="hover:text-fuchsia-300 cursor-pointer">
                  Services
                </div>
              </Link>
            </li>
            <li>
              <Link href="/how-it-works">
                <div className="hover:text-fuchsia-300 cursor-pointer">
                  How It Works
                </div>
              </Link>
            </li>
            <li>
              <Link href="/testimonials">
                <div className="hover:text-fuchsia-300 cursor-pointer">
                  Testimonials
                </div>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <div className="hover:text-fuchsia-300 cursor-pointer">
                  Pricing
                </div>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <div className="hover:text-fuchsia-300 cursor-pointer">FAQ</div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Social links */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Social Media</h4>
          <ul className="flex space-x-2">
            <li>
              <div className="hover:text-fuchsia-300 cursor-pointer">
                <FaInstagram size={20} />
              </div>
            </li>
            <li>
              <div className="hover:text-fuchsia-300 cursor-pointer">
                <FaFacebook size={20} />
              </div>
            </li>
            <li>
              <div className="hover:text-fuchsia-300 cursor-pointer">
                <FaDiscord size={20} />
              </div>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="w-full md:w-1/2">
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <p>Email: example@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
