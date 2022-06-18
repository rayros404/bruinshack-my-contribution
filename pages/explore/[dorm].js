import styles from "../../styles/Explore/DormPage.module.scss"
import { useState, useEffect, useLayoutEffect } from "react"
import { dormsData } from "../../components/Explore/DormsData"
import DormCard from "../../components/Explore/DormCard"
import Carousel from "../../components/Carousel/Carousel"
import Slide from "../../components/Carousel/Slide"
import { useRouter } from "next/router"


const DormPage = (props) => {
  const router = useRouter()
  const [dormCards, setDormCards] = useState([])

  useEffect(() => {
    const dorms = dormsData.sort(() => Math.random() - .5).slice(5)
    setDormCards(dorms.map(dorm => (
      <DormCard 
        key={dorm.id}
        name={dorm.name}
        rating={dorm.rating}
        reviews={dorm.reviews}
        route={{
        pathname: `/explore/[id]`,
        query: { 
          id: dorm.id,
          name: dorm.name
        }
      }}
    />) 
  ))
  }, [])  

  const useScreenWidth = () => {
    const [width, setWidth] = useState()
    useLayoutEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth)
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
  }
  const width = useScreenWidth()

  return (
    <div id={styles["explore"]}>
      <div id={styles["dorm-name"]}>{router.query.name}</div>
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

          {width >= 1200 && 
          <Carousel>
            <Slide key={0}>
              <div id={styles["dorms-container"]}>{dormCards}</div>
            </Slide>
          </Carousel>

          }
          {width < 1200 && width >= 650 &&
          <Carousel>
            <Slide key={0}>
              <div id={styles["dorms-container"]}>
                {dormCards.slice(0, 3)}
              </div>
            </Slide>
            <Slide key={1}>
              <div id={styles["dorms-container"]}>
                {dormCards.slice(3)}
              </div>
            </Slide>
          </Carousel>
          }
          {width < 650 && 
          <Carousel>
            <Slide key={0}>
              <div id={styles["dorms-container"]}>
                {dormCards[0]}
              </div>
            </Slide>
            <Slide key={1}>
              <div id={styles["dorms-container"]}>
                {dormCards[1]}
              </div>
            </Slide>
            <Slide key={2}>
              <div id={styles["dorms-container"]}>
                {dormCards[2]}
              </div>
            </Slide>
            <Slide key={3}>
              <div id={styles["dorms-container"]}>
                {dormCards[3]}
              </div>
            </Slide>
            <Slide key={4}>
              <div id={styles["dorms-container"]}>
                {dormCards[4]}
              </div>
            </Slide>
          </Carousel>
          }
      </div>
    </div>
  )
}

export default DormPage