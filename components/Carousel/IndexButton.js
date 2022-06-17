import styles from "../../styles/Carousel/IndexButton.module.scss"
const IndexButton = (props) => {
  return (
    <button 
      className={styles["indexBtn"]}
      onClick={props.indexSlide}
      style={{
        backgroundColor: props.currSlide === props.idx ? "#2774ae" : "#808080"
      }}
    >
    </button>
  )
}

export default IndexButton