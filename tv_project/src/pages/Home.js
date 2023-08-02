import {useEffect, useState} from "react";

import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";

import "./Home.css";

import Header from '../components/Header';
import Footer from '../components/Footer';

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



	return (
		<div className='home'>
			<Header/>
			<SearchBar />
			<h4>{shows.length} shows available</h4>
      <Cards shows={shows}/>
	  <Footer/>
		</div>
	);
};

export default Home;
