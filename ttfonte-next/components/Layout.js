import Navbar from "./Navbar";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
import ChristmasPupup from "./ChristmasPupup";
import { useRouter } from "next/router";
import Link from "next/link";

const LanguageSwitcher = ({ lang }) => {
  const router = useRouter();
  console.log(lang);

  let paths = {
    "/": "/pl",
    "/pl": "/",
    "/pl/kontakt": "/contact",
    "/contact": "/pl/kontakt",
    "/pl/maszyny/lody": "/machines/ice-cream",
    "/machines/ice-cream": "/pl/maszyny/lody",
    "/pl/maszyny/czekolada": "/machines/chocolate",
    "/machines/chocolate": "/pl/maszyny/czekolada",
    "/pl/maszyny/ciezarowki": "/machines/trucks",
    "/machines/trucks": "/pl/maszyny/ciezarowki",
    "/pl/laief": "/laief",
    "/laief": "/pl/laief",
    "/pl/teknoice": "/teknoice",
    "/teknoice": "/pl/teknoice",
    "/pl/packint": "/packint",
    "/packint": "/pl/packint",
    "/pl/coldcar": "/coldcar",
    "/coldcar": "/pl/coldcar",
  };

  let page = router.asPath.split("#")[0];

  return (
    <div className={styles.LangSwitch}>
      <h6>
        {lang === "pl" ? (
          <Link href={paths[page]}>Pl</Link>
        ) : (
          <Link href={paths[page]}>En</Link>
        )}
      </h6>
      <span>
        {lang === "pl" ? (
          <Link href={paths[page]}>Kliknij tu aby zmienić język</Link>
        ) : (
          <Link href={paths[page]}>Click here to change the language</Link>
        )}
      </span>
    </div>
  );
};

export default function Layout({ title, children, lang, description }) {
  return (
    <div>
      <Head>
        <title>{title ? title : "TT fonte website"}</title>
        <meta
          property="og:title"
          content={title ? title : "TT fonte website"}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={description ? description : "TT fonte website"}
          key="desc"
        />
        <meta
          name="og:description"
          content={description ? description : "TT fonte website"}
          key="og:description"
        />
        <meta name="og:url" content="https://ttfonte.com" key="og:url" />
        <meta name="og:image" content="/logo/logo.png" />
        <meta property="og:locale" content="en_GB" />
      </Head>
      {/* <ChristmasPupup /> */}
      <Navbar lang={lang} />
      <LanguageSwitcher lang={lang} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
