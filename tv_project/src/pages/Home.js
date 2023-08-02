import {useEffect, useState} from "react";

import SearchBar from "../components/SearchBar";

import "./Home.css";

const Home = () => {
	const [shows, setShows] = useState([]);

	const fetchShows = () => {
		fetch("https://api.tvmaze.com/shows")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setShows(data);
			});
	};

	useEffect(() => {
		fetchShows();
		
	},[]);

  console.log(shows)

	return (
		<div className='home'>
			<SearchBar />
			<h4>Home -choose from {shows.length} shows</h4>
		</div>
	);
};

export default Home;
