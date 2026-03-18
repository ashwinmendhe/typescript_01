import React from 'react'

import ChaiCard from './ChaiCard'
import type { Chai } from '../types'


interface ChailistProps {
    items: Chai[]
}

function Chailist({items}: ChailistProps) {
  return (
    <div>Chailist

        {items.map((chai) => (
            <ChaiCard key={chai.id}
            name={chai.name}
            price={chai.price}
            isSpacial={chai.price>30}/>
        ))}
    </div>
  )
}

export default Chailist