// NextJS
import Image from "next/image"
// Stylesheet
import styles from "../../styles/Team/TeamCard.module.scss"
//
const TeamCard = (props) => {
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["team-card"]} onClick={props.handleClick}>
        <div className={styles["headshot-wrapper"]}>
          <Image
            // unique className as Next Image component does not support className
            className="TeamCard_headshot"
            src={"/Team/headshot-placeholder.png"}
            height={139} 
            width={170}
            alt="headshot"
            />
        </div>
        <div className={styles["card-name"]}>{props.name}</div>
        <div className={styles["card-title"]}>{props.title}</div>
        <div className={styles["socials-container"]}>
          {props.email !== "" && 
          <div>
            <a href={props.email} target="_blank" rel="noreferrer">
              <Image 
                className={styles["social-icon"]}
                src="/../public/Team/socials-icons/email-icon.png"
                height={22.5}
                width={22.5}
                alt="email icon"
              />
            </a>
          </div>
          }
          {props.linkedin !== "" && 
          <div>
            <a href={props.linkedin} target="_blank" rel="noreferrer">
              <Image 
                className={styles["social-icon"]}
                src="/../public/Team/socials-icons/linkedin-icon.png"
                height={22.5}
                width={22.5}
                alt="linkedin icon"
              />
            </a>
          </div>
          }
        </div>
        {props.portfolio !== "" && 
            <a href={props.portfolio} target="_blank" rel="noreferrer">
              <button className={styles["portfolio-btn"]}>View Portfolio</button>
            </a>
          }
      </div>
      <div 
        className={styles["overlay"]} 
        style={{
          visibility: props.id === props.selected ? "visible" : "hidden",
          opacity: props.id === props.selected ? 1 : 0
        }}
      >
          <div className={styles["overlay-info"]}>
            <p className={styles["overlay-bold-text"]}>Major:</p>
            <p className={styles["overlay-regular-text"]}>{props.major}</p>
          </div>
          <div className={styles["overlay-info"]}>
            <p className={styles["overlay-bold-text"]}>Interests:</p>
            <p className={styles["overlay-regular-text"]}>{props.interests}</p>
          </div>
          <div className={`${styles["overlay-info"]} ${styles["bio"]}`}>
            <p className={styles["overlay-bold-text"]}>Bio:</p>
            <p className={styles["overlay-regular-text"]}>{props.bio}</p>
          </div>
      </div>
    </div>
  )
}

export default TeamCard