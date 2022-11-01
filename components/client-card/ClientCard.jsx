import React from "react";
import styles from "./clientcard.module.scss";

const ClientCard = ({item}) => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.companyLogo}>
                    <img src={item.srcImages} className={styles.companyLogoImage} alt="error"/>
                </div>
            </div>
        </>
  )
};

export default ClientCard;
