import React,{useEffect, useState} from 'react'
import { toast } from 'react-toastify';
import userApi from '../Api/UserApi';



export default function Create() {

    const [user,setUser]=useState({
        name:"",
        email:"",
        mobile:"",
        address:""
    });
    
    const{name,email,mobile,address}=user;      


  
    const changeText=(e)=>{
     const{name,value}=e.target
     setUser({...user,[name]:value})
    }

    
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("user =",user);
        userApi.create(user).then(res=>{
           toast.success("user created successfully")
           window.location.href="/"
        }).catch(err=>toast.error(err.message))

        setUser({name:"",email:"",mobile:"",address:""})

    }



  
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-6 offset-md-3">
                    <div className="card shadow-lg bg-light rounded ">
                       <h4 className="text-center mt-4 text-warning ">Create the User</h4>
                        <div className="card-body">
                            <form action="" onSubmit={(event)=>submitHandler(event)} >
                                <div className="form-group mt-3">
                                   <input type="text" name="name" className="form-control " 
                                   id="name" placeholder="Enter your name ....." autoComplete="off" required
                                    value={name} onChange={(e)=>changeText(e)}
                                   />
                                </div>
                                <div className="form-group mt-3">
                                <input type="email" name="email" className="form-control" 
                                  id="email" placeholder="Enter your email ...."  autoComplete="off" required
                                  value={email} onChange={(e)=>changeText(e)}
                                  />
                                </div>
                                <div className="form-group mt-3">
                                <input type="number" name="mobile" className="form-control" 
                                  id="number" placeholder="Enter your phone number ..." autoComplete="off" required
                                  value={mobile} onChange={(e)=>changeText(e)}
                                  />
                                </div>
                               
                                <div className="form-group mt-3">
                                    <textarea name="address" id="addess" cols="30" rows="5" placeholder="Enter your address ..."
                                     value={address} onChange={(e)=>changeText(e)}
                                     id="address" className="form-control"></textarea>
                                </div>
                                <div className="form-group mt-3">
                                   <input type="submit" value="Create" className="btn btn-outline-success w-100" />
                                   <input type="reset" value="Clear" className="btn btn-outline-danger w-100 mt-3" />
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
            </div>


          
        </div>
    )
} 