import Layout from "../components/Layout";
import styles from "../styles/Companies.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Laief({}) {
  return (
    <Layout title="L.A.I.e.F.">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 8vh)",
        }}
      >
        <div className={styles.stdPadding}>
          <h1
            className={styles.header}
            style={{ position: "relative", height: "5vw" }}
          >
            <Link href="https://www.laief.it/?lang=en">

              <Image
                src={"/imgs/laief/logo-laief-ice-cream-machines.png"}
                layout="fill"
                objectFit="contain"
                alt="The logo of LAIeF"
              />

            </Link>
          </h1>
          <p className={styles.desc}>
            L.A.I.e.F. S.r.l. is situated in Varedo, Italy. Their activity
            started in 1980. The company is most famous for their rotary and
            inline stick lines in many capacities ranging from small artisan set
            ups to giant industrial lines. They have had customers in over 80
            countries, and their machines are present on every continent except
            the Arctic.
          </p>
        </div>
      </div>
    </Layout>
  );
}
