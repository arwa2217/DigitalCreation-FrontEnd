import React from 'react'
import styles from "./strategycard.module.scss"

const StrategyCard = ({item, customTitleText,customClassText,customStrategyImag}) => {
  return (
        <>
          <div className={styles.mainContainer}>
              <h2 className={[styles.titleText, customTitleText].join(" ")}>{item.title}</h2>
<div className={styles.strategyImage1}>
              <img className={[styles.strategyImage, customStrategyImag].join(" ")} src={item.strategypicture} alt="error" />
</div>
              <p className={[styles.descriptionText, customClassText].join(" ")}>{item.description}</p>
            </div>
        </>
  )
}

export default StrategyCard