import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster,name,date,rating}) => {
  return (
    <div className='w-40 mr-4'> 
        <img className='w-60 h-60' alt='Movie Card' src={IMG_CDN_URL+poster}/>
        <h1>{name}</h1>
        <h1>{date}</h1>
    </div>
  )
}

export default MovieCard