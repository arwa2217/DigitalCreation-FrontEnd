import React from "react";
import { followData, serviceData } from "../../data";
import Divider from "../divider/Divider";
import styles from "./footer.module.scss";

const Footer = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.container}>
				<div className={styles.visitUs}>
					<div className={styles.visitUsTitle}>
						<h2>Visit Us</h2>
					</div>
					<div>
						<p className={styles.textData}>Warsaw ul. Marynarska 21, 02-674</p>
						<p className={styles.textData}>client@fireart.studio</p>
					</div>
				</div>
				<div className={styles.callUs}>
					<div className={styles.callUsTitle}>
						<h2>Call Us</h2>
					</div>
					<div>
						<p className={styles.textData}>United State</p>
						<p className={styles.textData}>+1 (415) 877 16 12</p>
					</div>
				</div>

				<div className={styles.services}>
					<div className={styles.serviceTitle}>
						<h2>Service</h2>
					</div>
					<div>
						{serviceData.map((item, i) => {
							return <p className={styles.textData} key={i}>{item}</p>;
						})}
					</div>
				</div>

				<div className={styles.followUs}>
					<div className={styles.followTitle}>
						<h2>Follow Us</h2>
					</div>
					<div>
						{followData.map((item, i) => {
							return <p key={i} className={styles.textData}>{item}</p>;
						})}
					</div>
				</div>
			</div>
			<Divider customClass={styles.divideLine} />
			
				<p className={styles.copyRightText}>© 2022 GH Digital Media Pvt Ltd. All rights reserved | Blogs | Privacy Policy and Terms of Use</p>
			
		</div>
	);
};

export default Footer;
