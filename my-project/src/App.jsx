import { useState } from 'react'
import {Routes,Route,Link, useParams} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './components/Weather'
function App() {
 

  return (
    <div>
      <div>
        <Link className='nav_link' to="/">Home</Link>
        <Link className='nav_link' to="/about">About</Link>
        <Link className='nav_link' to="/weather">Weather</Link>
        <Link className='nav_link' to="/products">Products</Link>
      </div>
      <Routes>

      <Route path="/" element={<h1>This is Home</h1>}  />
      <Route path="/about" element={<h1>This is about Home</h1>}  />
      <Route path="/contact" element={<h1>This is contact Home</h1>}  />
      <Route path="/weather" element={<Weather/>}  />
      <Route path="/products" element={<Products/>}  />
      <Route path="/products/:id" element={<ProductDetail/>}  />
      </Routes>
      {/* <Weather/> */}
    </div>
  )
}

export default App

function Products (){
  
  const [products,setProducts] = useState ([

  {
    id: 1,
    name:"milk"
  },
 {
  id  : 2,
  name : "cheese"
 },
 {
  id: 3,
  name: "curd"
 }

  ])


return(
   
  <div >

    {products.map((product)=>{
      return <div>

        <h2>{product.id}</h2>
        <h2>{product.name}</h2>
      </div>
    })}
  </div>

)

}













function ProductDetail(){


  const {id}= useParams()
  return (
    <div>
      <h1>The Id is {id}</h1>
    </div>
  )
}