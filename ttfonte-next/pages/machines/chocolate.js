import Layout from "../../components/Layout";
import Image from "next/legacy/image";
import styles from "../../styles/machines/Chocolate.module.css";

export default function Chocolate({}) {
  return (
    <Layout title="Chocolate machines">
      <div className={styles.stdPadding}>
        <h1 className={styles.stdHeading}>PACKINT s.r.l.</h1>
        <h2 className={styles.stdSubHeading} id="sotu">
          Chocolate and Spread Cream Process Lines:
        </h2>
        <div className={styles.bigImgWrapper}>
          <Image
            src={"/imgs/packint/Packint_SOTU50PNG.png"}
            layout="fill"
            objectFit="contain"
            alt="Images of the SOTU 50 machine from Packint Srl."
          />
        </div>
        <h2 className={styles.stdSubHeading} style={{ textAlign: "center" }}>
          SOTU 10/50/100/<br className={styles.mobileBreak}/>180/300/600/1000/1200
        </h2>
        <p className={styles.stdDesc}>
          Complete chocolate and spread cream process lines, with their capacity
          indicated by their names.
        </p>
      </div>
      <div
        className={styles.stdPadding}
        style={{ paddingBottom: "10vh" }}
        id="b2b"
      >
        <h2 className={styles.stdSubHeading}>Bean to Bar Machines:</h2>
        <div className={styles.grid}>
          <div>
            <div className={styles.gridImg}>
              <Image
                src={"/imgs/packint/Packint_DestonerPNG.png"}
                layout="fill"
                objectFit="contain"
                alt="Images if a Destoner"
              />
            </div>
            <h3 className={styles.stdDesc}>Destoner</h3>
          </div>
          <div>
            <div className={styles.gridImg}>
              <Image
                src={"/imgs/packint/Packint_RoasterPNG.png"}
                layout="fill"
                objectFit="contain"
                alt="Image of a Roaster"
              />
            </div>
            <h3 className={styles.stdDesc}>Roaster</h3>
          </div>
          <div>
            <div className={styles.gridImg}>
              <Image
                src={"/imgs/packint/Packint_PreRefinerPNG.png"}
                layout="fill"
                objectFit="contain"
                alt="Image of a Pre-refiner"
              />
            </div>
            <h3 className={styles.stdDesc}>Pre-refiner</h3>
          </div>
          <div>
            <div className={styles.gridImg}>
              <Image
                src={"/imgs/packint/Packint_WinnowerPNG.png"}
                layout="fill"
                objectFit="contain"
                alt="Image of a Cocoa Winnower"
              />
            </div>
            <h3 className={styles.stdDesc}>Cocoa Winnower</h3>
          </div>
          <div>
            <div className={styles.gridImg}>
              <Image
                src={"/imgs/packint/Packint_BallMillPNG.png"}
                layout="fill"
                objectFit="contain"
                alt="Image of a Ball Mill"
              />
            </div>
            <h3 className={styles.stdDesc}>Ball Mill</h3>
          </div>
          <div>
            <div className={styles.gridImg}>
              <Image
                src={"/imgs/packint/Packint_VerticalConchePNG.png"}
                layout="fill"
                objectFit="contain"
                alt="Image of a Vertical Power Conche"
              />
            </div>
            <h3 className={styles.stdDesc}>Vertical Power Conche</h3>
          </div>
          <div>
            <div className={styles.gridImg}>
              <Image
                src={"/imgs/packint/Packint_PressPNG.png"}
                layout="fill"
                objectFit="contain"
                alt="Image of a Cocoa Butter Press"
              />
            </div>
            <h3 className={styles.stdDesc}>Cocoa Butter Press</h3>
          </div>
          <div>
            <div className={styles.gridImg}>
              <Image
                src={"/imgs/packint/Packint_GranulatingPNG.png"}
                layout="fill"
                objectFit="contain"
                alt="Image of a Granulating Machine"
              />
            </div>
            <h3 className={styles.stdDesc}>Granulating Machine</h3>
          </div>
          <div></div>
          <div>
            <div className={styles.gridImg}>
              <Image
                src={"/imgs/packint/Packint_SifterPNG.png"}
                layout="fill"
                objectFit="contain"
                alt="Image of a Sifter"
              />
            </div>
            <h3 className={styles.stdDesc}>Sifter</h3>
          </div>
          <div>
            <div className={styles.gridImg}>
              <Image
                src={"/imgs/packint/Packint_TemperingPNG.png"}
                layout="fill"
                objectFit="contain"
                alt="Image of a Tempering Dosing Machine"
              />
            </div>
            <h3 className={styles.stdDesc}>Tempering Dosing Machine</h3>
          </div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
}
