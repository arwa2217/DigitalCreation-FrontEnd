import React from "react";
import styles from "./companycard.module.scss";
const CompanyCard = ({item}) => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.imageContainer}>
                    <img className={styles.companyLogo} src={item.srcImage} alt="error"/>
                </div>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.description}>{item.description}</p>
            </div>
        </>
  )
};

export default CompanyCard;
