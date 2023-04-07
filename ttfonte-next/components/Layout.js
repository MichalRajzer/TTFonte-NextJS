import Navbar from "./Navbar";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
import ChristmasPupup from "./ChristmasPupup";

export default function Layout({ title, children, lang }) {
  return (
    <div>
      <Head>
        {title ? <title>{title}</title> : <title>TT fonte website</title>}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ChristmasPupup />
      <Navbar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
