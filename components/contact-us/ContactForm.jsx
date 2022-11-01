import React from "react";
import Button from "../button/Button";
import styles from "./contactform.module.scss";

const ContactForm = () => {
    return (
        <>
            <div className={styles.contactUsContainer}>
            <h1 className={styles.title}>CONTACT US</h1>
          <div className={styles.contactForm}>
          <form>
            <input className={styles.formInput} type="text" placeholder="Full Name*"/> 
            <input className={styles.formInput} type="text" name="company" placeholder="Company*" />
            <input className={styles.formInput} type="email" name="email" placeholder="Official Email*"/>
              <input className={styles.formInput} type="tel" name="number" placeholder="Number*" />

              <Button title="SUBMIT US YOUR REQUEST"
                customClass={styles.btnSubmit}
                customClassForText={styles.btnSubmitText} />  
            </form>
          </div>
        </div>
        </>
  )
};

export default ContactForm;
