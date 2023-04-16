import Layout from "../../../components/Layout";
import styles from "../../../styles/machines/IceCream.module.css";
import Image from "next/image";

export default function IceCream({}) {
  return (
    <Layout title="Maszyny do produkcji lodów." lang="pl">
      <div className={styles.stdPadding}>
        <div>
          <h1 className={styles.stdHeading} id="teknomix">
            TEKNOMIX
          </h1>
          <h2 className={styles.stdSubHeading}>Stacje pasteryzacji:</h2>
          <div className={styles.dualImgWrapper}>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={
                    "/imgs/teknoice/teknomix/Teknoice HTST industrial ice cream production.png"
                  }
                  layout="fill"
                  objectFit="contain"
                  alt="Zdjęcie stacji pasteryzacyjnej TEKNOMIX HTST."
                />
              </div>
              <h3 className={styles.stdSubHeading}>TEKNOMIX HTST</h3>
              <p className={styles.stdDesc}>
                Stacje pasteryzacyjne od 600 do 6000 litrów na godzinę
              </p>
            </div>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/teknoice/teknomix/IMG_1454tr.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Zdjęcie wsadowej stacji pasteryzacyjnej TEKNOMIX BATCH."
                />
              </div>
              <h3 className={styles.stdSubHeading}>TEKNOMIX BATCH</h3>
              <p className={styles.stdDesc}>
                Stacje pasteryzacyjne od 300 do 1200 litrów na godzinę
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className={styles.stdHeading} id="teknofreeze">
            TEKNOFREEZE
          </h1>
          <h2 className={styles.stdSubHeading}>Zmrażacze:</h2>
          <div className={styles.dualImgWrapper}>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/teknoice/teknofreeze/800 Lobe/_MG_0006tr.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Zdjęcie zmrażacza z pompą krzywkową TEKNOFREEZE 800."
                />
              </div>
              <h3 className={styles.stdSubHeading}>
                TEKNOFREEZE 400/600/800/1600
              </h3>
              <p className={styles.stdDesc}>
                Dostępne z pompą tłokową lub krzywkową.
              </p>
            </div>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={
                    "/imgs/teknoice/teknofreeze/2x1000/deep/IMG_1526trnosh.png"
                  }
                  layout="fill"
                  objectFit="contain"
                  alt="Zdjęcie zmrażacza TEKNOFREEZE 2x1000 w trybie podwójnego przejścia."
                />
              </div>
              <h3 className={styles.stdSubHeading}>
                TEKNOFREEZE 2 X 700/2 X 1000
              </h3>
              <p className={styles.stdDesc}>
                Jeden smak z podwójnym przejściem lub podwójny smak z
                pojedynczym przejściem.
              </p>
            </div>
          </div>
        </div>
        {/*TODO: Add teknofreeze CO2 */}
        <div>
          <h1 className={styles.stdHeading} id="teknofill">
            TEKNOFILL
          </h1>
          {/*TODO: Add new rotary filling machine and move teknofill 4000 to aux */}
          <h2 className={styles.stdSubHeading}>Napełniarki:</h2>
          <div className={styles.dualImgWrapper}>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/teknoice/teknofill/36/TFILL 36 INTERA tr.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Zdjęcie napełniarki TEKNOFILL 36."
                />
              </div>
              <h3 className={styles.stdSubHeading}>TEKNOFILL 12/18/36/VMFX</h3>
              <p className={styles.stdDesc}>
                Od 4000 do 36000 sztuk na godzinę, odpowiednie do produkcji
                lodów w rożkach, kubeczkach, pucharkach, tutkach i opakowaniach
                familijnych.
              </p>
            </div>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/teknoice/teknofill/4000/IMG_3074-OKtr.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Zdjęcie napełniarki TEKNOFILL 4000."
                />
              </div>
              <h3 className={styles.stdSubHeading}>TEKNOFILL 4000</h3>
              <p className={styles.stdDesc}>
                Od 1000 do 4000 sztuk na godzinę, odpowiednie do produkcji lodów
                w rożkach, kubeczkach i tutkach.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className={styles.stdHeading} id="gsl">
            Linie GSL
          </h1>
          <h2 className={styles.stdSubHeading}>
            Linie do produkcji lodów odlewanych na patyku:
          </h2>
          <div className={styles.dualImgWrapper}>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/laief/GSL ROTARY.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Zdjęcie Grigoli Stick Line obrotowe."
                />
              </div>
              <h3 className={styles.stdSubHeading}>GSL Obrotowe</h3>
              <p className={styles.stdDesc}>
                1 000 do 22 000 sztuk na godzinę.
              </p>
            </div>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/laief/GSL IN LINE.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Zdjęcie Grigoli Stick Line liniowe."
                />
              </div>
              <h3 className={styles.stdSubHeading}>GSL Liniowe</h3>
              <p className={styles.stdDesc}>4 000 to 40 000 sztuk na godzinę</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className={styles.stdHeading} id="teknoline">
            TEKNOLINE
          </h1>
          <h2 className={styles.stdSubHeading}>Linie ekstruzyjne:</h2>
          <div className={styles.dualImgWrapper}>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/teknoice/teknoline/4/IMG_2346_tr.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Zdjęcie linii ekstruzyjnej TEKNOLINIE 4."
                />
              </div>
              <h3 className={styles.stdSubHeading}>TEKNOLINE 4, 6, and 9</h3>
              <p className={styles.stdDesc}>
                Od 4000 do 9000 sztuk na godzinę, odpowiednie do produkcji lodów
                na patyku, w rożkach, kubeczkach waflowych, sandwichy,
                batoników, rolad, torcików, czekoladek.
              </p>
            </div>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/teknoice/teknoline/650-780-1000/IMG_0412tr.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Zdjęcie linii ekstruzyjnej TEKNOLINE 1000."
                />
              </div>
              <h3 className={styles.stdSubHeading}>TEKNOLINE 650, 780, 1000</h3>
              <p className={styles.stdDesc}>
                Do 27 000 sztuk na godzinę, z opcją trójwarstwowego oblewania
                lodów.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className={styles.stdHeading} id="teknowrap">
            TEKNOWRAP
          </h1>
          <h2 className={styles.stdSubHeading}>
            Maszyny pakujące typu odwrócony flow-pack:
          </h2>
          <div className={styles.singleItem}>
            {/*TODO: Add smaller wrapping machine*/}
            <div className={styles.imgWrapper}>
              <Image
                src={"/imgs/teknoice/teknowrap/IMG_1604-Btr.png"}
                layout="fill"
                objectFit="contain"
                alt="Zdjęcie maszyny pakującej TEKNOWRAP."
              />
            </div>
            <p className={styles.stdDesc}>
              Od 1 do 12 rzędów, z opcją automatycznego usuwania pustych lub
              nieprzeciętych opakowań.
            </p>
          </div>
        </div>
        <div>
          <h1 className={styles.stdHeading} id="gwp">
            Maszyny do pakowania GWM.
          </h1>
          <h2 className={styles.stdSubHeading}>
            Maszyny pakujące typu flow-pack:
          </h2>
          <div className={styles.singleItem}>
            <div className={styles.imgWrapper}>
              <Image
                src={"/imgs/laief/Packing Machine.webp"}
                layout="fill"
                objectFit="contain"
                alt="Zdjęcie Grigoli Wrapping Machine."
              />
            </div>
            <p className={styles.stdDesc}>
              Wydajność do 12 000 sztuk na godzinę.
            </p>
          </div>
        </div>
        <div>
          <h1 className={styles.stdHeading} id="aux">
            Maszyny pomocnicze
          </h1>
          <div className={styles.dualImgWrapper}>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={
                    "/imgs/teknoice/aux_/ice cream bulks filling machine.png"
                  }
                  layout="fill"
                  objectFit="contain"
                  alt="Zdjęcie cf3."
                />
              </div>
              <h3 className={styles.stdSubHeading}>CF3</h3>
            </div>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/teknoice/aux_/DF3000_2_hr.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Zdjęcie maszyny fruit feeder."
                />
              </div>
              <h3 className={styles.stdSubHeading}>Fruit Feeder 1200/3000</h3>
            </div>
            {/*
            TODO: Add riple pump Teknoice
            Add cake machine Laief
            */}
          </div>
          {/*TODO: Add section sandwich machine Laief*/}
        </div>
      </div>
    </Layout>
  );
}
