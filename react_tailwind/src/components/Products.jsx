import React from 'react'

import {useState,useEffect} from 'react'



 function Products() {
     const [products,setProducts] = useState()

  useEffect(()=>{
    fetchProducts()
  },[])

   async function fetchProducts(){
   const response = await fetch ('https://dummyjson.com/products')
   const responseJson= await response.json()
   console.log(responseJson)
   setProducts(responseJson.products)

   }


  return (
    <div className='mt-4 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>


       {

        products && products.map(

            (product)=>{
                 const  discountPercentage =  product.discountPercentage
                const sellingPrice= product.price - (product.price * discountPercentage)/100
                return(
                    <Product name={product.title} markedPrice={product.price} sellingPrice={sellingPrice.toFixed(2)} imageURL={product.images[0]}/>
                )
            }
        )
       }






     {/* <Product/>
     <Product/>
     <Product/>
     <Product/>
      */}

         


    </div>
  )
}






export default Products


 function Product({name,markedPrice,sellingPrice,imageURL}) {
  return (
    <div className='mt-4 grid p-5 '>
      
       <div className='bg-gray-200 p-5 rounded-xl  w-52'> 
          <div className='h-48 w-full border-2 border-red-600  '>
            <img src={imageURL} alt={name} className='h-full w-full object-cover'/>
          </div>
       
             <h1 className='test-3xl sm:text-xl md:text-2xl  font-bold '>{name}</h1>
             <h2  className='text-red-500 line-through '>${sellingPrice}</h2>
             <h2 className='text-green-600'>${markedPrice}</h2>
             <button className='px-4 py-2 bg-blue-500 text-white rounded-full w-full'>View</button>
         </div>

    </div>
  )
}
