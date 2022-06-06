import styles from "../../styles/Carousel/Slide.module.scss"

const Slide = (props) => {
  return (
    <div 
      className={styles["slide"]}
      // style={{backgroundColor: props.color}}
    >
      {props.children}
    </div>
  )
}

export default Slide