import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import gh from '../../public/github.png';
import fb from '../../public/facebook.png';
import li from '../../public/linkedin.png';

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <ul className={styles.ul}>
        <li data-aos="fade-up" data-aos-duration="8000">
          <Link href={'/'}>
            <Image width={35} height={35} src={fb} alt={'facebook'} />
          </Link>
        </li>
        <li data-aos="fade-up" data-aos-duration="4000">
          <Link href={'/'}>
            <Image width={35} height={35} src={li} alt={'github'} />
          </Link>
        </li>
        <li data-aos="fade-up" data-aos-duration="2000">
          <Link href={'https://github.com/yogyy'} target="_blank">
            <Image width={35} height={35} src={gh} alt={'github'} />
          </Link>
        </li>
      </ul>
    </div>
  );
}