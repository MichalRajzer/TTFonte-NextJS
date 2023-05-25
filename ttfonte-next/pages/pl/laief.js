import Layout from "../../components/Layout";
import styles from "../../styles/Companies.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Laief({}) {
  return (
    <Layout title="L.A.I.e.F." lang="pl">
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
            <Link href="https://www.laief.it/?lang=en" passHref>

              <Image
                src={"/imgs/laief/logo-laief-ice-cream-machines.png"}
                layout="fill"
                objectFit="contain"
                alt="Logo firmy LAIeF"
              />

            </Link>
          </h1>
          <p className={styles.desc}>
            L.A.I.e.F. S.r.l. znajduje się w Varedo, we Włoszech. Działalność
            firmy rozpoczęła się w 1980 roku. Przedsiębiorstwo jest najbardziej
            znane z linii obrotowych i liniowych do produkcji lodów odlewanych
            na patyku. Pozwalają one na produkcję w pełnej gamie wydajności, od
            małych zestawów rzemieślniczych do ogromnych linii przemysłowych.
            Firma ma klientów w ponad 80 krajach, a ich maszyny są obecne na
            każdym kontynencie z wyjątkiem Arktyki.
          </p>
        </div>
      </div>
    </Layout>
  );
}
