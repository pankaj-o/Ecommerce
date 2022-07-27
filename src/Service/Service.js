
import axios from "axios";

export const getEmp = async (x,y) => {

    const data ={
        email:x,
        password:y
    }
    

    try{

        const resp = await axios.post('https://developers.promaticstechnologies.com:3021/login',data);
        const Token=resp.data.token


        const Key="token"
        
        const User=JSON.stringify(resp.data.user)
        localStorage.setItem(Key,Token)
       console.log('token',resp.data.token)
       console.log("user",resp.data.user)
        return resp.data;

    }catch(err){
        console.log(err)
        // console.log(err.response.data.errors.msg)
        alert(
               err.response.data.errors.msg

           )

    }
}