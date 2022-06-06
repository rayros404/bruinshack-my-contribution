import styles from "../../styles/Carousel/Carousel.module.scss"
import { useState } from "react"
import Image from "next/image"
import IndexButton from "./IndexButton"

const Carousel = ({ children }) => {
  const [currSlide, setCurrSlide] = useState(0)

  const nextSlide = () => {
    if (currSlide < children.length - 1) setCurrSlide(curr => curr + 1)
    else setCurrSlide(0)
  } 
  const prevSlide = () => {
    if (currSlide > 0) setCurrSlide(curr => curr - 1)
    else setCurrSlide(children.length - 1)
  } 

  const indexSlide = (idx) => {
    setCurrSlide(idx)
  }

  const indexBtns = children.map((child, idx) => (
    <IndexButton 
      key={idx}
      idx={idx}
      currSlide={currSlide}
      indexSlide={() => indexSlide(idx)}
    />
  ))

  return (
    <div className={styles["carouselWrapper"]}>
      <div className={styles["carousel"]}>
        <div 
          className={styles["slideWrapper"]}
          style={
            {transform: `translateX(calc(${currSlide} * (-100vw + 200px)))`}
          }
        >
          {children}
        </div>
        <button 
          className={`${styles["arrow"]} ${styles["left"]}`}
          onClick={prevSlide}
        > 
          <Image 
            src="/../public/left-arrow.png"
            height={30}
            width={30}
          />
        </button>
        <button 
          className={`${styles["arrow"]} ${styles["right"]}`}
          onClick={nextSlide}
          
        >
          <Image 
            src="/../public/left-arrow.png"
            height={30}
            width={30}
            objectFit="none"
          />
        </button>
      </div>
      <div className={styles["indexBtnContainer"]}>
        {indexBtns}
      </div>
    </div>

  )
}

export default Carousel