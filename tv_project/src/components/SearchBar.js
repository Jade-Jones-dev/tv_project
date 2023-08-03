import {useState, useEffect} from "react";
import {useShowsContext} from "../context/shows";
import "./SearchBar.css";

const SearchBar = () => {
	const {filterShows, sortShows} = useShowsContext();
	const [searchQuery, setSearchQuery] = useState("");

	const handleInputChange = (e) => {
		setSearchQuery(e.target.value);
		filterShows(e.target.value);
	};

	const handleSortChange = (e) => {
		sortShows(e.target.value);
	};

	return (
		<div className='searchbar'>
			<div className='search'>
				<h4>Find a show</h4>
				<input type='text' placeholder='Search shows...' value={searchQuery} onChange={handleInputChange} />
			</div>
			<div className='dropdown'>
				<h4>Sort by</h4>
				<select onChange={handleSortChange}>
					<option value='default'>None</option>
					<option value='name_ascending'>Show name ascending</option>
					<option value='name_descending'>Show name descending</option>
				</select>
			</div>
		</div>
	);
};

export default SearchBar;
