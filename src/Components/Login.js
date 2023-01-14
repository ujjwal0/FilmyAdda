import React from 'react'
import { BsGoogle } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
export default function Login(props) {
   const k=["text-center"];
   const navigate = useNavigate()
   if(props.type===1){
    navigate("/home")
   }else{
    k.push("text-danger");
   }
  return (
    <section className ="vh-100">
   
                  <p className ="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-white">Sign in</p>
                  <p className={k.join(" ")}>{props.message}</p>
  
                  <form style={{textAlign:"center"}} className ="mx-1 mx-md-4" onSubmit={props.login} >
  
                  
                      <div style={{width:"450px",marginLeft:"380px"}} className ="form-outline flex-fill mb-0 ">
                        <input  type="email"  name="email"className ="form-control" />
                        <label className ="form-label text-white" htmlFor ="email">Your Email</label>
                      </div>
       
  
                   
                      <div style={{width:"450px",marginLeft:"380px"}} className ="form-outline flex-fill mb-0">
                        <input type="password"  name='password' className ="form-control ps-5" />
                        <label className ="form-label text-white" htmlFor ="password">Password</label>
                      </div>
                  
                    <div className ="mx-4 mb-lg-4">
                      <button type="button" onClick ={props.switch} className ="btn btn-warning btn-lg ms-2">Register</button>
                      <button type="submit"  className ="btn btn-warning ms-3 btn-lg">Login</button>
                     
                      
                      {/* <BsGoogle style={{ background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",color:"black",border:"4px solid white",borderRadius:"50%",padding:"2px",height:"45px",width:"45px",marginLeft:"12px"}} onClick={props.google} />
                     */}
                    </div>
  
                  </form>
  
                
  </section>
  )
}
//login