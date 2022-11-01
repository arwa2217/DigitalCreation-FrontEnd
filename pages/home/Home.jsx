import React from 'react'
import styles from "./home.module.scss"
import bannerPicture from "../../assets/images/banner1.gif"
import Button from '../../components/button/Button'
import StrategyCard from '../../components/strategy-card/StrategyCard'
import { awardImagesData, caseStudyData, strategyData } from '../../data'
import CaseStudyCard from '../../components/caseStudy-card/CaseStudyCard'
import AwardPicture from '../../components/award-images/AwardPicture'
import ContactForm from '../../components/contact-us/ContactForm'

const Home = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        {/* Banner section */}
        <div className={styles.banner}>
          <div className={styles.bannerTitle}>
            <h3 className={styles.bannerText}>Be Social To Stay Connected To Us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, odit?</p>

            <div className={styles.buttonStyle}>
              <Button title="Connect with Us"
                customClass={styles.btnConnect}
                handleClick={()=>{console.log("connect button clicked")}}/>
            </div>

          </div>
          <div className={styles.bannerImage}>
            <img className={styles.bpicture } src={bannerPicture} alt="error"/>
          </div>
        </div>
        {/* growth section */}
        <div className={styles.growthStrategy}>
          <div className={styles.growthStrategyTitle}>
            <h1 className={styles.textTitle}>We Growth Hack Your 
            </h1>
            <h4 className={styles.text}>Digital Strategy</h4>
            <Button
              title="Digital Strategy"
              customClass={styles.buttonStrategy}
              handleClick={()=>{console.log("connect button clicked")}}
            />
          </div>
          <div className={styles.digitalStrategy}>
            {strategyData.map((item, i) => {
              return (
                <StrategyCard key={i} item={item}/>
              )
            })}
          </div>
        </div>
        {/* case Studies section*/}
        <div className={styles.caseStudy}>
          <div><h1 className={styles.titleText}>CASE STUDIES</h1></div>
          <div className={styles.caseCards}>
            {caseStudyData.map((item, index) => {
              return (
                <CaseStudyCard item={item} key={index}/>
              )
            })}
          </div>
          <Button title="View"
            customClass={styles.buttonView} />
       
        </div>
        {/* Awards section */}
        <div className={styles.awards}>
             <div><h1 className={styles.titleText}>AWARDS</h1></div>
          <div className={styles.awardPicture}>
           {awardImagesData.map((item, i) => {
            return (
              <AwardPicture key={i} item={item} />
            )
          })} 
        </div>
         
        </div>
        <ContactForm/>
      </div>
    </>
  )
}
export default Home