import { AiOutlineCopyrightCircle } from "react-icons/ai";
import logo2 from "./assets/logo-text.png";


const Footer = () => {
  return (
    <footer className="bg-white px-6 py-10 text-sm text-gray-500">
      <div className="mx-auto max-w-6xl">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

      
          <div className="md:col-span-2">
            <img src={logo2} alt="logo" />

            <p className="max-w-md leading-6">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

   
            <div className="mt-5 flex gap-5">
              <a href="#" className="text-gray-700 hover:text-pink-500">
                GitHub
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-500">
                Twitter
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-500">
                LinkedIn
              </a>
            </div>
          </div>

    
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <div className="space-y-3">
              <a href="#" className="block hover:text-pink-500">
                Home
              </a>
              <a href="#" className="block hover:text-pink-500">
                Technologies
              </a>
              <a href="#" className="block hover:text-pink-500">
                Projects
              </a>
            </div>
          </div>

       
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <div className="space-y-3">
              <a href="#" className="block hover:text-pink-500">
                About
              </a>
              <a href="#" className="block hover:text-pink-500">
                Contact
              </a>
              <a href="#" className="block hover:text-pink-500">
                Careers
              </a>
            </div>
          </div>

    
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-wide text-gray-900">
              Legal
            </h3>

            <div className="space-y-3">
              <a href="#" className="block hover:text-pink-500">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-pink-500">
                Terms of Service
              </a>
            </div>
          </div>

        </div>

  
        <div className="my-8 border-t border-gray-200" />

  
        <div className="flex flex-col gap-4 text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p><AiOutlineCopyrightCircle /> 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-700">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;