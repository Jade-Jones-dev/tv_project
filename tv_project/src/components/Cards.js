import React from 'react'

const Cards = ({shows}) => {
   const renderedShows = shows.map((show) => {
        return (
            <div>{show.name}</div>
        )
    })
  return (
    <div>
        {renderedShows}
    </div>
  )
}

export default Cards