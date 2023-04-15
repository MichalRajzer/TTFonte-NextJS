import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Layout from "../../components/Layout";
import ImgCarousel from "../../components/ImgCarousel";
import blurryIce from "../../components/BlurIceCream";

export default function Home() {
  return (
    <Layout
      title="Strona internetowa TT Fonte"
      description={"TT Fonte jest twoim źródłem maszyn do lodów!"}
    >
      <div className={`${styles.topHeadingWrapper} ${styles.stdPadding}`}>
        <div className={`${styles.topImgWrapper} ${styles.imgWrapper}`}>
          <Image
            src={"/imgs/stock/AdobeStock_40117273.webp"}
            layout="fill"
            objectFit="cover"
            alt="Zdjęcie stockowe lodów czekoladowych."
            placeholder="blur"
            blurDataURL={blurryIce}
            priority="true"
          />
        </div>
        <div className={`${styles.stdHeading} ${styles.topHeading}`}>
          <div>
            <h1 style={{ fontSize: "1em" }}>Twoje źródło urządzeń</h1>{" "}
            <h1 style={{ fontSize: "1em" }}>do produkcji lodów!</h1>
          </div>
        </div>
      </div>
      <div className={`${styles.stdPadding}`}>
        <p className={`${styles.stdDesc}`}>
          Jest wiele różnych maszyn do lodów, prawie tyle samo, co smaków lodów.
          Są frezery, linie ekstruzyjne, tunele hartownicze, napełniarki i wiele
          innych. Każda z nich jest dostępna w różnych rozmiarach i stylach, w
          zależność od potrzeb. Od małych 400 litrów na godzinę do wielkich 30
          000 sztuk na godzinę.
        </p>
      </div>
      <ImgCarousel
        images={[
          {
            url: "/imgs/laief/GSL ROTARY.png",
            link: "/pl/maszyny/lody#gsl",
            alt: "Zdjęcie Grigoli Stick Line w wersji rotacyjnej do produkcji lodów odlewanych.",
          },
          {
            url: "/imgs/teknoice/teknofreeze/2x1000/deep/IMG_1526trnosh.png",
            link: "/pl/maszyny/lody#teknofreeze",
            alt: "Zdjęcie frezera teknofreeze 2x1000 w konfiguracji deep flavour.",
          },
          {
            url: "/imgs/teknoice/teknoline/650-780-1000/IMG_0047_contunnel.png",
            link: "/pl/maszyny/lody#teknoline",
            alt: "Zdjęcie linii ekstruzyjnej Teknoline 1000.",
          },
          {
            url: "/imgs/teknoice/teknofreeze/2x1000/2 flavs/_MG_0010_tr.png",
            link: "/pl/maszyny/lody#teknofreeze",
            alt: "Zdjęcie frezera teknofreeze 2x1000 w konfiguracji dwóch smaków.",
          },
          {
            url: "/imgs/teknoice/teknomix/Teknoice HTST industrial ice cream production.png",
            link: "/pl/maszyny/lody#teknomix",
            alt: "Zdjęcie linii pasteryzacyjnej TEKNOMIX HTST.",
          },
          {
            url: "/imgs/laief/Packing Machine.webp",
            link: "/pl/maszyny/lody#gwp",
            alt: "Zdjęcie pakowaczki Grigoli Wrapping Machine.",
          },
        ]}
      />
      <div className={`${styles.topHeadingWrapper} ${styles.stdPadding}`}>
        <div className={`${styles.imgWrapper} ${styles.chocImgWrapper}`}>
          <Image
            src={"/imgs/stock/AdobeStock_258202087.jpeg"}
            layout="fill"
            objectFit="cover"
            alt="Zdjęcie stockowe tabliczek czekolady."
          />
        </div>
        <h1
          className={`${styles.stdHeading} ${styles.topHeading}`}
          style={{ color: "#fff" }}
        >
          Najlepszym towarzyszem lodów jest czekolada!
        </h1>
      </div>
      <div className={`${styles.stdPadding}`}>
        <p className={`${styles.stdDesc}`}>
          Oferumejy wiele różnych maszyn do czekolady, nie tylko do lodów, ale
          też do produkcji tabliczek, batonów, czekoladek, dropsów i draży.
        </p>
      </div>
      <ImgCarousel
        images={[
          {
            url: "/imgs/packint/Packint_PressPNG.png",
            link: "/pl/maszyny/czekolada#b2b",
            alt: "Zdjęcie Prasy do masła kakaowego firmy Packint Srl.",
          },
          {
            url: "/imgs/packint/Packint_VerticalConchePNG.png",
            link: "/pl/maszyny/czekolada#b2b",
            alt: "Zdjęcie Konchy wertykalnej firmy Packint Srl.",
          },
          {
            url: "/imgs/packint/Packint_TemperingPNG.png",
            link: "/pl/maszyny/czekolada#b2b",
            alt: "Zdjęcie Temperówki/urządzenia dozującego czekoladę, firmy Packint Srl.",
          },
          {
            url: "/imgs/packint/Packint_SOTU50PNG.png",
            link: "/pl/maszyny/czekolada#sotu",
            alt: "Zdjęcia maszyny SOTU 50 z Packintu Srl.",
          },
        ]}
        num={2}
      />
      <div className={`${styles.topHeadingWrapper} ${styles.stdPadding}`}>
        <div className={`${styles.imgWrapper} ${styles.chocImgWrapper}`}>
          <Image
            src={"/imgs/coldcar/_DSP2358_PS_HR.jpg"}
            layout="fill"
            objectFit="cover"
            alt="Zdjęcie dwóch aut Coldcar."
          />
        </div>
        <h1
          className={`${styles.stdHeading} ${styles.topHeading}`}
          style={{ color: "#fff" }}
        >
          Kiedy produkt jest gotowy, potrzebujesz go bezpiecznie dostarczyć!
        </h1>
      </div>
      <div className={`${styles.stdPadding}`}>
        <p className={`${styles.stdDesc}`}>
          Oferujemy szeroki wybór samochodów chłodniczych, dostosowanych do
          Twoich potrzeb. Od małych bud o wielkości 1.5m³, po wielkie o
          pojemności 30 m³.
        </p>
      </div>
    </Layout>
  );
}
