import { useContext } from "react";
import ShowsContext from "../context/shows";


function useShowsContext(){
    return useContext(ShowsContext)
}

export default useShowsContext