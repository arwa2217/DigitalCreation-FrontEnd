// import { useState } from 'react';
import "./App.css";

// import Footer from "./components/footer/Footer";
// import About from "./pages/about/About";
// import Client from "./pages/client/Client";
// import ContactUs from "./pages/contact-us/ContactUs";
import Home from "./pages/home/Home";
import Main from "./pages/Main";
// import Service from "./pages/services/Service";
// import { Route, Routes, } from "react-router-dom";
// import Navbar from './components/navbar/Navbar';
// import FistUseStateHook from './Hooks/FistUseStateHook';
// import SecondUseRefHook from './Hooks/SecondUseRefHook';
// import ThirdUseEffectHook from './Hooks/ThirdUseEffectHook';
// import Ppop from './Ppop';
// import FormActive from './FormActive';
// import PracticeHook from './PracticeHook';
// import Product from './Product';
// import UserActive from './UserActive';

function App() {
	// const [name, setName] = useState("rohan");
	// const getData = (name) => {
	//   console.log("My name is", name)
	// }
	return (
		<>
			{/* <UserActive name={name} setName={setName} />
      <FormActive getData={getData} />
      <Product />
      <PracticeHook/> */}
			{/* <FistUseStateHook/> */}
			{/* <SecondUseRefHook/> */}
			{/* <ThirdUseEffectHook/> */}
			{/* <Navbar/> */}
			<Main>
				<Home/>
            </Main>
		</>
	);
}

export default App;
