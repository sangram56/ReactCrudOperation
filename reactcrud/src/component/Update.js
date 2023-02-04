import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import userApi from '../Api/UserApi'


export default function Update() {

    const[user,setUser]=useState({
        name:"",
        email:"",
        mobile:"",
        address:""
    })
    const{name,email,mobile,address}=user;

    const params=useParams();
    console.log('id = ',params)

   
    useEffect(()=>{
    userApi.getById(params.id).then(res=>{
    console.log('single user from home  = ',res.data)
      setUser(res.data);                                            
    }).catch(err=>toast.error(err.message))
    },[]);


    const changeText=(e)=>{
       const{name,value}=e.target;
       setUser({...user,[name]:value});
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log('updated data =',user)
        userApi.update(user,params.id).then(res=>{
            toast.success("user updated successfully")
            window.location.href="/"
        }).catch(err=>toast.error(err.message))

    }







    return (
        <div className="container">
            <div className="row mt-3 ">
                <div className="col-md-6 offset-md-3 mt-5">
                    <div className="card">
                    <h4 className="text-center mt-4 text-warning ">Update the User</h4>
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
                                   <input type="submit" value="Update" className="btn btn-outline-success w-100" />
                              
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
           
        </div>
    )
}