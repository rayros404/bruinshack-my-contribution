import styles from "../../styles/Explore/Explore.module.scss"
import { useState, useEffect, useLayoutEffect } from "react"
import { dormsData } from "../../components/Explore/DormsData"
import DormCard from "../../components/Explore/DormCard"
import Carousel from "../../components/Carousel/Carousel"
import Slide from "../../components/Carousel/Slide"


const explore = () => {
  const dormCards = dormsData.map(dorm => (
    <DormCard 
      key={dorm.id}
      name={dorm.name}
      rating={dorm.rating}
      reviews={dorm.reviews}
      route={{
        pathname: `explore/[id]`,
        query: { 
          id: dorm.id,
          name: dorm.name
        }
      }}
    />
  ))

  return (
    <div id={styles["explore"]}>
      <div id={styles["title"]}>Click a dorm to get started</div>
      <div id={styles["dormCards"]}>
        {dormCards}
      </div>
    </div>
  )
}

export default explore