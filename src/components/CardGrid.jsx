import React from 'react'

import Card from './Card'
import '../modules/styles/features.sass'

const CardGrid = ({ gridItems }) => (
  <div className="features__grid">
    {gridItems.map(item => (
      <Card key={item.text} data={item} />
    ))}
  </div>
)

export default CardGrid
