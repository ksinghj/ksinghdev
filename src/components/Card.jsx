import React from 'react'
// import Img from 'gatsby-image'
import '../modules/styles/card.sass'

const Card = ({ data }) => {
  let imageStyle = { maxWidth: '100px' }
  return (
    <div key={data.text} className="card__container card-teal mx-auto mt-4">
      <section className="section">
        <div className="has-text-centered">
          <img src={data.image} style={imageStyle} />
          <h3 className="card__header mt-5">{data.text}</h3>
        </div>
      </section>
    </div>
  )
}

export default Card
