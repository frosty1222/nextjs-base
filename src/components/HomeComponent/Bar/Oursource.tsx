import { MenuData } from "@/app/types";
import HeadSection from "./HeadSection";
import ExploreContent from "./ExploreContent";

interface ChildProps {
    label:string,
    menuData:MenuData,
    nodes:any
}

const Oursource = ({label,menuData,nodes}:ChildProps)=>{
    console.log("oursource menuData",menuData);
    return (
        <>
        {nodes?.map((child:any, childIndex:number) => (
            <div className="icon-drop-section" key={childIndex}>
                <HeadSection  child={child} isContent={true}/>
            </div>
            ))}
        <ExploreContent menuData={menuData} />
      </>
    )
}
export default Oursource;