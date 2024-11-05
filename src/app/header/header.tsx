'use client';

import { useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link'
import Image from "next/image";

export function Header() {

  const [burger, setBurger] = useState(true);

  return (
    <nav className={`${styles.navbar} ${styles.isDark} ${styles.isFixedTop}`} role="navigation" aria-label="main navigation">
      <div className={styles.navbarBrand}>
        <a className={styles.navbarItem} href="/">
          <Image src="/logo-sharp.svg" height={48} width={48}  alt="logo"/>
        </a>

        <a role="button"
           onClick={() => setBurger(!burger)}
           className={burger ? `${styles.navbarBurger} ${styles.isActive}` : styles.navbarBurger}
           aria-label="menu" aria-expanded="false"
           data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={burger ? `${styles.navbarMenu} ${styles.isActiveNavBarMenu}` : styles.navbarMenu}>
        <div className={styles.navbarStart}>
          <Link className={styles.navbarItem} href="/">JavaZone 2025 - JavaBin</Link>

          <Link className={styles.navbarItem} href="/partners">Partners</Link>

          <Link className={styles.navbarItem} href="/speakers">Speakers</Link>
        </div>

        <div className={styles.navbarEnd}>
          <div className={styles.navbarItem}>
            <div className={styles.buttons}>
              <strong>
                <Link className={`${styles.button} ${styles.isPrimary}`} href="/speakers">Submit your talk!</Link>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
