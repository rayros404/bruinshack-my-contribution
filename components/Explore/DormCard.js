import styles from "../../styles/Explore/DormCard.module.scss"
import Image from "next/image"
import Link from "next/link"

const DormCard = (props) => {
  return (
    <Link href={props.route}>
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
        {props.name}
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
        <div className={styles["review-rating"]}>{props.rating}</div>
        <div className={styles["review-count"]}>({props.reviews} reviews)</div>
      </section>
    </div>
    </Link>
  )
}

export default DormCard