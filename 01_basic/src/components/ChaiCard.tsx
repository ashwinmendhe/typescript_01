import React from 'react'

interface ChaiCardProp {
    name: String;
    price: number;
    isSpacial?: boolean 
}

function ChaiCard({name, price, isSpacial=false}: ChaiCardProp) {
  return (
<article>
    <h2>
        {name} {price}{isSpacial && <span>star</span>}
    </h2>
</article>  )
}

export default ChaiCard