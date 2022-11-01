import React from "react";
import styles from "./awardpicture.module.scss"

const AwardPicture = ({item}) => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.awardImages}>
                    <img className={styles.pictureAward} src={item.srcimages} alt="error" />
                </div>
                <p className={styles.awardTitle}>{item.title}</p>
                <p className={styles.awardDescription}>{item.description}</p>
            </div>
        </>
    );
};

export default AwardPicture;
