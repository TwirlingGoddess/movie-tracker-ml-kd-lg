import React from 'react';
import PropTypes from 'prop-types'
import './Card.css'

export const Card = ({title, overview, rating}) => {
  return(
    <div className="card">
      <h2>{title}</h2>
      <h3>Rating: {rating}</h3>
      <p>{overview}</p>
      <button>FAV</button>
    </div>
    )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}