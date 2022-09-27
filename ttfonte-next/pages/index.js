import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import ImgCarousel from "../components/ImgCarousel";

export default function Home() {
  return (
    <>
      <Layout>
        <div className={`${styles.topHeadingWrapper} ${styles.stdPadding}`}>
          <div className={styles.topImgWrapper}>
            <Image
              src={"/imgs/stock/AdobeStock_40117273.webp"}
              layout="fill"
              objectFit="cover"
              alt="Stock image of chocolate ice-cream."
            />
          </div>
          <h1 className={`${styles.stdHeading} ${styles.topHeading}`}>
            Your source of ice-cream machines!
          </h1>
        </div>
        <div className={`${styles.stdPadding}`}>
          <h2 className={`${styles.stdHeading}`}>
            There are many different kinds...
          </h2>
          <p className={`${styles.stdDesc}`}>
            There are many different ice-cream machines, almost as many as
            flavours of ice-cream. There are freezers, extrusion lines,
            hardening tunnels, filling machines, mix plants and many more. Each
            of them come in a variety of size and styles depending on your use
            case, from miniscule 400 litre/hour freezers to giant 30 000
            pieces/hour industrial extrusion lines.
          </p>
        </div>
        <ImgCarousel
          images={[
            {
              url: "/imgs/teknoice/teknoline/650-780-1000/IMG_0047_contunnel.png",
              link: "/",
              alt: "Tunnel",
            },
            {
              url: "/imgs/teknoice/teknofreeze/2x1000/2 flavs/_MG_0010_tr.png",
              link: "/",
              alt: "Freezer",
            },
          ]}
          num={2}
        />
      </Layout>
    </>
  );
}
