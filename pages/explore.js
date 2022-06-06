import styles from "../styles/Explore/Explore.module.scss"
import DormCard from "../components/Explore/DormCard"
import Carousel from "../components/Carousel/Carousel"
import Slide from "../components/Carousel/Slide"

const explore = () => {
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
        <Carousel>
          <Slide color="red">
            <div id={styles["dorms-container"]}>
              <DormCard />
              <DormCard />
              <DormCard />
            </div>
          </Slide>
          <Slide color="orange">
            <div id={styles["dorms-container"]}>
              <DormCard />
              <DormCard />
              <DormCard />
            </div>
          </Slide>
          <Slide color="yellow">
            <div id={styles["dorms-container"]}>
              <DormCard />
              <DormCard />
              <DormCard />
            </div>
          </Slide>
        </Carousel>

      </div>
    </div>
  )
}

export default explore