import { toast } from "react-toastify";
import SelectedCard from "./SelectedCard";
import type { TechnologyType } from "./types/Type";

interface PropsTypeSelected {
  selected: TechnologyType[];
  setSelected: React.Dispatch<React.SetStateAction<TechnologyType[]>>;
}

const SelectedTechnologies = ({ selected, setSelected }: PropsTypeSelected) => {
  
  const handleAllRemove =()=>{
    setSelected([]);
    toast.success("All technologies removed");
  }
  
  
    if (selected.length === 0) {
    return (
      <div className="w-full rounded-[30px] border border-[#e8edf4] bg-white p-8 shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
        <h2 className="text-2xl font-bold text-[#101828]">
          Your Stack
        </h2>
        <p className="mt-3 text-[#94a7c5]">
          No technologies selected yet.
        </p>
        <div className="mt-7 flex items-center justify-center rounded-3xl border-2 border-dashed border-[#dce5f0] px-6 py-12">
          <p className=" text-[#94a7c5]">Your stack is empty.</p>
        </div>
      </div>
    );
  }

  return (
     <div className="w-full rounded-[30px] border border-[#e8edf4] bg-white p-8 shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
        <h2 className="text-2xl font-bold text-[#101828]">
          Your Stack
        </h2>
        <p className="mt-3 text-[#94a7c5]">
          {selected.length} Technology Selected
        </p>
        <div className="mt-8">
            {
            selected.map(technology=><SelectedCard technology={technology} key={technology.id} selected={selected} setSelected={setSelected}></SelectedCard>)
            }
        </div>
        <button onClick={handleAllRemove} className="w-full py-3 border-2 border-red-400 text-2xl text-red-600 rounded-2xl mt-20 cursor-pointer">Remove All</button>
      </div>
  );
};

export default SelectedTechnologies;
