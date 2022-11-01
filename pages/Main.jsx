import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
// import ContactForm from "../components/contact-us/ContactForm";

const Main = ({ children }) => {
	return (
		<>
		    <Navbar />
			{children}
			{/* <ContactForm/> */}
			<Footer />
		</>
	);
};

export default Main;
