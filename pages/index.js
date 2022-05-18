import styles from "../styles/Home.module.scss"

const Home = () => {
  return (
    <main id={styles["home"]}>
      <div id={styles["header"]}>
        <div id={styles["header-title"]}>BruinShack</div>
        <div id={styles["header-subtitle"]}>Ray's Contribution</div>
        <button id={styles["header-btn"]}>View Work</button>
      </div>
    </main>
  )
}

export default Home
