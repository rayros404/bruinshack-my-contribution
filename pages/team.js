// React
import { useState } from "react"
// NextJS
import Link from "next/link"
import Image from "next/image"
// Stylesheet
import styles from "../styles/Team/Team.module.scss"
// Component
import TeamCardContainer from "../components/Team/TeamCardContainer"
import TeamCard from "../components/Team/TeamCard"
// Team Data
import { 
  teamLeads,
  webDevTeam, 
  designTeam, 
  businessTeam, 
  performanceTeam, 
  socialMediaTeam 
} from "../components/Team/TeamData"

const Team = () => {
  // state for read more/show less founder text
  const [textShow, setTextshow] = useState(false)

  // state for selected card (which card currently has an overlay)
  const [selected, setSelected] = useState("")

  // reset state when user clicks on element that is not a teamcard overlay
  const resetSelected = (event) => {
    let element = event.target.className
    // if the element is the overlay, reset
    if (!element.includes("TeamCard_overlay") && element.includes("TeamCard_")) return
    if (selected === "") return
    setSelected("")
  }
  return (
    <div id={styles["team"]} onClick={resetSelected}>
      <div id={styles["team-header"]}>
        <h1 id={styles["header-title"]}>Meet The Team</h1>
      </div>
      <main id={styles["main"]}>
        <section id={styles["summary"]}>
          <div id={styles["summary-title"]}>STUDENTS BUILDING FOR STUDENTS</div>
          <div id={styles["summary-text"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </section>
        <section id={styles["founder"]}>
          <div id={styles["founder-wrapper"]}>
            <div id={styles["founder-title"]}>Founder, Danny Tang</div>
            <div 
              id={styles["founder-text"]}
              style={{maxHeight: textShow ? "600px" : "218px"}}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br/>
            <br/>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
          <button 
            id={styles["text-toggler"]}
            onClick={() => {setTextshow(prevShow => !prevShow)}}
          >
            {textShow ? "Show Less" : "Read More"}
          </button>
          </div>
          <div id={styles["founder-img"]}>
            <Image 
              src="/Team/headshot-placeholder.png"
              alt="founder headshot"
              width={392}
              height={544}
              priority={true}
            />
          </div>
        </section>
        <div className={styles["split"]}>
          <TeamCardContainer
            teamTitle="Team Leads"
            members={teamLeads}
            selected={selected}
            setSelected={setSelected}
            isTeamLead={true}
          />
        </div>
        <div className={styles["split"]}>
          <TeamCardContainer
            teamTitle="Web Dev Team"
            members={webDevTeam}
            selected={selected}
            setSelected={setSelected}
          />
          <TeamCardContainer
            teamTitle="UI/UX Design Team"
            members={designTeam}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div className={styles["split"]}>
          <TeamCardContainer
            teamTitle="Business Dev Team"
            members={businessTeam}
            selected={selected}
            setSelected={setSelected}
          />
          <TeamCardContainer
            teamTitle="Performance Metrics Team"
            members={performanceTeam}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div className={styles["split"]}>
          <TeamCardContainer 
            teamTitle="Social Media & Outreach Team"
            members={socialMediaTeam}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </main>
      <footer id={styles["footer"]}>
        <div id={styles["footer-img"]}>
          <Image
            src="/Team/team-footer-splash.png"
            height={442}
            width={644}
            alt="team graphic"
          />
        </div>
        <div id={styles["footer-content"]}>
          <div id={styles["content-title"]}>Want to join our team?</div>
          <div id={styles["content-text"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <ul id={styles["content-list"]}>
            <li className={styles["list-item"]}>
              <span className={styles["black"]}>
                Web Development
              </span>
            </li>
            <li className={styles["list-item"]}>
              <span className={styles["black"]}>
                Business Development
              </span>  
            </li>
            <li className={styles["list-item"]}>
              <span className={styles["black"]}>
                UI/UX Design
              </span>  
            </li>
            <li className={styles["list-item"]}>
              <span className={styles["black"]}>
                Social Media & Outreach
              </span>
            </li>
            <li className={styles["list-item"]}>
              <span className={styles["black"]}>
                Performance Metrics
              </span>
            </li>
          </ul>
          <div id={styles["content-socials"]}>
            <a className={styles["social-link"]} href="https://www.facebook.com/bruinshack/" target="_blank" rel="noreferrer">
              <Image 
              src="/Team/socials-icons/facebook-icon.png"
              height={60}  
              width={60}
              alt="facebook icon"
              />
            </a>
            <a className={styles["social-link"]} href="https://www.instagram.com/bruinshack/?hl=en" target="_blank" rel="noreferrer">
              <Image 
              src="/Team/socials-icons/instagram-icon.png"
              height={60}  
              width={60}
              alt="instagram icon"
              />
            </a>
            <a className={styles["social-link"]} href="https://www.twitter.com/bruinshack/" target="_blank" rel="noreferrer">
              <Image 
              src="/Team/socials-icons/twitter-icon.png"
              height={60}  
              width={60}
              alt="twitter icon"
              />
            </a>
            <a className={styles["social-link"]} href="https://www.linkedin.com/company/bruinshack/" target="_blank" rel="noreferrer">
              <Image 
              src="/Team/socials-icons/linkedin-icon.png"
              height={60}  
              width={60}
              alt="linkedin icon"
              />
            </a>
          </div>
          <div id={styles["btn-wrapper"]}>
            <Link href="/contact">
              <button id={styles["contact-btn"]}>Contact Us</button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Team