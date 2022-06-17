import styles from "../styles/Footer.module.scss"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <div id={styles["footer"]}>
      <div id={styles["link-list"]}>
        <Link href="/">
          <button 
            className={styles["footer-link"]}
          >
            Home
          </button>
        </Link>
        <Link href="/team">
          <button 
            className={styles["footer-link"]}
          >
            Meet The Team
          </button>
        </Link>
        <Link href="/contact">
          <button 
            className={styles["footer-link"]}
          >
            Contact Us
          </button>
        </Link>
        <Link href="/explore">
          <button 
            className={styles["footer-link"]}
          >
            Explore More Dorms
          </button>
        </Link>
        <a href="https://www.bruinshack.com/"
        target="_blank">
          <button 
            className={styles["footer-link"]}
          >
            Official BruinShack
          </button>
        </a>
      </div>
      <div id={styles["footer-right"]}>
        <a 
          className={styles["icon-link"]} 
          href="https://github.com/rayros404"
          target="_blank"
          >
          <span className={styles["link-name"]}>My GitHub</span>
          <Image 
            src="/../public/github-icon.png"
            height={64}
            width={64}
          />
        </a>
        <a 
          className={styles["icon-link"]}
          href="https://www.linkedin.com/in/rayros/"
          target="_blank"
        >
          <span className={styles["link-name"]}>My LinkedIn</span>
          <Image 
            src="/../public/linkedin-icon.png"
            height={64}
            width={64}
          />
        </a>
      </div>
    </div>
  )
}

export default Footer