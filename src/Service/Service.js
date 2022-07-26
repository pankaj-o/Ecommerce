
import axios from "axios";

export const getEmp = async (x,y) => {

    const data ={
        email:x,
        password:y
    }
    // try{

    //     const resp = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      
    //     return resp.data;

    // }catch(err){
    //     console.log(err);


    // }

    try{

        const resp = await axios.post('https://developers.promaticstechnologies.com:3021/login',data);
      
        return resp.data;

    }catch(err){
        console.log(err)
        // console.log(err.response.data.errors.msg)
        alert(
               err.response.data.errors.msg

           )

    }
}