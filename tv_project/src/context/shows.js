import {createContext, useState} from "react";
import axios from "axios";

const ShowsContext = createContext();

function Provider({children}){
    const [shows, setShows] = useState([]);

    const fetchShows = async () => {
        const response = await axios.get('https://api.tvmaze.com/shows');
        setShows(response.data)
    }

    const valueToShare ={
        shows,
        fetchShows
    }
    return <ShowsContext.Provider value={valueToShare}>{children}</ShowsContext.Provider>
}

export {Provider};
export default ShowsContext;