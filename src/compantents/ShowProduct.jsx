import React, { useState,useEffect } from 'react'

function ShowProduct() {
    const [loading,setLoading]=useState(false)
    const [product,setProduct]=useState([])

    const getProduct=async()=>{
      setLoading(true)
      const response=await fetch("apidata.json")
      console.log(await response.clone().json())
     setProduct(await response.clone().json())
     setLoading(false)
     
    }
    useEffect(() => {
      getProduct()

    }, [loading])
    console.log(product)
    


const Loading=()=>{
    return(
        <>
        loading....
        </>
    )
}

const SingleProduct=()=>{

    return(
        <>
        <p>hingfsdlsj</p>
    
        
        </>
    )
}
  return (
    <>
    <div className="">
        <div className="">
        
            {loading?<Loading/>:<SingleProduct/>}
        </div>
    </div>
    
    </>
  )
}

export default ShowProduct