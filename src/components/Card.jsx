import React from 'react'
import Img from 'gatsby-image'
import '../modules/styles/card.sass'

const Card = ({ data }) => {
  let imageStyle = { maxWidth: '100px' }
  return (
    <div key={data.text} className="column is-5 card__container mx-auto">
      <section className="section">
        <div className="has-text-centered">
          <Img className="card__img mb-4" style={imageStyle} fluid={data.image.childImageSharp.fluid} />
          <p>{data.text}</p>
        </div>
      </section>
    </div>
  )
}

export default Card
