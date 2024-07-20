'use client'
import { MenuData } from "@/app/types";
import Image from "next/image";
import CareImage from '../../../../public/assets/images/care.png'
import { useEffect, useState } from "react";
import { ServiceStartedContainer } from "./BarStyle";
import { BsArrowRightShort } from "react-icons/bs";
// Define a proper type for nodes if possible
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

interface ChildProps {
  label: string;
  menuData: MenuData;
  nodes: ChildNode[]; // Use a defined type instead of `any`
}

const Service = ({ nodes, label, menuData }: ChildProps) => {
    const [collectMenuStarted,setCollectMenuStarted] = useState<any[]>([]);
    useEffect(()=>{
        menuData.edges.map((e:any)=>{
            if(e.node.name === "Menu Started"){
                setCollectMenuStarted(e.node.menuItems.nodes);
                console.log("collectMenuStarted",collectMenuStarted)
            }
        })
    },[menuData.edges])
  return (
    <>
      {nodes?.map((child, childIndex) => (
        <div className="icon-drop-section" key={childIndex}>
          <div className="head">
            <div className="icon">
              <Image
                src={child?.megaMenu?.icon?.node?.mediaItemUrl || ""}
                alt={child?.megaMenu?.icon?.node?.altText || ""}
                height={child?.megaMenu?.icon?.node?.mediaDetails?.height || 0}
                width={child?.megaMenu?.icon?.node?.mediaDetails?.width || 0}
              />
            </div>
            <div className="label">
              <a href={child.url} className="dropdown-item">
                {child.label}
              </a>
            </div>
          </div>
          <div className="content">
            {child.description ?? "Default text for testing on local"}
          </div>
        </div>
      ))}
      {
    collectMenuStarted.length > 0 && (
        <ServiceStartedContainer>
            <div className="image-section">
                <Image src={CareImage} alt="started image" />
                <div className="button-section">
                    <button><a className="button" href="">Discover more</a></button>
                    <BsArrowRightShort className="bs-arrow-right" />
                </div>
            </div>
            <div className="heading">
                <h1 className="heading-line">READY TO GET STARTED</h1>
            </div>
            <ul className="list-care">
                {collectMenuStarted.map((e: any, index: number) => (
                <li key={index}>
                    <a href={e.url}>{e.label}</a>
                </li>
                ))}
            </ul>
    </ServiceStartedContainer>
  )
}
    </>
  );
};

export default Service;
