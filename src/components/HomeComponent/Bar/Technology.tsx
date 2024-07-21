import { MenuData } from "@/app/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import ExploreContent from "./ExploreContent";
import HeadSection from "./HeadSection";

interface ChildProps {
    label:string,
    menuData:MenuData,
    nodes:any
}
interface ChildNode {
    url: string;
    label: string;
    description?: string;
    megaMenu?: {
      icon?: {
        node?: {
          mediaItemUrl?: string;
          altText?: string;
          mediaDetails?: {
            height?: number;
            width?: number;
          };
        };
      };
    };
  }

const Technology = ({label,menuData,nodes}:ChildProps)=>{
    const [collectMenuTech,setCollectMenuTech] = useState<any[]>([]);
    const [collectMenuMain,setCollectMenuMain] = useState<any[]>([]);
    console.log("menudata",menuData);
    useEffect(() => {
        menuData.edges.forEach((e) => {
            if (e.node.name === "Menu Technology") {
                setCollectMenuTech(e.node.menuItems.nodes);
            }
            if (e.node.name === "Menu Main platform") {
                setCollectMenuMain(e.node.menuItems.nodes);
            }
        });
    }, [menuData.edges]);
    return (
        <>
            {nodes?.map((child:any, childIndex:number) => (
            <div className="icon-drop-section" key={childIndex}>
                <HeadSection  child={child} isContent={false}/>
                <ul className="list-tech">
                    {
                        child.label === "Technology" &&(
                                collectMenuTech.map((e:any,index:number)=>
                                    (
                                        <li>
                                            <a href={e.path} key={index}>{e.label}</a>
                                        </li>
                                    )
                                )
                        )
                    }
                    {
                        child.label === "Main platform" &&(
                            collectMenuMain.map((e:any,index:number)=>
                                    (
                                        <li>
                                            <a href={e.path}  key={index}>{e.label}</a>
                                        </li>
                                    )
                                )
                        )
                    }
                    </ul>
            </div>
            ))}
        <ExploreContent menuData={menuData} />
      </>
    )
}
export default Technology;