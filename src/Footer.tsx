import { AiOutlineCopyrightCircle } from "react-icons/ai";
import logo2 from "./assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-white text-sm text-gray-500">
      <div className="container mx-auto pt-14">
        <div className="md:grid grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex justify-center items-center md:block">
            <img src={logo2} alt="logo" className="h-auto w-auto" />
            </div>
            <p className="mt-3 md:max-w-82.5 text-[11px] text-center md:text-left px-4 md:px-0">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-4 flex justify-center gap-4 md:font-semibold md:justify-start">
              <a href="#" className="text-gray-700">
                GitHub
              </a>
              <a href="#" className="text-gray-700">
                Twitter
              </a>
              <a href="#" className="text-gray-700">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="mb-3 font-semibold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <div className="space-y-2 ">
              <a href="#" className="block ">
                Home
              </a>
              <a href="#" className="block ">
                Technologies
              </a>
              <a href="#" className="block ">
                Projects
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="mb-3 font-semibold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <div className="space-y-2">
              <a href="#" className="block">
                About
              </a>
              <a href="#" className="block">
                Contact
              </a>
              <a href="#" className="block">
                Careers
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <h3 className="mb-3 font-semibold uppercase tracking-wide text-gray-900">
              Legal
            </h3>
            <div className="space-y-2">
              <a href="#" className="block">
                Privacy Policy
              </a>
              <a href="#" className="block">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="my-11 border-t border-gray-100" />
        <div className="px-4 md:px-0 flex items-center justify-between pb-10  text-gray-400">
          <p className="flex items-center gap-1 text-[11px]  md:text-[13px]">
            <AiOutlineCopyrightCircle />
            2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-2 md:gap-6  text-[11px]  md:text-[13px]">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
