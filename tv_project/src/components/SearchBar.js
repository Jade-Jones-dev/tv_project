import {useState} from "react";
import {useShowsContext} from "../context/shows";
import "./SearchBar.css";

const SearchBar = () => {
	const {filterShows} = useShowsContext();
	const [searchQuery, setSearchQuery] = useState("");

	const handleInputChange = (e) => {
		setSearchQuery(e.target.value);
		filterShows(e.target.value);
	};

	return (
		<div className='searchbar'>
      <h4>Find a show</h4>
			<input type='text' placeholder='Search shows...' value={searchQuery} onChange={handleInputChange} />
		</div>
	);
};

export default SearchBar;
