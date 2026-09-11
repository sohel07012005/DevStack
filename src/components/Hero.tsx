import banner from "../assets/banner-stack.png";


const Hero = () => {
 return (
   <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-0 mt-10 md:mt-0 text-center md:text-left">
     <div className="gap-6">
       <h1 className="text-4xl md:text-6xl font-bold">Build Your Ideal</h1>
       <h1 className="bg-(image:--brand-gradient) bg-clip-text text-transparent text-4xl md:text-6xl font-bold">
         Development Stack
       </h1>
       <p className="text-[#475569] mt-5 text-xl">
         Explore frontend, backend, database, and tooling options,
         <br className="hidden md:block"></br>
         compare them side by side, and put together the stack that fits your
         <br className="hidden md:block"></br> next project.
       </p>
       <div className="mt-12 flex items-center justify-center gap-4 md:justify-start">
         <button className="rounded-xl bg-linear-to-r from-[#F97316] to-[#EC4899] px-4 md:px-6 py-2.5 text-white cursor-pointer">
           Explore Technologies
         </button>
         <button className="rounded-xl border-2 border-[#E5E7EB] px-4 md:px-6 py-2.5 text-[#475569] cursor-pointer">
           Learn More
         </button>
       </div>
     </div>
     <div>
       <img src={banner} alt="Banner Image"/>
     </div>
   </div>
 );
};


export default Hero;
