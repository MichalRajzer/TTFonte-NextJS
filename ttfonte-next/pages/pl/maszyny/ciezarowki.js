import Layout from "../../../components/Layout";
import styles from "../../../styles/machines/IceCream.module.css";
import Image from "next/image";

export default function Trucks({}) {
  return (
    <Layout title="Zabudowy chłodnicze" lang="pl">
      <div className={styles.stdPadding}>
        <h1 className={styles.stdHeading} id="teknomix">
          Izotermy samochodowe
        </h1>
        <h2
          className={styles.stdDesc}
          style={{
            marginBottom: "2rem",
          }}
        >
          Cold Car jest czołowym graczem w produkcji samochodowych zabudów
          chłodniczych i izotermicznych. Ta włoska firma istnieje na rynku od
          1968 roku. Ponad 50 lat doświadczenia zebranego na całym świecie
          zaowocowało opracowanie innowacyjnej, trwałej, niezawodnej i
          energooszczędnej technologii. Obecnie jest to najlepszy wybór w
          zakresie mobilnego chłodnictwa do dystrybucji żywności, farmaceutyków
          i materiałów biologicznych.
        </h2>
        <div className={styles.singleImgWrapper}>
          <div className={styles.singleItem}>
            <div
              className={styles.imgWrapper}
              style={{
                marginBottom: "2rem",
              }}
            >
              <Image
                src={"/imgs/coldcar/_DSP2333_PS_HR.jpg"}
                layout="fill"
                objectFit="contain"
                alt="Zdjęcie dwóch ciężarówek wyposażonych w izotermy Cold Car"
              />
            </div>
          </div>
        </div>
        <div className={styles.singleImgWrapper}>
          <div className={styles.singleItem}>
            <div
              className={styles.imgWrapper}
              style={{
                marginBottom: "2rem",
              }}
            >
              <Image
                src={"/imgs/coldcar/_DSP2428_PS_HR.jpg"}
                layout="fill"
                objectFit="contain"
                alt="Zdjęcie dwóch ciężarówek wyposażonych w izotermy Cold Car"
              />
            </div>
            <div
              className={styles.imgWrapper}
              style={{
                marginBottom: "2rem",
              }}
            >
              <Image
                src={"/imgs/coldcar/_DSP2472_PS_HR.jpg"}
                layout="fill"
                objectFit="contain"
                alt="Zdjęcie wnętrza izotermy Cold Car"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
