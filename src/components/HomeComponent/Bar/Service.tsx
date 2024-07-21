'use client'
import { MenuData } from "@/app/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import ExploreContent from "./ExploreContent";
import HeadSection from "./HeadSection";
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
  return (
    <>
      {nodes?.map((child, childIndex) => (
        <div className="icon-drop-section" key={childIndex}>
            <HeadSection  child={child} isContent={true}/>
        </div>
      ))}
     <ExploreContent menuData={menuData}/>
    </>
  );
};

export default Service;
