import { RxCross2 } from "react-icons/rx";
import type { PropsTypeAvailableCard } from "./AvailableCard";
import type { TechnologyType } from "./types/Type";
import { toast } from "react-toastify";

const SelectedCard = ({ technology, selected,setSelected,}: PropsTypeAvailableCard) => {
  
    const handleRemove=(technology:TechnologyType)=>{
        const remaining = selected.filter(elem=>elem!==technology);
        setSelected(remaining);
          toast.success(`${technology.name} removed successfully`);
    }
  
    return (
    <div className="flex w-full items-center justify-between rounded-2xl border border-[#dce4ef] bg-white mt-4 px-5 py-3">
      <div className="flex items-center gap-5">
        <img
          src={technology.icon}
          alt="icon"
          className="h-10 w-10 object-contain"
        />
        <div>
          <h3 className="text-xl font-semibold text-[#101828]">
            {technology.name}
          </h3>
          <p className=" text-[#94a7c5]">{technology.category}</p>
        </div>
      </div>
      <button onClick={()=>handleRemove(technology)} className="text-4xl font-light text-[#94a7c5]"><RxCross2 />
       </button>
    </div>
  );
};

export default SelectedCard;
