import React from "react";
import styles from "./about.module.scss";
import { awardImagesData, testinomialData } from "../../data";
import TestinomialCard from "../../components/about-testi-card/TestinomialCard";
import AwardPicture from "../../components/award-images/AwardPicture";
import Button from "../../components/button/Button";
import ContactForm from "../../components/contact-us/ContactForm"
import founder from "../../assets/images/founder.jpeg"
const About = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.aboutUsContainer}>
                    <h1 className={styles.title}>ABOUT US</h1>
                    <div className={styles.description}>People make good companies great, also, great companies non-existent. So when you are hiring a digital agency to help growth hack your way up, you are seeking an extended team that shares the enthusiasm and pain in making something great.</div>
                </div>
                <div className={styles.meetContainer}>
                    <h1 className={styles.title}>MEET THE FOUNDER</h1>
                    <div className={styles.personContainer}>
                        <div className={styles.person1}>
                            <div className={styles.imageContainer}>
                                <img className={styles.founderImage} src={founder} alt="error"/>
                            </div>
                            <h1 className={styles.personName}>Gowsik Raj</h1>
                            <p className={styles.personContent}>An entrepreneurial spirit and founder of multiple companies, he enjoys kickstarting niche companies and get to profitability with his internet marketing know-how.</p>
                        </div>
                        {/* <div className={styles.person2}>
                            <h1 className={styles.personName}>Sundeep Reddy</h1>
                            <p className={styles.personContent}>A seasoned marketer, led multiple startups to growth & acquisition stages and finally exited himself to start a digital agency that knocks it out of the park.</p>
                        </div> */}
                    </div>
                    <Button title="CONTACT US"
                     customClass={styles.buttonView} />
                 
                </div>

                 <div className={styles.testimonialsContainer}>
                    <h1 className={styles.title}>TESTIMONIALS</h1>
                    <div className={styles.testinomialDetail}>
                    {testinomialData.map((item, i) => {
                        return (
                        <React.Fragment key={i}>
                            <TestinomialCard item={item} />
                        </React.Fragment>
                    )
                    })}
                    </div>
                </div>

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
  );
};

export default About;
