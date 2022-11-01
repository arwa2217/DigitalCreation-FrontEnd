import React from "react";
import styles from "./contactus.module.scss"
import Button from "../../components/button/Button"
const ContactUs = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.conatctUsContainer}>
                    <h1 className={styles.title}>LET'S TALK</h1>
                    <div className={styles.description}>We thrive at coming up with innovative ideas but also understand that a smart concept should be supported with measurable results.</div>
                </div>

                <div className={styles.contactForm}>
                    <form>
                        <input className={styles.inputTextField} type="text"  placeholder="Full Name" />
                        
                        <input className={styles.inputEmailField} type="email"  placeholder="Your Official Email" />
                        
                        <input className={styles.inputPhoneField} type="tel" placeholder="Phone" /> 
                        
                        <textarea className={styles.inputTextField} rows="10" cols="50" placeholder="Describe Your Project" />
                        
                        <Button title="SUBMIT REQUEST"
                        customClass={styles.btnStyle}/>
                    </form>
                </div>
            </div>
        </>
  )
};

export default ContactUs;
