import styles from "../../styles/Carousel/Slide.module.scss"

const Slide = (props) => {
  return (
    <div className={styles["slide"]}>
      {props.children}
    </div>
  )
}

export default Slide