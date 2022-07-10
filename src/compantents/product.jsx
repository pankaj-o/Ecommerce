import { useEffect, useState } from "react"
import React from 'react'

const product=()=> {
   const [data, setData] = useState([])
   const [filter, setFilter] = useState(data)
   const [loading, setLoading] = useState(false)
   let componentMounted=true
   
   useEffect(() => {
      const getProduct=async ()=>{
        setLoading(true)
        const response=await fetch('https://fakestoreapi.com/products/1') .then(res=>res.json())
        .then(json=>console.log(json))
      
     }
   
     getProduct()
     
   }, [])
   


  return (
    <>
    
    </>
  )
}
export default product

