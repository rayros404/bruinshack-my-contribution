import styles from "../../styles/Carousel/Carousel.module.scss"
import { useState, useEffect } from "react"
import Image from "next/image"
import IndexButton from "./IndexButton"

const Carousel = (props) => {
  const [currSlide, setCurrSlide] = useState(0)
  const indices = (Array.isArray(props.children) ? 
    props.children.map((slide, idx) => (
      <IndexButton 
        key={idx}
        idx={idx}
        currSlide={currSlide}
        indexSlide={() => indexSlide(idx)}
      />
    ))
    :
    null
  )

  const nextSlide = () => {
    if (currSlide < props.children.length - 1) setCurrSlide(curr => curr + 1)
    else setCurrSlide(0)
  } 
  const prevSlide = () => {
    if (currSlide > 0) setCurrSlide(curr => curr - 1)
    else setCurrSlide(props.children.length - 1)
  } 
  const indexSlide = (idx) => {
    setCurrSlide(idx)
  }

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
            {transform: `translateX(calc(${currSlide} * (-100vw + ${margins}px)))`}
          }
        >
          {props.children}
        </div>
      </div>
      <div className={styles["indexBtnContainer"]}>
        <button 
          className={`${styles["arrow"]} ${styles["left"]}`}
          onClick={prevSlide}
        > 
          <Image 
            src="/../public/chevron-right.png"
            height={30}
            width={30}
          />
        </button>
        <div className={styles["indices"]}>
          {indices}
        </div>
        <button 
          className={`${styles["arrow"]} ${styles["right"]}`}
          onClick={nextSlide}
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