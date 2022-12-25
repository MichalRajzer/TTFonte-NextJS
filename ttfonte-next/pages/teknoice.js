import Layout from "../components/Layout";
import styles from "../styles/Companies.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Teknoice({}) {
  return (
    <Layout title="Teknoice S.r.l.">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 8vh)",
        }}
      >
        <div className={styles.stdPadding}>
          <h1 className={styles.header}>
            <Link href="https://www.teknoice.com/"> Teknoice S.r.l. </Link>
          </h1>
          <p className={styles.desc}>
            TEKNOICE is one of the largest Italian manufacturers of industrial
            and semi-industrial ice cream machines. They have over 35
            years&apos; experience in the ice cream sector and know-how,
            creativity and technical innovation research. Moreover, the great
            desire to improve the product offered has enabled them to grow
            rapidly and conquer the global market in just a few years by
            manufacturing complete lines: from pasteurisation to filling,
            extrusion and hardening tunnels.
          </p>
          <div className={styles.imgWrapper}>
            <Image
              src={"/imgs/teknoice/TeknoICE Logo.png"}
              layout="fill"
              objectFit="contain"
              alt="The logo of LAIeF"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
