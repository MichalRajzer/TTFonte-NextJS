import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div className={styles.topHeadingWrapper}>
          <div className={styles.topImgWrapper}>
            <Image
              src={"/imgs/stock/AdobeStock_40117273.webp"}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className={styles.topHeading}>
            Your source of ice-cream machines!
          </h1>
        </div>
        <div>
          <h2>There are many different kinds...</h2>
          <p>
            There are many different ice-cream machines, almost as many as
            flavours of ice-cream. There are freezers, extrusion lines,
            hardening tunnels, filling machines, mix plants and many more. Each
            of them come in a variety of size and styles depending on your use
            case, from miniscule 400 litre/hour freezers to giant 30 000
            pieces/hour industrial extrusion lines.
          </p>
        </div>
        
      </Layout>
    </>
  );
}
