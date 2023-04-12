import Navbar from "./Navbar";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
import ChristmasPupup from "./ChristmasPupup";

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
      <ChristmasPupup />
      <Navbar lang={lang} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
