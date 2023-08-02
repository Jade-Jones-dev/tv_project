import React from 'react'
import './Cards.css'

const Cards = ({shows}) => {
   const renderedShows = shows.map((show) => {
        return (
            <div>{show.name}</div>
        )
    })
  return (
    <div className='shows'>
        {renderedShows}
    </div>
  )
}

export default Cards