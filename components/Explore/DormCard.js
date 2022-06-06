import styles from "../../styles/Explore/DormCard.module.scss"
import Image from "next/image"

const DormCard = () => {
  return (
    <div className={styles["dorm-card"]}>
      <div className={styles["image-wrapper"]}>
        <Image 
          src="/../public/Explore/dorm-image.png"
          alt="dorm"
          height={130}
          width={194}
        />
      </div>
      <div className={styles["dorm-name"]}>
        Rieber Vista
      </div>
      <section className={styles["reviews-section"]}>
        <div className={styles["star"]}>
          <Image 
            src="/../public/Explore/yellow-star.png"
            alt="star"
            height={15}
            width={15}
          />
        </div>
        <div className={styles["review-rating"]}>4.25</div>
        <div className={styles["review-count"]}>(71 reviews)</div>
      </section>
    </div>
  )
}

export default DormCard