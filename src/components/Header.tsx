"use client";
import { MenuData } from "@/app/types";
import { HeaderContainer } from "../../public/assets/styles/RootStyle";
import Logo from "../../public/assets/images/OnextDigital-logo.png";
import Image from "next/image";
import menuIcon from "../../public/assets/images/Menu.png";
import closeIcon from "../../public/assets/images/Close.png";
import Chevrondown from "../../public/assets/images/chevron-down.png"
import { useEffect, useState } from "react";
import Service from "./HomeComponent/Bar/Service";
import Technology from "./HomeComponent/Bar/Technology";
import Oursource from "./HomeComponent/Bar/Oursource";
import { BsChevronDown,BsChevronUp  } from "react-icons/bs";
interface HeaderProps {
  menuData: MenuData;
}

const Header = ({ menuData }: HeaderProps) => {

  const [appearance, setAppearance] = useState(true);
  const [extendChild, setExtendChild] = useState(false);
  const [extendLabel, setExtendLabel] = useState("");
  const setAppearanceOnEventClick = (status: boolean) => {
    setAppearance(status)
  }
  const toggleDropDown = (status:boolean,label:string)=>{
    if(label === extendLabel){
      setExtendChild(status)
    }else{
      setExtendLabel(label)
      setExtendChild(status)
    }
    console.log(extendChild);
    
  }
  useEffect(() => {
    let status = false;
    setAppearance(status)
  }, [])
  const renderChildView = (label: string,nodes:any,menuData: MenuData) => {
    switch (label) {
      case 'Services':
        return <Service nodes={nodes} label={label} menuData={menuData} />
      case 'Technology':
        return <Technology  nodes={nodes} label={label} menuData={menuData} />
      case 'Oursourcing':
        return <Oursource  nodes={nodes} label={label} menuData={menuData} />
      default:
        return ""
    }
  }
  return (
    <HeaderContainer appearance={appearance}>
      <div className="logo">
          <Image src={Logo} alt="OneNextDigital logo" width={100} height={50} />
      </div>
      <div className="control-icon">
        <Image
          className="menu-icon"
          onClick={() => setAppearanceOnEventClick(false)}
          src={menuIcon}
          alt="menu icon"
          width={30}
          height={30}
        />
        <Image
          className="close-icon"
          onClick={() => setAppearanceOnEventClick(true)}
          src={closeIcon}
          alt="close icon"
          width={30}
          height={30}
        />
      </div>
      <div className="main-content">
        <div className="middle-list-menu">
        {menuData.edges[2].node.menuItems.nodes.map((item, index) => (
          (item.childItems && item.childItems.nodes.length > 0) ? (
            <div key={index} className="title-bar">
              <div className="title">
                <a href={item.url} className="a-title">
                  <span>{item.label}</span>
                </a>
                {item.childItems.nodes.length > 0 && (
                    <>{!extendChild ? (
                      <BsChevronDown className="bs-chevrdown" onClick={()=>toggleDropDown(true,item.label)}/>
                    ):(
                      <BsChevronUp className="bs-chevrup" onClick={()=>toggleDropDown(false,item.label)} />
                    )}</>
                  )}
                  {extendChild && extendLabel === item.label && (
                  <div className="icon-dropdown">
                    <div className="drop-down-section">
                      {item.childItems.nodes &&(
                         renderChildView(item.label,item.childItems.nodes,menuData)
                      )
                      }
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : null
        ))}
        <div className="case-study">
          <h3>Case study</h3>
        </div>
        <div className="about-us">
          <h3>About us</h3>
        </div>
        <div className="discover-more">
          <h3>Discover more</h3>
        </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
