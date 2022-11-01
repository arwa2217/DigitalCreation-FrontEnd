import React from 'react'
import styles from "./button.module.scss";
const Button = ({ title, type, customClass, customClassForText, handleClick, handleMouseEnter, handleMouseLeave }) => {
  return (
      <>
      <button className={[styles.button, customClass].join(" ")}
        type={type}
        onClick={() => { handleClick() }}
        onMouseEnter={() => { handleMouseEnter() }}
        onMouseLeave={() => { handleMouseLeave() }}>
          
        <p className={[styles.text, customClassForText].join(" ")}>{title}
        </p></button>
      </>
  )
}

export default Button