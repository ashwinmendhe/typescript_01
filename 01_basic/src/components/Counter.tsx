import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState<number>(0);
  return (
    <div>
        <p>Cups of ordered: {count}</p>
        <button onClick={()=> setCount((c) => c+1)}>Order one more</button>
    </div>
  )
}

export default Counter