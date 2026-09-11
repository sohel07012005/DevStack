import { useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import logo from "../assets/logo-text.png";


const Nav = () => {
 const [isOpen, setIsOpen] = useState(false);


 return (
   <nav className="bg-white border-b-2 border-b-[#F1F5F9] sticky top-0 z-50">
     <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
       <button
         className="text-2xl text-[#475569] md:hidden"
         onClick={() => setIsOpen(true)}
       >
         <BsList />
       </button>
       <img
         src={logo}
         alt="DevStack Logo"
         className="w-25 md:w-auto ml-15 md:ml-0"
       />
       <ul className="hidden md:flex items-center gap-6 text-[#475569]">
         <li className="hover:text-[#D91B7E] cursor-pointer">Home</li>
         <li className="hover:text-[#D91B7E] cursor-pointer">Technologies</li>
         <li className="hover:text-[#D91B7E] cursor-pointer">Projects</li>
         <li className="hover:text-[#D91B7E] cursor-pointer">About</li>
         <li className="hover:text-[#D91B7E] cursor-pointer">Contacts</li>
       </ul>
       <div className="flex items-center gap-2 md:gap-6">
         <button className="text-[#475569] font-semibold md:font-normal hover:text-[#D91B7E] cursor-pointer text-sm md:text-base">
           Sign In
         </button>
         <button className="rounded-full bg-[#D91B7E] px-2 md:px-6 py-1 md:py-2.5 text-white cursor-pointer text-sm md:text-base">
           Sign Up
         </button>
       </div>
     </div>


     {isOpen && (
       <>
         <div
           className="fixed inset-0 bg-black/40 z-40 md:hidden"
           onClick={() => setIsOpen(false)}
         ></div>
         <div className="fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl p-6 md:hidden">
           <div className="flex justify-end">
             <button
               className="text-3xl text-[#475569]"
               onClick={() => setIsOpen(false)}
             >
               <BsX />
             </button>
           </div>
           <img src={logo} alt="DevStack Logo" className="w-35 mt-4" />
           <ul className="flex flex-col gap-6 mt-10 text-lg font-medium text-[#475569]">
             <li className="hover:text-[#D91B7E] cursor-pointer"
               onClick={() => setIsOpen(false)}>
               Home
             </li>
             <li className="hover:text-[#D91B7E] cursor-pointer"
               onClick={() => setIsOpen(false)} >
               Technologies
             </li>
             <li className="hover:text-[#D91B7E] cursor-pointer"
               onClick={() => setIsOpen(false)}>
               Projects
             </li>
             <li className="hover:text-[#D91B7E] cursor-pointer"
               onClick={() => setIsOpen(false)}>
               About
             </li>
             <li className="hover:text-[#D91B7E] cursor-pointer"
               onClick={() => setIsOpen(false)}>
               Contacts
             </li>
           </ul>
         </div>
       </>
     )}
   </nav>
 );
};


export default Nav;




