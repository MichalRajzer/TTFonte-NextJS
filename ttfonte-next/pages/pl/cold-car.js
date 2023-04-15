import Layout from "../../components/Layout";
import styles from "../../styles/Companies.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ColdCar({}) {
  return (
    <Layout title="Cold car" lang="pl">
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
                alt="Logo firmy Cold Car s.r.l."
              />
            </Link>
          </h1>
          <p className={styles.desc}>
            Zabudowa chłodnicza z płytami eutektycznymi zyskała popularność na
            rynku dzięki swojej skuteczności w dystrybucji lodów i mrożonek.
            Proces jest prosty: bank zimnej energii jest magazynowany w nocy
            dzięki Agregatowi Chłodzącemu, zasilanemu energią elektryczną,
            uwalniając roztwór eutektyczny w płytach. W ciągu dnia roztwór
            zaczyna topnieć, uwalniając nagromadzony wcześniej chłód, aby
            zrównoważyć straty ciepła spowodowane otwarciem drzwi, konserwując
            produkty z pełnym poszanowaniem przepisów ATP i HACCP
          </p>
        </div>
      </div>
    </Layout>
  );
}
