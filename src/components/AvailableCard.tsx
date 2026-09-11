import { IoIosStar } from "react-icons/io";
import type { TechnologyType } from "./types/Type";
import { IoCheckmark } from "react-icons/io5";
import { toast } from "react-toastify";

export interface PropsTypeAvailableCard{
    technology:TechnologyType,
    selected : TechnologyType[]
    setSelected: React.Dispatch<React.SetStateAction<TechnologyType[]>>
}

const AvailableCard = ({ technology,selected,setSelected }:PropsTypeAvailableCard ) => {

  const isAdded = selected.some((elem) => elem.id === technology.id,);

  const handleAddStack=(technology:TechnologyType)=>{
    if(isAdded){
        toast.error(`${technology.name} is already added`);
    }
    else{
    const newSelected = [...selected,technology]
    setSelected(newSelected);
    toast.success(`${technology.name} added successfully`);
    }
  }
  
  return (
    <div className={`w-full rounded-[30px] border ${isAdded?" border-pink-300":"border-[#e8edf4]"}  bg-white p-8 shadow-[0_2px_8px_rgba(15,23,42,0.04)]`}>
    <div className="relative">
  <div className="flex items-center justify-start md:block">
    <img
      src={technology.icon}
      alt="icon"
      className="h-10 w-10 object-contain"
    />

    <h2 className=" ml-2 md:ml-0 md:mt-6 text-xl md:text-2xl font-bold text-[#101828]">
      {technology.name}
    </h2>
  </div>

  <span className="absolute right-0 top-0 rounded-full border border-pink-100 bg-pink-50 px-3 py-1 text-pink-600">
    {technology.badge}
  </span>
</div>

      <p className="mt-5 text-[#667895]">
       {technology.description}
      </p>

      <div className="my-7 border-t border-[#edf1f5]" />

      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-lg bg-[#f1f4f8] px-2 py-1 text-[#4b5b73] text-sm">
          {technology.category}
        </span>

        <span className=" text-[#667895] text-sm">{technology.difficulty}</span>

        <div className="flex items-center gap-1">
          <span className="text-xl text-amber-400"><IoIosStar /></span>
          <span className="font-medium text-[#344054]">{technology.rating}</span>
        </div>
      </div>

      <button onClick={()=>handleAddStack(technology)} className={`mt-6 w-full rounded-2xl ${isAdded?" bg-pink-50 text-pink-400":" text-white bg-[#080d1b]"} px-6 py-2 text-xl cursor-pointer`}>
       <div className="flex items-center justify-center gap-2">
        <span className={`${isAdded||"hidden"}`}><IoCheckmark /></span>{isAdded?"Added":"Add to Stack"}
        </div> 
      </button>
    </div>
  );
};

export default AvailableCard;
