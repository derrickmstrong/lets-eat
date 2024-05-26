"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

const Header = () => {
  const path = usePathname(); // Get the current path
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="Let's Eat" width={100} height={100} priority />
          Let&apos;s Eat
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                href="/meals"
                className={path.startsWith("/meals") ? styles.active : ""}
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={path.startsWith("/community") ? styles.active : ""}
              >
                Foodie Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
