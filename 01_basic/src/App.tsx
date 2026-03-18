import { useState } from 'react'
import './App.css'
import ChaiCard from './components/ChaiCard'
import Counter from './components/Counter'
import Chailist from './components/Chailist'
import type {Chai} from './types'
import OrderForm from './components/OrderForm'
import Card from './components/Card'
const menu: Chai[] = [
  {
    id: 1,
    name: "Massala",
    price: 10
  },
  {
    id: 2,
    name: "Ginger",
    price: 20
  },
  {
    id: 3,
    name: "lemon",
    price: 40
  }
]


function App() {

  return (
    <>
      <div>
        <h1>Hello</h1>
        <ChaiCard name="Ashwin" 
        price={40}/>
        <ChaiCard name="mende" 
        price={422}/>

      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <Chailist items={menu}/>
      </div>
      <div>
        <OrderForm onSubmit={(order) => {
          console.log("placed", order.name, order.cups)
        }}/>
      </div>
      <div>
        <Card 
        title='Chai aur Typescript'
        footer ={<button>Order Now</button>}/>
      </div>
    </>
  )
}

export default App
