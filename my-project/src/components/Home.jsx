import React,{useState} from "react"
import Game from "./Game.jsx"

export default function Home (){

    const [count,setCount] = useState(0)
   const [games, setGames]= useState([
    "Football",
    "Cricket",
    "freefire",
    "Pes",
  
   ]) 
   const [persons, setPersons] = useState([
    {
     'name':'hulash',
      'age':22,
      'gender':"M"
    },
    {
      'name':'jharana',
       'age':22,
       'gender':"f"
     },
     {
      'name':'dipesh',
       'age':20,
       'gender':"M"
     }
   ])
    return (
  
  <>
  
  <h1>Header</h1>
  <p>Status</p>
  {/* <button onClick={()=>
  {
    let personsData = persons
    let newPerson ={
      name:"bhijan",
      age: 25,
      gender:"M"
  
  
    }
    personsData.push{
      newPerson
    }
    console.log(personsData)
    setPersons(personsData)
  }
  
  }>add person</button */} 
  <button  onClick={
    ()=>{
      setPersons((persons)=>{
        return [...persons,{
          name:"bhijan",
          age:25,
          gender:"M"
        }]
      }
    )
    console.log(persons)
    }
  } >Add munchey
  
  </button>
    
     
  {
  persons.map((person,index)=>{
    return (
      <div key={index} className='person'>
      <h1>{person.name}</h1>
      <h2>Age : {person.age}</h2>
      <p>Gender :{person.gender}</p>
      </div>)
    
  }
  
  )
  }
  
  <ul>
   {
     games.map((game,index)=>{
     return (<Game key={index} game={game}/>)
   }
    )
  
   }
  </ul>
  <h1>
    COUNT : {count} </h1>
    {
      count>10?<p>Count greater than 10</p>:<p>Count less than 10 </p>
    }
  
  <button onClick={
    ()=>{
  
      console.log('btn clicked')
      setCount(
        (count)=>count+1
      )
      setCount(
        (count)=>count+1
      )
      console.log(count)
    }
  
  }>
    Increase
  </button>
  <button onClick={
    ()=>{
  
      console.log('btn clicked')
      setCount(count - 1)
      console.log(count)
    }
  
  }disabled={count<=0}>
    Decrease
  </button>
  
  
  </>
    )
  
  
  }