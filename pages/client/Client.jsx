import React from "react";
import ClientCard from "../../components/client-card/ClientCard";
import ContactForm from "../../components/contact-us/ContactForm";
import { companyData } from "../../data";
import styles from "./client.module.scss"

const Client = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.clientContainer}>
                    <h1 className={styles.title}>CLIENTS</h1>
                    <div className={styles.description}>Our brainstorming sessions start with us getting into the shoes of our clients. For us, we are them and they are us. It's one and the same and that makes all the difference.</div>
                </div>

                <div className={styles.mncContainer}>
                    <h1 className={styles.title}>MNCs</h1>
                    <div className={styles.mncLogo}>
                        {companyData.map((item, i) => {
                            return (
                                <>
                                    <ClientCard item={item} key={i} />
                                </>
                            )
                        })}
                   </div>
                </div>

                <div className={styles.mncContainer}>
                    <h1 className={styles.title}>FUNDED COMPANIES</h1>
                     <div className={styles.mncLogo}>
                        {companyData.map((item, i) => {
                            return (
                                <>
                                    <ClientCard item={item} key={i} />
                                </>
                            )
                        })}
                   </div>
                </div>

                 <div className={styles.mncContainer}>
                    <h1 className={styles.title}>SMEs</h1>
                    <div className={styles.mncLogo}>
                        {companyData.map((item, i) => {
                            return (
                                <>
                                    <ClientCard item={item} key={i} />
                                </>
                            )
                        })}
                   </div>
                </div>

                <div className={styles.mncContainer}>
                    <h1 className={styles.title}>BOOTSTRAPPED COMPANIES</h1>
                     <div className={styles.mncLogo}>
                        {companyData.map((item, i) => {
                            return (
                                <>
                                    <ClientCard item={item} key={i} />
                                </>
                            )
                        })}
                   </div>
                </div>
                <ContactForm/>
            </div>
        </>
  )
};

export default Client;
