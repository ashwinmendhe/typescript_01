import React, {useState} from 'react'

interface OrderFormProps{
    onSubmit(order: {name:String, cups: number}): void
}

function OrderForm({onSubmit}: OrderFormProps) {
    const [name, setName] = useState<String>("Massala")
    const [cups, setCups] = useState<number>(1)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        onSubmit({name, cups});
    }

  return <form onSubmit={handleSubmit}>
    <label>Chai Name</label>
    <input value={name}
    type='text'
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value)
    } />
     <label>Cups</label>
    <input value={cups}
    type='number'
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setCups(Number(e.target.value) || 0)
    } />
    <button type='submit'>Place Order</button>
  </form>
}

export default OrderForm