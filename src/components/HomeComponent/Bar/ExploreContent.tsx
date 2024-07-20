import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import CareImage from '../../../../public/assets/images/care.png'
import { ServiceStartedContainer } from "./BarStyle";
import { useEffect, useState } from "react";
import { MenuData } from "@/app/types";

interface ChildProps {
    menuData: MenuData;
  }
const ExploreContent = ({menuData}:ChildProps)=>{
    const [collectMenuStarted,setCollectMenuStarted] = useState<any[]>([]);
    useEffect(()=>{
        menuData.edges.map((e:any)=>{
            if(e.node.name === "Menu Started"){
                setCollectMenuStarted(e.node.menuItems.nodes);
            }
        })
    },[menuData.edges])
    return (
            collectMenuStarted.length > 0 && (
                <ServiceStartedContainer>
                    <div className="image-section">
                        <div className="explore-text">
                          Explore the new technology
                        </div>
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
    )
}
export default ExploreContent;