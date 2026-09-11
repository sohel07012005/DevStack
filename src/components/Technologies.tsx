import { use, useState } from "react";
import type { TechnologyType } from "./types/Type";
import AvailableTechnologies from "./AvailableTechnologies";
import SelectedTechnologies from "./SelectedTechnologies";

export interface PropsType{
    loadDataPromise : Promise<TechnologyType[]>
}

const Technologies = ({loadDataPromise}:PropsType) => {
     const technologies:TechnologyType[]=use(loadDataPromise);

     const [selected,setSelected]=useState<TechnologyType[]>([]);
 
    return (
        <div className="container mx-auto my-8">
            <h1 className="text-4xl font-bold">Explore the <span className="bg-(image:--brand-gradient) bg-clip-text text-transparent">Technologies</span></h1>
            <p className="text-[#64748B] text-xl my-2">Pick one technology per category to build your ideal stack.</p>
           <div className="grid grid-cols-4 my-15 gap-10">
            <div className="col-span-3">
             <AvailableTechnologies technologies={technologies} selected={selected} setSelected={setSelected} ></AvailableTechnologies>
            </div>
            <div className="col-span-1">
             <SelectedTechnologies selected={selected} setSelected={setSelected}></SelectedTechnologies>
            </div>
           </div>
        </div>
    );
};

export default Technologies;