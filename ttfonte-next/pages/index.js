import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import ImgCarousel from "../components/ImgCarousel";
import blurryIce from "../components/BlurIceCream";

export default function Home() {
  return (
    <Layout
      title="TT Fonte website"
      description={"TT Fonte is Your future source of ice cream machines!"}
    >
      <div className={`${styles.topHeadingWrapper} ${styles.stdPadding}`}>
        <div className={`${styles.topImgWrapper} ${styles.imgWrapper}`}>
          <Image
            src={"/imgs/stock/AdobeStock_40117273.webp"}
            layout="fill"
            objectFit="cover"
            alt="Stock image of chocolate ice-cream."
            placeholder="blur"
            blurDataURL={blurryIce}
            priority="true"
          />
        </div>
        <div className={`${styles.stdHeading} ${styles.topHeading}`}>
          <div>
            <h1 style={{ fontSize: "1em" }}>Your source</h1>{" "}
            <h1 style={{ fontSize: "1em" }}>of</h1>{" "}
            <h1 style={{ fontSize: "1em" }}>ice cream machines!</h1>
          </div>
        </div>
      </div>
      <div className={`${styles.stdPadding}`}>
        <h2 className={`${styles.stdHeading}`}>
          There are many different kinds...
        </h2>
        <p className={`${styles.stdDesc}`}>
          There are many different ice-cream machines, almost as many as
          flavours of ice-cream. There are freezers, extrusion lines, hardening
          tunnels, filling machines, mix plants and many more. Each of them come
          in a variety of size and styles depending on your use case, from
          miniscule 400 litre/hour freezers to giant 30 000 pieces/hour
          industrial extrusion lines.
        </p>
      </div>
      <ImgCarousel
        images={[
          {
            url: "/imgs/laief/GSL ROTARY.png",
            link: "/machines/ice-cream#gsl",
            alt: "Image of the Grigoli Stick Line Rotary moulded stick line.",
          },
          {
            url: "/imgs/teknoice/teknofreeze/2x1000/deep/IMG_1526trnosh.png",
            link: "/machines/ice-cream#teknofreeze",
            alt: "Image of the teknofreeze 2x1000 freezer in deep freeze mode.",
          },
          {
            url: "/imgs/teknoice/teknoline/650-780-1000/IMG_0047_contunnel.png",
            link: "/machines/ice-cream#teknoline",
            alt: "Image of the teknoline extrusion line.",
          },
          {
            url: "/imgs/teknoice/teknofreeze/2x1000/2 flavs/_MG_0010_tr.png",
            link: "/machines/ice-cream#teknofreeze",
            alt: "Image of the teknofreeze 2x1000 freezer in two flavour mode.",
          },
          {
            url: "/imgs/teknoice/teknomix/Teknoice HTST industrial ice cream production.png",
            link: "/machines/ice-cream#teknomix",
            alt: "Image of the TEKNOMIX HTST pasteurization plant.",
          },
          {
            url: "/imgs/laief/Packing Machine.webp",
            link: "/machines/ice-cream#gwp",
            alt: "Image of the Grigoli Wrapping Machine.",
          },
        ]}
      />
      <div className={`${styles.topHeadingWrapper} ${styles.stdPadding}`}>
        <div className={`${styles.imgWrapper} ${styles.chocImgWrapper}`}>
          <Image
            src={"/imgs/stock/AdobeStock_258202087.jpeg"}
            layout="fill"
            objectFit="cover"
            alt="Stock image of chocolate bars."
          />
        </div>
        <h1
          className={`${styles.stdHeading} ${styles.topHeading}`}
          style={{ color: "#fff" }}
        >
          We have chocolate machines too!
        </h1>
      </div>
      <div className={`${styles.stdPadding}`}>
        <h2 className={`${styles.stdHeading}`}>Chocolate is not only bars…</h2>
        <p className={`${styles.stdDesc}`}>
          We have many different chocolate machines not only for bars, but also
          bombons, drops, drages.
        </p>
      </div>
      <ImgCarousel
        images={[
          {
            url: "/imgs/packint/Packint_PressPNG.png",
            link: "/machines/chocolate#b2b",
            alt: "Image of a Cocoa Butter Press",
          },
          {
            url: "/imgs/packint/Packint_VerticalConchePNG.png",
            link: "/machines/chocolate#b2b",
            alt: "Image of a Vertical Power Conche",
          },
          {
            url: "/imgs/packint/Packint_TemperingPNG.png",
            link: "/machines/chocolate#b2b",
            alt: "Image of a Tempering Dosing Machine",
          },
          {
            url: "/imgs/packint/Packint_SOTU50PNG.png",
            link: "/machines/chocolate#sotu",
            alt: "Images of the SOTU 50 machine from Packint Srl.",
          },
        ]}
        num={2}
      />
    </Layout>
  );
}
