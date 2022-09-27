import Layout from "../components/Layout";
import styles from "../styles/Companies.module.css";
import Image from "next/image";
import Link from "next/link";

export default function IceCream({}) {
  return (
    <Layout>
      <div className={styles.stdPadding}>
        <h1 className={styles.header}>
          <Link href="https://www.laief.it/?lang=en"> Packint s.r.l.</Link>
        </h1>
        <p className={styles.desc}>
          Packint s.r.l. has been operating in the chocolate machinery sector
          since 1992, directly or through other brands worldwide. Over these
          years Packint has earned the trust of many companies ranging from
          small family businesses to international chocolate manufacturers
          including bean to bar producers. Their headquarters are located in the
          north of Italy, 40 km south of Milan, where you can visit a complete
          pilot plant from cacao beans to chocolate bars and chips for tests and
          training.
        </p>
        <div className={styles.imgWrapper}>
          <Image
            src={"/imgs/packint/packint-chocolate-machines-logo.png"}
            layout="fill"
            objectFit="contain"
            alt="The logo of LAIeF"
          />
        </div>
      </div>
    </Layout>
  );
}
