import React from "react";
import { navbarData } from "../../data";
import styles from "./navbar.module.scss";
import logo from "../../assets/images/Logo.png"
// import {Link, Outlet} from "react-router-dom"
const Navbar = () => {
	return (
		<>
			<div className={styles.mainConatiner}>
				<div className={styles.logoContainer}>
					<img className={styles.logo}src={logo} alt="error"/>
				</div>
				<div className={styles.navbarContent}>
						{navbarData.map((item, i) => {
							return <h4 key={i}>{item}</h4>;
						})}
            {/* <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
			<Link to="/client">Client</Link>
			<Link to="/service">Service</Link>
            <Link to="/contact-us">Contact Us</Link> */}
        

      {/* <Outlet /> */}
				</div>
			</div>
		</>
	);
};

export default Navbar;
