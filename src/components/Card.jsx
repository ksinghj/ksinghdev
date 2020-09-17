import React from 'react'
import Img from 'gatsby-image'

const Card = ({ data }) => {
  return (
    <div key={data.text} className="column is-6">
      <section className="section">
        <div className="has-text-centered">
          <div
            style={{
              width: '240px',
              display: 'inline-block',
            }}
          ></div>
        </div>
        <Img fluid={data.image.childImageSharp.fluid} />
        <p>{data.text}</p>
      </section>
    </div>
  )
}

export default Card
