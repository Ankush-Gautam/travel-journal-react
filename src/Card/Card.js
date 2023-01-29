import React from 'react'
import './card.css'
import { CiLocationOn } from 'react-icons/ci'

function Card(props) {
  return (
    <div className='card-container d-flex'>
      <img className='card-img' src={props.img} alt={props.title} />

      <div className="card-details">
        <span className='card-location'><CiLocationOn />{props.location}</span>
        <span className='card-link'><a href={props.googleMaps}>View on Google Maps</a></span>
        <h3 className='card-title'>{props.title}</h3>
        <p className='card-dates'>{props.startDate} - {props.endDate}</p>
        <p className="card-descrip">{props.description}</p>
      </div>

    </div>
  )
}

export default Card