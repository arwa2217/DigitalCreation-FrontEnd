import React from "react";
import CompanyCard from "../../components/companyCard/CompanyCard";
import Button from "../../components/button/Button";
import { awardImagesData, serviceCompanyData } from "../../data";
import styles from "./service.module.scss";
import AwardPicture from "../../components/award-images/AwardPicture";
import ContactForm from "../../components/contact-us/ContactForm";

const Service = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.serviceContainer}>
                    <h1 className={styles.title}>SERVICES</h1>
                    <div className={styles.description}>Growth Hackers isn't just a catchy name, it's our mission statement. We are obsessed with ROI, Targeted Acquisition, Retention and building a Brand. We are the team behind early and continued success of many startups, established brands and corporations across the globe.
                    </div>
                </div>

                <div className={styles.comapanyTestinomail}>
                    <div className={styles.companyCard}>
                    {
                        serviceCompanyData.map((item, i) => {
                            return (
                                <CompanyCard item={item} key={i} />
                            )
                        })
                    }
                    </div>

                    <Button
                        title="SCHEDULE A CONSULTATION"
                    customClass={styles.btnStyle}/>
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
  )
};

export default Service;
