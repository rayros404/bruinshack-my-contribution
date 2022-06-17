import styles from "../../styles/Carousel/IndexButton.module.scss"
const IndexButton = (props) => {
  return (
    <button 
      className={styles["indexBtn"]}
      onClick={props.indexSlide}
      style={{
        backgroundColor: props.backgroundColor
      }}
    >
    </button>
  )
}

export default IndexButton