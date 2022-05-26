import styles from "../styles/Navbar.module.scss"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [showPages, setShowPages] = useState(false)
  const toggleShow = () => {
    setShowPages(prevShow => !prevShow)
  }
  const closeShow = () => {
    if (showPages) toggleShow()
  }
  
  return (
    <div id={styles["navbar-wrapper"]}>
      <div id={styles["navbar"]}>
        <Link href="/">
          <button 
            className={styles["nav-btn"]}
            onClick={closeShow}
            style={{fontWeight:600}}
          >
            BRUINSHACK - RAY
          </button>
        </Link>
        <button 
          id={styles["pages-btn"]}
          className={styles["nav-btn"]}
          onClick={toggleShow}  
        >
          Pages
          <div
            id={styles["down-icon"]}
            style={{transform: showPages ? "rotate(180deg)" : "none"}}
          >
            <Image 
              src="/../public/chevron-down.png"
              height={24}
              width={24}
            />
          </div>
        </button>
      </div>
      <div 
        id={styles["pages-dropdown"]}
        style={{maxHeight: showPages ? "300px" : 0}}
      >
        <Link href="/team">
          <button 
            className={`${styles["nav-btn"]} ${styles["page-link"]}`}
            onClick={toggleShow}
          >
            Meet The Team
          </button>
        </Link>
        <Link href="/contact">
          <button 
            className={`${styles["nav-btn"]} ${styles["page-link"]}`}
            onClick={toggleShow}
          >
            Contact Us
          </button>
        </Link>
        <Link href="/">
          <button 
            className={`${styles["nav-btn"]} ${styles["page-link"]}`}
            onClick={toggleShow}
            style={{marginBottom: "16px"}}
          >
            Explore More Dorms
          </button>
        </Link>
      </div>
    </div>

  )
}

export default Navbar