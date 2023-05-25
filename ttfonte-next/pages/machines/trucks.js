import Layout from "../../components/Layout";
import styles from "../../styles/machines/IceCream.module.css";
import Image from "next/legacy/image";

export default function Trucks({}) {
  return (
    <Layout title="Refrigerated Bodies">
      <div className={styles.stdPadding}>
        <h1 className={styles.stdHeading} id="teknomix">
          Rerfrigerated bodies
        </h1>
        <h2
          className={styles.stdDesc}
          style={{
            marginBottom: "2rem",
          }}
        >
          Italian company Cold Car is a leading player in production of
          refrigerated and isothermal bodies. The company is present on the
          market since 1968. Over 50 years of experience gathered all over the
          world resulted in development of innovative, durable, reliable and
          energy saving technology. At present it represents the best choice for
          what concerns mobile refrigeration for the distribution of foodstuff,
          pharmaceuticals and biological materials.
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
                alt="Image of two trucks outfitted with coldcar refrigerated bodies"
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
                alt="Image of two trucks outfitted with coldcar refrigerated bodies"
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
                alt="Image of the inside of a cold car refrigerated bodies"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
