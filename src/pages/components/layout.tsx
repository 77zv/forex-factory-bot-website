// components/Layout.tsx

import React, { type ReactNode } from 'react';
import Nav from "./nav";
import Footer from "./footer";

type LayoutProps = {
    children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Nav />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
