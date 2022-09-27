import Layout from "../components/Layout";
import styles from "../styles/Companies.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Laief({}) {
  return (
    <Layout>
      <div className={styles.stdPadding}>
        <h1 className={styles.header}>
          <Link href="https://www.laief.it/?lang=en"> L.A.I.e.F. </Link>
        </h1>
        <p className={styles.desc}>
          L.A.I.e.F. S.r.l. is situated in Varedo, Italy. Their activity started
          in 1980. The company is most famous for their rotary and inline stick
          lines in many capacities ranging from small artisan set ups to giant
          industrial lines. They have had customers in over 80 countries, and
          their machines are present on every continent except the Arctic.
        </p>
        <div className={styles.imgWrapper}>
          <Image
            src={"/imgs/laief/logo-laief-ice-cream-machines.png"}
            layout="fill"
            objectFit="contain"
            alt="The logo of LAIeF"
          />
        </div>
      </div>
    </Layout>
  );
}
