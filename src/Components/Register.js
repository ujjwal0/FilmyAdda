import React from 'react'
import { BsGoogle } from 'react-icons/bs'
export default function Signup(props) {
  return (
    <section className ="vh-100">
 
                <p className ="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-white">Sign up</p>
                 <h4 className='text-center text-danger'>{props.message}</h4>

                 
                <form style={{textAlign:"center"}} className ="mx-1 mx-md-4 mb-4" onSubmit={props.register}>

                    <div style={{width:"450px",marginLeft:"380px"}} className ="form-outline flex-fill mb-0">
                      <input name='name' type="text" id="form3Example1c" className ="form-control" />
                      <label className ="form-label text-white" htmlFor ="form3Example1c">Your Name</label>
                    </div>
              

                
                    <div style={{width:"450px",marginLeft:"380px"}} className ="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className ="form-control" name='email'/>
                      <label className ="form-label text-white" htmlFor ="form3Example3c">Your Email</label>
                    </div>
         
               
                    <div style={{width:"450px",marginLeft:"380px"}} className ="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className ="form-control"name='password' />
                      <label className ="form-label text-white" htmlFor ="form3Example4c">Password</label>
                    </div>
                

              
                    <div style={{width:"450px",marginLeft:"380px"}} className ="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className ="form-control" name='confirmpassowrd'/>
                      <label className ="form-label text-white" htmlFor ="form3Example4cd">Repeat your password</label>
                    </div>
                  
                 

                  <div className ="mx-4 mb-lg-4">
                    <button  type="submit" className ="btn btn-warning btn-lg ">Register</button>
                    <button type="button" onClick ={props.switch} className ="btn btn-warning btn-lg mx-4">Login</button>
                   {/* <BsGoogle style={{ background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",color:"black",border:"4px solid white",borderRadius:"50%",padding:"2px",height:"45px",width:"45px"}} onClick={props.google} /> */}
                  </div>
                 

                </form>

             
</section>
  )
}
////// signup