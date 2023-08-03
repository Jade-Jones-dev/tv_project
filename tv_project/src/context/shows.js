import {createContext, useState, useContext} from "react";
import axios from "axios";

const ShowsContext = createContext();

function Provider({children}) {
	const [shows, setShows] = useState([]);
	const [filteredShows, setFilteredShows] = useState([]);

	const fetchShows = async () => {
		const response = await axios.get("https://api.tvmaze.com/shows");
		setShows(response.data);
		setFilteredShows(response.data);
	};

	const filterShows = (searchQuery) => {
		const filtered = shows.filter((show) => show.name.toLowerCase().includes(searchQuery.toLowerCase()));
		setFilteredShows(filtered);
	};

	function getSortValue(show) {
		return show.name;
	}

	const sortShows = (value) => {
		const sorted = shows.sort((a, b) => {
			const valueA = getSortValue(a);
			const valueB = getSortValue(b);
			if (value === "name_ascending") {
				return valueA.localeCompare(valueB);
			} else if (value === "name_descending") {
				return valueB.localeCompare(valueA);
			}
      else return filteredShows
		});
		setFilteredShows([...sorted]);
	};

	const valueToShare = {
		shows: filteredShows,
		fetchShows,
		filterShows,
		sortShows,
	};

	return <ShowsContext.Provider value={valueToShare}>{children}</ShowsContext.Provider>;
}

// Helper function to access the context
function useShowsContext() {
	const context = useContext(ShowsContext);
	if (!context) {
		throw new Error("useShowsContext must be used within a ShowsContext Provider");
	}
	return context;
}

export {Provider, useShowsContext};
export default ShowsContext;
