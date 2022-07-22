import {obj} from '../apidata.js'

  export const datadt= async()=>{

     try{
         const data=await obj()
         return data
     }
     catch(e){console.log(e)}
     
 }


