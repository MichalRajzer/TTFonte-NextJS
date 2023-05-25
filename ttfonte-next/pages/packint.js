import Layout from "../components/Layout";
import styles from "../styles/Companies.module.css";
import Image from "next/legacy/image";
import Link from "next/link";

export default function Packint({}) {
  return (
    <Layout title="Packint s.r.l.">
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
            style={{ position: "relative", height: "6vw" }}
          >
            <Link href="https://packint.com/">

              <Image
                src={"/imgs/packint/packint-chocolate-machines-logo.png"}
                layout="fill"
                objectFit="contain"
                alt="The logo of Packint s.r.l."
              />

            </Link>
          </h1>
          <p className={styles.desc}>
            Packint s.r.l. has been operating in the chocolate machinery sector
            since 1992, directly or through other brands worldwide. Over these
            years Packint has earned the trust of many companies ranging from
            small family businesses to international chocolate manufacturers
            including bean to bar producers. Their headquarters are located in
            the north of Italy, 40 km south of Milan, where you can visit a
            complete pilot plant from cacao beans to chocolate bars and chips
            for tests and training.
          </p>
        </div>
      </div>
    </Layout>
  );
}
