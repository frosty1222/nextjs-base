'use client';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Layout } from '../../public/assets/styles/RootStyle';

type LayoutProps = {
  children: ReactNode;
  menuData:any
};


const DefaultLayout = ({ children,menuData }: LayoutProps) => {
  return (
    <Layout>
        <Header menuData={menuData}/>
            <main>{children}</main>
        <Footer />
    </Layout>
  );
};
export default DefaultLayout;
