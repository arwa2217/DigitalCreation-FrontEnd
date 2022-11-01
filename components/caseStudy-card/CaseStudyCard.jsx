import React from 'react'
import styles from "./casestudycard.module.scss"

const CaseStudyCard = ({ item }) => {
    return (
        <>
            <div className={styles.mainContainer}>
                <h1 className={styles.titleText}>{item.title}</h1>
                <h4 className={styles.descriptionText}>{item.description}</h4>
                <div>
                    {item.discount.map((item1, index) => {
                        return (
                            <p key={index} className={styles.discountText}>* {item1}</p>
                        )
                    })}
               </div>
            </div>
        </>
    )
}

export default CaseStudyCard