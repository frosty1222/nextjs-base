'use client';
import { MenuData } from "@/app/types";
import { HeaderContainer } from "../../public/assets/styles/RootStyle";

interface HeaderProps {
    menuData: MenuData;
  }
  

const Header = ({ menuData }: HeaderProps) => {
    return (
      <HeaderContainer>
        <h1>Hello header</h1>
      </HeaderContainer>
    );
  }
  
  export default Header;