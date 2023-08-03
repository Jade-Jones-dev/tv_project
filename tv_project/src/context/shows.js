import { createContext, useState, useContext } from "react";
import axios from "axios";

const ShowsContext = createContext();

function Provider({ children }) {
  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);

  const fetchShows = async () => {
    const response = await axios.get("https://api.tvmaze.com/shows");
    setShows(response.data);
    setFilteredShows(response.data); 
  };

  const filterShows = (searchQuery) => {
    const filtered = shows.filter((show) =>
      show.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredShows(filtered);
  };
  const valueToShare = {
    shows: filteredShows, 
    fetchShows,
    filterShows
  
  };

  return (
    <ShowsContext.Provider value={valueToShare}>{children}</ShowsContext.Provider>
  );
}

// Helper function to access the context
function useShowsContext() {
  const context = useContext(ShowsContext);
  if (!context) {
    throw new Error("useShowsContext must be used within a ShowsContext Provider");
  }
  return context;
}

export { Provider, useShowsContext };
export default ShowsContext;
