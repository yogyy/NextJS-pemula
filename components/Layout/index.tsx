import Head from 'next/head';
import Link from 'next/link';
import React, {ReactNode} from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  const {children, pageTitle} = props;
  return (
    <>
      <Head>
        <title>{`${pageTitle}`}</title>
        <meta name="description" content="website NextJS Basic" />
      </Head>
      <Sidebar />
      <div className={styles.cont}>
        <Navbar />
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
