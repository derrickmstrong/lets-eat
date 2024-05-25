import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from "@/styles/main-header.module.css";
import MainHeaderBackground from "./main-header-background";

const Header = () => {
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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodie Community</Link>
            </li>
            <li>
              <Link href="/meals/share">Share</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
