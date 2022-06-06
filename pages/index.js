import styles from "../styles/Home.module.scss"
import Link from "next/link"
import { useRef } from "react"

const Home = () => {
  const myWork = useRef(null)
  const executeScroll = () => myWork.current.scrollIntoView({behavior: "smooth"})   
  return (
    <main id={styles["home"]}>
      <div id={styles["header"]}>
        <div id={styles["header-title"]}>BruinShack</div>
        <div id={styles["header-subtitle"]}>Ray's Contribution</div>
          <button id={styles["header-btn"]} onClick={executeScroll}>View Work</button>
      </div>
      <h1 id={styles["my-work-title"]} ref={myWork}>My Work</h1>
      <div id={styles["my-work"]}>
        <Link href="/team">
          <div 
            id={styles["meet-the-team"]}
            className={styles["work-card"]}  
          >
            <div className={styles["card-title"]}>
              Meet The Team
            </div>
          </div>
        </Link>
        <Link href="/contact">
          <div 
            id={styles["contact-us"]}
            className={styles["work-card"]}
          >
            <div className={styles["card-title"]}>
              Contact Us
            </div>
          </div>
        </Link>
        <Link href="explore">
          <div 
            id={styles["explore-more-dorms"]}
            className={styles["work-card"]}  
          >
            <div className={styles["card-title"]}>
              Explore More Dorms
            </div>
          </div>
        </Link>
      </div>
    </main>
  )
}

export default Home
