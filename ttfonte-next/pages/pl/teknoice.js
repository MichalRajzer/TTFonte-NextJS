import Layout from "../../components/Layout";
import styles from "../../styles/Companies.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Teknoice({}) {
  return (
    <Layout title="Teknoice S.r.l." lang="pl">
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
            <Link href="https://www.teknoice.com/">

              <Image
                src={"/imgs/teknoice/TeknoICE Logo.png"}
                layout="fill"
                objectFit="contain"
                alt="Logo firmy Teknoice s.r.l."
              />

            </Link>
          </h1>
          <p className={styles.desc}>
            TEKNOICE to jeden z największych włoskich producentów przemysłowych
            i półprzemysłowych maszyn do lodów. Firma posiada ponad 35-letnie w
            sektorze produkcji lodów, oraz wiedzę, kreatywność i badania nad
            innowacjami technicznymi. Co więcej ogromna chęć doskonalenia
            oferowanego produktu pozwoliła im na szybki rozwój i podbicie
            światowego rynku w ciągu zaledwie kilku lat, wytwarzając kompletne
            linie: od pasteryzacji po napełniarki, linie ekstruzyjne i tunele
            hartownicze.
          </p>
        </div>
      </div>
    </Layout>
  );
}
