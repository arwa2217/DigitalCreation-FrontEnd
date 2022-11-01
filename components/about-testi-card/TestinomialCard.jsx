import React from "react";
import styles from "./testinomialcard.module.scss"

const TestinomialCard = ({item,customclassText,customclassName}) => {
    return (
        <>
            <div className={styles.mainContainer}>
             <div className={styles.testiImages}>
                    <img className={styles.pictureTestinomial} src={item.srcimages} alt="error" />
                </div>
                <p className={[styles.contentText, customclassText].join(" ")}>{item.description}</p>
                <h2 className={[styles.testinomialName, customclassName].join(" ")}>{item.testinomialName}</h2>

                <div className={styles.comapanyImageContainer}>
                    <img className={styles.companyNameImage} src={item.srcCompanyImages} alt="error" />
                </div>
            </div>
        </>
  )
};

export default TestinomialCard;
