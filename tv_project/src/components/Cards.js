import React from 'react'
import './Cards.css'

const Cards = ({shows}) => {
   const renderedShows = shows.map((show) => {
        return (
            <div className='card' key={show.id}>
              <img src={show.image.medium} alt={show.name}/>
            <div className='card-content'>
              <h5>{show.name} - {show.runtime} mins</h5>
              <h5>Premiered on {show.premiered}</h5>
            </div>
            </div>
        )
    })
  return (
    <div className='shows'>
        {renderedShows}
    </div>
  )
}

export default Cards