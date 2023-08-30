// components/Layout.tsx

import React, { type ReactNode } from 'react';
import Head from 'next/head';
import Nav from "./nav";
import Footer from "./footer";

type LayoutProps = {
    title: string,
    name: string,
    content: string,
    children?: ReactNode;
};

const Layout = ({title, name, content, children }: LayoutProps) => {
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name={name} content={content} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <main>{children}</main>
        <Footer />
        </>
    );
};

export default Layout;
