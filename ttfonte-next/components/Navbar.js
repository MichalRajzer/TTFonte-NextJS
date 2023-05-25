import styles from "../styles/Navbar.module.css";
import Image from "next/legacy/image";
import Link from "next/link";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar({ lang }) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <FontAwesomeIcon icon={faCaretRight} className={styles.caret} />
          &nbsp;{lang === "pl" ? "Urządzenia!" : "Machines!"}
          <div className={styles.dropdown}>
            <div className={styles.dropDiv}>
              <Link
                href={
                  lang === "pl" ? "/pl/maszyny/lody" : "/machines/ice-cream"
                }
                className={styles.navLink}
                legacyBehavior>
                {lang === "pl" ? "Maszyny do lodów" : "Ice cream machines"}
              </Link>
            </div>
            <div className={styles.dropDiv}>
              <Link
                href={
                  lang === "pl"
                    ? "/pl/maszyny/czekolada"
                    : "/machines/chocolate"
                }
                className={styles.navLink}
                legacyBehavior>
                {lang === "pl" ? "Maszyny do czekolady" : "Chocolate machines"}
              </Link>
            </div>
            <div className={styles.dropDiv}>
              <Link
                href={
                  lang === "pl" ? "/pl/maszyny/ciezarowki" : "/machines/trucks"
                }
                className={styles.navLink}
                legacyBehavior>
                {lang === "pl"
                  ? "Ciężarówki chłodnicze"
                  : "Refrigerated trucks"}
              </Link>
            </div>
          </div>
        </li>
        <li className={styles.navItem}>
          <Link
            href={lang === "pl" ? "/pl/kontakt" : "/contact"}
            className={styles.navLink}
            legacyBehavior>
            {lang === "pl" ? "Kontakt!" : "Contact us!"}
          </Link>
        </li>
      </ul>
      <div className={styles.logoWrapper}>
        <Link href={lang === "pl" ? "/pl/" : "/"} hrefto={lang === "pl" ? "/pl/" : "/"}>

          <Image src="/logo/logo.svg" layout="fill" alt="TTFonte Logo" />

        </Link>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link
            href={lang === "pl" ? "/pl/" : "/"}
            className={styles.navLink}
            legacyBehavior>
            {lang === "pl" ? "O nas!" : "About us!"}
          </Link>
        </li>
        <li className={styles.navItem}>
          <FontAwesomeIcon icon={faCaretRight} className={styles.caret} />
          &nbsp;{lang === "pl" ? "Partnerzy" : "Partners!"}
          <div className={styles.dropdown}>
            <div className={styles.dropDiv}>
              <Link
                href={(lang === "pl" ? "/pl" : "") + "/teknoice"}
                className={styles.navLink}
              >
                Teknoice
              </Link>
            </div>
            <div className={styles.dropDiv}>
              <Link
                href={(lang === "pl" ? "/pl" : "") + "/packint"}
                className={styles.navLink}
              >
                Packint
              </Link>
            </div>
            <div className={styles.dropDiv}>
              <Link
                href={(lang === "pl" ? "/pl" : "") + "/laief"}
                className={styles.navLink}
              >
                L.A.I.e.F.
              </Link>
            </div>
            <div className={styles.dropDiv}>
              <Link
                href={(lang === "pl" ? "/pl" : "") + "/cold-car"}
                className={styles.navLink}
              >
                Cold car
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
