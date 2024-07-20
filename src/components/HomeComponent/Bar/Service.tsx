'use client'
import { MenuData } from "@/app/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import ExploreContent from "./ExploreContent";
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
     <ExploreContent menuData={menuData}/>
    </>
  );
};

export default Service;
