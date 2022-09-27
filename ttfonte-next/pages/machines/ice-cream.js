import Layout from "../../components/Layout";
import styles from "../../styles/machines/IceCream.module.css";
import Image from "next/image";

export default function IceCream({}) {
  return (
    <Layout>
      <div className={styles.stdPadding}>
        <div>
          <h1 className={styles.stdHeading} id="teknomix">
            TEKNOMIX
          </h1>
          <h2 className={styles.stdSubHeading}>Pasteurization plants:</h2>
          <div className={styles.dualImgWrapper}>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={
                    "/imgs/teknoice/teknomix/Teknoice HTST industrial ice cream production.png"
                  }
                  layout="fill"
                  objectFit="contain"
                  alt="Image of the TEKNOMIX HTST pasteurization plant."
                />
              </div>
              <h3 className={styles.stdSubHeading}>TEKNOMIX HTST</h3>
              <p className={styles.stdDesc}>
                Pasteurization plants from 300 to 6000 litres per hour
              </p>
            </div>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/teknoice/teknomix/IMG_1454tr.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Image of the batch TEKNOMIX pasteurization plant."
                />
              </div>
              <h3 className={styles.stdSubHeading}>TEKNOMIX BATCH</h3>
              <p className={styles.stdDesc}>
                Pasteurization plants from 300 to 1200 litres per hour
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className={styles.stdHeading} id="teknofreeze">
            TEKNOFREEZE
          </h1>
          <h2 className={styles.stdSubHeading}>Freezers:</h2>
          <div className={styles.dualImgWrapper}>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/teknoice/teknofreeze/800 lobe/_MG_0006tr.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Image of the teknofreeze 800 freezer with lobe pump."
                />
              </div>
              <h3 className={styles.stdSubHeading}>
                TEKNOFREEZE 400/600/800/1600
              </h3>
              <p className={styles.stdDesc}>
                Available with piston, or lobe pump.
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
                  alt="Image of the teknofreeze 2x1000 freezer in deep freeze mode."
                />
              </div>
              <h3 className={styles.stdSubHeading}>
                TEKNOFREEZE 2 X 700/2 X 1000
              </h3>
              <p className={styles.stdDesc}>
                One flavour with double passage or dual flavour with single
                passage.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className={styles.stdHeading} id="teknofill">
            TEKNOFILL
          </h1>
          <h2 className={styles.stdSubHeading}>Filling lines:</h2>
          <div className={styles.dualImgWrapper}>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/teknoice/teknofill/36/TFILL 36 INTERA tr.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Image of the teknofill 36 filling line."
                />
              </div>
              <h3 className={styles.stdSubHeading}>TEKNOFILL 12/18/36/VMFX</h3>
              <p className={styles.stdDesc}>
                From 4000 to 36000 pcs/h, good for cones, cups, and classic
                cups.
              </p>
            </div>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/teknoice/teknofill/4000/IMG_3074-OKtr.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Image of the teknofill 4000 filling line."
                />
              </div>
              <h3 className={styles.stdSubHeading}>TEKNOFILL 4000</h3>
              <p className={styles.stdDesc}>
                From 1000 to 4000 pcs/h, good for cups.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className={styles.stdHeading} id="gsl">
            Grigoli Stick Line
          </h1>
          <h2 className={styles.stdSubHeading}>Moulded stick lines:</h2>
          <div className={styles.dualImgWrapper}>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/laief/GSL ROTARY.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Image of the Grigoli Stick Line Rotary moulded stick line."
                />
              </div>
              <h3 className={styles.stdSubHeading}>GSL ROTARY</h3>
              <p className={styles.stdDesc}>1 000 to 22 000 pcs/h</p>
            </div>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/laief/GSL IN LINE.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Image of the Grigoli Stick Line inline moulded stick line."
                />
              </div>
              <h3 className={styles.stdSubHeading}>GSL IN LINE</h3>
              <p className={styles.stdDesc}>4 000 to 40 000 pcs/h</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className={styles.stdHeading} id="teknoline">
            TEKNOLINE
          </h1>
          <h2 className={styles.stdSubHeading}>Extrusion lines:</h2>
          <div className={styles.dualImgWrapper}>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/teknoice/teknoline/4/IMG_2346_tr.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Image of the teknoline 4 extrusion line."
                />
              </div>
              <h3 className={styles.stdSubHeading}>TEKNOLINE 4, 6, and 9</h3>
              <p className={styles.stdDesc}>
                From 4000 to 9000 pcs/h, good for snadwiches, ball cones, and
                products on a stick
              </p>
            </div>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/teknoice/teknoline/650-780-1000/IMG_0412tr.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Image of the teknoline extrusion line."
                />
              </div>
              <h3 className={styles.stdSubHeading}>TEKNOLINE 650, 780, 1000</h3>
              <p className={styles.stdDesc}>
                Up to 27 000 pcs/h, double chocolate or syroup coating systems
                available.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className={styles.stdHeading} id="teknowrap">
            TEKNOWRAP
          </h1>
          <h2 className={styles.stdSubHeading}>Wrapping machines:</h2>
          <div className={styles.singleItem}>
            <div className={styles.imgWrapper}>
              <Image
                src={"/imgs/teknoice/teknowrap/IMG_1604-Btr.png"}
                layout="fill"
                objectFit="contain"
                alt="Image of the teknowrap wrapping machine."
              />
            </div>
            <p className={styles.stdDesc}>
              Up to 12 lines, with automated faulty products discarding system.
            </p>
          </div>
        </div>
        <div>
          <h1 className={styles.stdHeading} id="gwp">
            Grigoli Wrapping Machine
          </h1>
          <h2 className={styles.stdSubHeading}>Wrapping machines:</h2>
          <div className={styles.singleItem}>
            <div className={styles.imgWrapper}>
              <Image
                src={"/imgs/laief/Packing Machine.webp"}
                layout="fill"
                objectFit="contain"
                alt="Image of the Grigoli Wrapping Machine."
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className={styles.stdHeading} id="aux">
            Auxiliary machines
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
                  alt="Image of the fruit feeder machine."
                />
              </div>
              <h3 className={styles.stdSubHeading}>Fruit Feeder 1200/3000</h3>
            </div>
            <div className={styles.singleItem}>
              <div className={styles.imgWrapper}>
                <Image
                  src={"/imgs/teknoice/aux_/DF3000_2_hr.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="Image of the cf3."
                />
              </div>
              <h3 className={styles.stdSubHeading}>CF3</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
