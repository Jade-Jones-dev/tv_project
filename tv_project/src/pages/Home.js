
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";

import "./Home.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = ({shows}) => {
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
