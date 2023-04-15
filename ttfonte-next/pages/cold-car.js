import Layout from "../components/Layout";
import styles from "../styles/Companies.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ColdCar({}) {
  return (
    <Layout title="Cold car">
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
            style={{ position: "relative", height: "10vw" }}
          >
            <Link href="https://coldcar.com/en/">
              <Image
                src={"/imgs/coldcar/logo-header.png"}
                layout="fill"
                objectFit="contain"
                alt="The logo of Cold car s.r.l."
              />
            </Link>
          </h1>
          <p className={styles.desc}>
            The refrigerated body with eutectic plates became popular in the
            market thanks to its efficiency for the distribution of ice cream
            and frozen food. The process is simple: a bank of cold energy is
            stored during the night thanks to the Refrigerating Unit, powered by
            electric energy, which freezes the eutectic solution contained in
            the plates. During the day the solution begins to thaw, releasing
            the cold accumulated before, in order to balance the heat losses
            caused by the opening of the doors, preserving the products in the
            full respect of the ATP and HACCP regulations
          </p>
        </div>
      </div>
    </Layout>
  );
}
