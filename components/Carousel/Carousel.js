import styles from "../../styles/Carousel/Carousel.module.scss"
import { useState, useEffect } from "react"
import Image from "next/image"
import IndexButton from "./IndexButton"

const Carousel = (props) => {
  const useGetMargins = () => {
    const [margins, setMargins] = useState()
    useEffect(() => {
      const handleResize = () => {
        let width = window.innerWidth
        if (width >= 767) {
          setMargins(200)
        }
        else setMargins(64)
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return margins;
  }
  const margins = useGetMargins()
  return (
    <div className={styles["carouselWrapper"]}>
      <div className={styles["carousel"]}>
        <div 
          className={styles["slideWrapper"]}
          style={
            {transform: `translateX(calc(${props.currSlide} * (-100vw + ${margins}px)))`}
          }
        >
          {props.children}
        </div>
      </div>
      <div className={styles["indexBtnContainer"]}>
        <button 
          className={`${styles["arrow"]} ${styles["left"]}`}
          onClick={props.prevSlide}
        > 
          <Image 
            src="/../public/chevron-right.png"
            height={30}
            width={30}
          />
        </button>
        <div className={styles["indices"]}>
          {props.indices}
        </div>
        <button 
          className={`${styles["arrow"]} ${styles["right"]}`}
          onClick={props.nextSlide}
        >
          <Image 
            src="/../public/chevron-right.png"
            height={30}
            width={30}
          />
        </button>
      </div>
    </div>

  )
}

export default Carousel