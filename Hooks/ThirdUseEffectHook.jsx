import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const ThirdUseEffectHook = () => {
	const [titleName, setTitleName] = useState([]);
	const [searchTitle, setSearchTitle] = useState("");
	const [loading, setLoading] = useState(false);
	const inputRef = useRef("");
	useEffect(() => {
		const loadPosts = async () => {
			setLoading(true);
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/posts"
			);
			setTitleName(response.data);
			setLoading(false);
		};
		loadPosts();
	}, []);

	useEffect(() => {
		console.log("ref use effect");
		inputRef.current.focus();
	}, []);

	const handleChange = (e) => {
		setSearchTitle(e.target.value);
		const newfilterData = titleName.filter((val) => {
			return val.title.includes(searchTitle);
		});
		setTitleName(newfilterData);
	};
	return (
		<>
			<h2>serach filter</h2>
			<input
				type='text'
				placeholder='search title'
				ref={inputRef}
				value={searchTitle}
				onChange={handleChange}></input>

			{loading ? (
				<h3>Loading....</h3>
			) : (
				titleName.map((item) => {
					return <h5 key={item.id}>{item.title}</h5>;
				})
			)}
		</>
	);
};

export default ThirdUseEffectHook;
