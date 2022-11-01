/** @format */

import React, { useState } from "react";
import galaxies from "../images/2.jpg";

const FistUseStateHook = () => {
	const [showImage, setShowImage] = useState(true);
    const [count, setCount] = useState(0);
    const [name, setName] = useState('rohan');
    
	const onclick = () => {
		setShowImage(!showImage);
    };
     const handleIncrement = () => {
        setCount(count + 1);
        console.log("hi")
    }
    const handleDecrement = () => {
        setCount(count - 1);
        console.log("bye")
    }
    const clickMe = () => {
        setName("riya");
       
    }
	return (
		<>
			<div>
				{showImage && <img src={galaxies} alt='error display img'></img>}
			</div>
            <button onClick={onclick}>hide</button>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button> &nbsp;
            <button onClick={handleDecrement}>Decrement</button>

            <h2>{name}</h2>
            <button onClick={clickMe}>changeName</button>
		</>
	);
};

export default FistUseStateHook;
