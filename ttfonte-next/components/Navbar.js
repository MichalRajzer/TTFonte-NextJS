import styles from "../styles/Navbar.module.css"
import Image from "next/image";
import Link from "next/link";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navbar ({}) {

    return (
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <FontAwesomeIcon icon={faCaretRight} className={styles.caret} />
            &nbsp;Machines!
            <div className={styles.dropdown}>
              <div className={styles.dropDiv}>
                <Link href="/machines/ice-cream" className={styles.navLink}>
                  Ice cream machines
                </Link>
              </div>
              <div className={styles.dropDiv}>
                <Link href="/machines/chocolate" className={styles.navLink}>
                  Chocolate machines
                </Link>
              </div>
              <div className={styles.dropDiv}>
                <Link href="/machines/trucks" className={styles.navLink}>
                  Refrigerated trucks
                </Link>
              </div>
            </div>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>
              Contact us!
            </Link>
          </li>
        </ul>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <a hrefto="/">
              <Image src="/logo/logo.svg" layout="fill" />
            </a>
          </Link>
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              About us!
            </Link>
          </li>
          <li className={styles.navItem}>
            <FontAwesomeIcon icon={faCaretRight} className={styles.caret} />
            &nbsp;Partners!
            <div className={styles.dropdown}>
              <div className={styles.dropDiv}>
                <Link href="/teknoice" className={styles.navLink}>
                  Teknoice
                </Link>
              </div>
              <div className={styles.dropDiv}>
                <Link href="/packint" className={styles.navLink}>
                  Packint
                </Link>
              </div>
              <div className={styles.dropDiv}>
                <Link href="/laief" className={styles.navLink}>
                  Laief
                </Link>
              </div>
              <div className={styles.dropDiv}>
                <Link href="/cold-car" className={styles.navLink}>
                  Cold car
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    );
} 