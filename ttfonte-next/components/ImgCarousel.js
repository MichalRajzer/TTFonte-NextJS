import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ImgCarousel.module.css";
import { useState } from "react";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImgCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  /* Swipe detection */
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      isLeftSwipe ? decrementIndex() : incrementIndex();
  };
  /* Swipe detection end */

  const incrementIndex = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const decrementIndex = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      className={styles.carousel}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className={styles.imgWrapper}>
        <Link href={images[currentIndex].link}>

          <Image
            src={images[currentIndex].url}
            alt={currentIndex}
            layout="fill"
            objectFit="contain"
          />

        </Link>
      </div>
      <div onClick={incrementIndex} className={styles.leftClickDiv}>
        <FontAwesomeIcon icon={faCaretLeft} className={styles.leftCaret} />
      </div>
      <div onClick={decrementIndex} className={styles.rightClickDiv}>
        <FontAwesomeIcon icon={faCaretRight} className={styles.rightCaret} />
      </div>
    </div>
  );
};

export default ImgCarousel;
