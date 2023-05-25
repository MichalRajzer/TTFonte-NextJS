import Navbar from "./Navbar";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
import ChristmasPupup from "./ChristmasPupup";
import { useRouter } from "next/router";
import Link from "next/link";
import { Open_Sans } from "next/font/google";

export const OpenSans = Open_Sans({
  subsets: ["latin-ext", "latin"],
  weights: [300, 400, 700],
  variable: "--main-font",
});

const LanguageSwitcher = ({ lang }) => {
  const router = useRouter();
  // console.log(lang);

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
    "/pl/cold-car": "/cold-car",
    "/cold-car": "/pl/cold-car",
    "/404": "/404",
    "/500": "/500",
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
    <div className={OpenSans.variable}>
      <Head>
        <title>{title ? title : "TT Fonte"}</title>
        <meta property="og:title" content={title ? title : "TT Fonte"} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={description ? description : "TT Fonte"}
          key="desc"
        />
        <meta
          name="og:description"
          content={description ? description : "TT Fonte"}
          key="og:description"
        />
        <meta name="og:url" content="https://ttfonte.com" key="og:url" />
        <meta name="og:image" content="/logo/logo.png" />
        <meta property="og:locale" content="en_GB" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="TT Fonte" />
        <meta property="twitter:image" content="/logo/logo.png" />
        <meta property="twitter:domain" content="ttfonte.com" />
        <meta
          name="twitter:description"
          content={description ? description : "TT Fonte"}
        />
      </Head>
      {/* <ChristmasPupup /> */}
      <Navbar lang={lang} />
      <LanguageSwitcher lang={lang} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
