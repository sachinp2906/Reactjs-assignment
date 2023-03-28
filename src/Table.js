import React , {useState} from 'react'
import Iterator from './Iterator'

function Table() {
  let [iterator , setIterator] = useState([])
  let [element , setElement] = useState('')

  function cartArr() {
    let IteratorArr = []
    for(let i=1 ; i<=10; i++) {
        IteratorArr.push(i*element)
    }
    setElement(IteratorArr)
  }
  return (
    <div className='App'>
     <Iterator arr={iterator}/>
     <input type='text' value={element} onChange={(e)=>setElement(e.target.value)}/>
     <button onClick={cartArr}>Get Table Data</button>
    </div>
  )
}

export default Table