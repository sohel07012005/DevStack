import AvailableCard from "./AvailableCard";
import type { TechnologyType } from "./types/Type";
interface PropsTypeAvailable{
    technologies:TechnologyType[],
    selected : TechnologyType[]
    setSelected: React.Dispatch<React.SetStateAction<TechnologyType[]>>
}


const AvailableTechnologies = ({technologies,selected,setSelected}:PropsTypeAvailable) => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                technologies.map(technology=><AvailableCard technology={technology} selected={selected} setSelected={setSelected} key={technology.id} ></AvailableCard>)
            }
        </div>
    );
};

export default AvailableTechnologies;