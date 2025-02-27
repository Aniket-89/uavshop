import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8  max-w-7xl">
        {/* About Company */}
        <div >
          <h3 className="text-lg font-bold mb-4 font-heading text-slate-200">Drone Anatomy</h3>
          <a className="mb-2 block hover:text-gray-300" href="https://www.droneanatomy.com/">Official Website</a>
          <a className="mb-2 block hover:text-gray-300" href="https://www.droneanatomy.com/about">About Us</a>
          <p className="mb-2">
            
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 font-heading text-slate-200">Contact Us</h3>
          <a className="mb-2 block hover:text-gray-300" href="https://www.droneanatomy.com/contact">Contact Form</a>
          <span>Phone: <a href="tel:+918130589012" className="mb-2 text-blue-400 hover:underline">(+91) 81305 89012</a></span>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:info@droneanatomy.com"
              className="hover:underline text-blue-400"
            >
              info@droneanatomy.com
            </a>
          </p>
        </div>

        {/* Policies & Support */}
        <div>
          <h3 className="text-lg font-bold mb-4 font-heading text-slate-200">Policies</h3>
          <p className="mb-2">Shipping &amp; Payment</p>
          <p className="mb-2">Service Terms</p>
          <p className="mb-2">Privacy Policy</p>
          <p className="mb-2">Shipping Policy</p>
          <p className="mb-2">Returns &amp; Refund Policy</p>
          <p className="mb-2">After Sales</p>
          <p className="mb-2">
            Support:{" "}
            <a
              href="mailto:info@droneanatomy.com"
              className="hover:underline text-blue-400"
            >
              info@droneanatomy.com
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 font-heading text-slate-200">Social Links</h3>
          <ul>
            <li className="mb-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400"
              >
                Github
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400"
              >
                Youtube
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400"
              >
                LinkedIn
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} DroneAnatomy All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
