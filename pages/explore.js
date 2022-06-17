import styles from "../styles/Explore/Explore.module.scss"
import DormCard from "../components/Explore/DormCard"
import Carousel from "../components/Carousel/Carousel"
import Slide from "../components/Carousel/Slide"
import { useState, useEffect, useLayoutEffect } from "react"
import { dormsData } from "../components/Explore/DormsData"
import IndexButton from "../components/Carousel/IndexButton"

const explore = () => {
  // get 5 random dorms
  const dorms = dormsData.sort(() => Math.random() - .5).slice(5)
  
  let dormCards = dorms.map(dorm => (
    <DormCard 
      key={dorm.id}
      name={dorm.name}
      rating={dorm.rating}
      reviews={dorm.reviews}
    />
  ))

  const useGetCarousel = () => {
    const [slides, setSlides] = useState()
    const [indices, setIndices] = useState()
    const [currSlide, setCurrSlide] = useState(0)
    const nextSlide = () => {
      if (currSlide < slides.length - 1) setCurrSlide(curr => curr + 1)
      else setCurrSlide(0)
    } 
    const prevSlide = () => {
      if (currSlide > 0) setCurrSlide(curr => curr - 1)
      else setCurrSlide(slides.length - 1)
    } 
    const indexSlide = (idx) => {
      setCurrSlide(idx)
    }
    useEffect(() => {
      const handleResize = () => {
        let width = window.innerWidth
        if (width >= 1200) {
          setSlides(
            <Slide key={0}>
              <div id={styles["dorms-container"]}>{dormCards}</div>
            </Slide>
          )
          setCurrSlide(0)
        }
        else if (width < 1200 && width >= 650) {
          setSlides([
            <Slide key={0}>
              <div id={styles["dorms-container"]}>
                {dormCards.slice(0, 3)}
              </div>
            </Slide>,
            <Slide key={1}>
              <div id={styles["dorms-container"]}>
                {dormCards.slice(3)}
              </div>
            </Slide>,
          ])
          setIndices([
            <IndexButton 
              key={0}
              idx={0}
              backgroundColor={currSlide === 0 ? "#2774ae" : "#808080"}
              indexSlide={() => indexSlide(0)}
            />,
            <IndexButton 
              key={1}
              idx={1}
              backgroundColor={currSlide === 1 ? "#2774ae" : "#808080"}
              indexSlide={() => indexSlide(1)}
            />,
          ])
        }
        else {
          setSlides([
            <Slide key={0}>
              <div id={styles["dorms-container"]}>
                {dormCards[0]}
              </div>
            </Slide>,
            <Slide key={1}>
              <div id={styles["dorms-container"]}>
                {dormCards[1]}
              </div>
            </Slide>,
            <Slide key={2}>
              <div id={styles["dorms-container"]}>
                {dormCards[2]}
              </div>
            </Slide>,
            <Slide key={3}>
              <div id={styles["dorms-container"]}>
                {dormCards[3]}
              </div>
            </Slide>,
            <Slide key={4}>
              <div id={styles["dorms-container"]}>
                {dormCards[4]}
              </div>
            </Slide>
          ])
          setIndices([
            <IndexButton 
              key={0}
              idx={0}
              backgroundColor={currSlide === 0 ? "#2774ae" : "#808080"}
              indexSlide={() => indexSlide(0)}
            />,
            <IndexButton 
              key={1}
              idx={1}
              backgroundColor={currSlide === 1 ? "#2774ae" : "#808080"}
              indexSlide={() => indexSlide(1)}
            />,
            <IndexButton 
              key={2}
              idx={2}
              backgroundColor={currSlide === 2 ? "#2774ae" : "#808080"}
              indexSlide={() => indexSlide(2)}
            />,
            <IndexButton 
              key={3}
              idx={3}
              backgroundColor={currSlide === 3 ? "#2774ae" : "#808080"}
              indexSlide={() => indexSlide(3)}
            />,
            <IndexButton 
              key={4}
              idx={4}
              backgroundColor={currSlide === 4 ? "#2774ae" : "#808080"}
              indexSlide={() => indexSlide(4)}
            />
          ])
        }
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
      <Carousel 
        indices={indices}
        currSlide={currSlide}
        setCurrSlide={setCurrSlide}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      >
        {slides}
      </Carousel>
    );
  }
  const carousel = useGetCarousel()
  return (
    <div id={styles["explore"]}>
      <div id={styles["dorm-name"]}>DORM 1</div>
      <div id={styles["dorm-content"]}>
        <p>
          I did not work on this portion of the page.
          <br/>
          Scroll down to see my work.
          <br/>
          Resize window to see carousel.
        </p>
      </div>
      <div id={styles["explore-more-dorms"]}>
        <div id={styles["header"]}>
          Explore More Dorms
        </div>

        {carousel}

      </div>
    </div>
  )
}

export default explore