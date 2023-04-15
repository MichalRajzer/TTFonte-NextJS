import Layout from "../../components/Layout";
import styles from "../../styles/Companies.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Packint({}) {
  return (
    <Layout title="Packint s.r.l." lang="pl">
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
                alt="Logo firmy Packint s.r.l."
              />
            </Link>
          </h1>
          <p className={styles.desc}>
            Packint s.r.l. dziala w sektorze maszyn czekoladowych od 1992 roku,
            bezpośrednio lub za pośrednictwem innych marek na całym świecie. W
            ciągu tych lat Packint zdobył zaufanie wielu firm, od manufaktur
            rodzinnych po międzynarodowych producentów czekolady. Packint podbił
            serca swoich klientów dzięki technologii produkcji czekolady od
            ziarna do tabliczki wraz z technologią dedykowaną producentom lodów.
            Ich siedziba znajduje się na północy Włoch, 40 km na południe od
            Mediolanu, gdzie można zwiedzić kompletną pilotażową fabrykę w celu
            przeprowadzenia testów lub szkoleń.
          </p>
        </div>
      </div>
    </Layout>
  );
}
