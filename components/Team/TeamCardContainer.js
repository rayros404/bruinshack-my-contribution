// Stylesheet
import styles from "../../styles/Team/TeamCardContainer.module.scss"
// Component 
import TeamCard from "./TeamCard"

const TeamCardContainer = (props) => {
  // create list of team cards from teamData
  const membersCards = props.members.map(member => {
    return (
      <TeamCard 
        key={member.id}
        id={member.id}
        headshot={member.headshot}
        name={member.name}
        title={member.title}
        email={member.email}
        linkedin={member.linkedin}
        portfolio={member.portfolio}
        major={member.major}
        interests={member.interests}
        bio={member.bio}
        handleClick={() => handleClick(member.id)}
        selected={props.selected}
      />
    )
  })
  const handleClick = (id) => {
    props.setSelected(props.members.find(member => member.id === id).id)
  }
  return (
    <div 
      className={`
        ${styles["team"]} 
        ${props.isTeamLead ? styles["team-leads"] : ""}`
      }
    >
      <div className={styles["team-title"]}>{props.teamTitle}</div>
      <div className={styles["card-container"]}>
        {membersCards}
      </div>
    </div>
  )
}

export default TeamCardContainer