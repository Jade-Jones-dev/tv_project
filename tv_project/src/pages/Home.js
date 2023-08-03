
import SearchBar from "../components/SearchBar";
import { useContext } from "react";
import Cards from "../components/Cards";
import ShowsContext from "../context/shows";

import "./Home.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
	const {shows} = useContext(ShowsContext)
	return (
		<div className='home'>
			<Header />
			<SearchBar />
			<h4>{shows.length} shows available</h4>
			<Cards shows={shows} />
			{/* <Footer /> */}
		</div>
	);
};

export default Home;
