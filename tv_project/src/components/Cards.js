import React, { useState } from "react";
import "./Cards.css";
import useShowsContext from "../hooks/useShowsContext";
import Modal from "./Modal";

const Cards = () => {
  const { shows } = useShowsContext();
  const [selectedShow, setSelectedShow] = useState(null);

  const renderedShows = shows.map((show) => {
    return (
      <div className='card' key={show.id}>
        <img src={show.image.medium} alt={show.name} />
        <div className='card-content'>
          <h5>
            {show.name} 
          </h5>
          <h5>Show length {show.runtime} mins</h5>
          <button onClick={() => setSelectedShow(show)}>Show details</button>
        </div>
        <div>
         
        </div>
      </div>
    );
  });

  return (
    <div className='shows'>
      {renderedShows}
      {selectedShow && (
        <Modal show={selectedShow} closeModal={() => setSelectedShow(null)} />
      )}
    </div>
  );
};

export default Cards;
