import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import userApi from '../Api/UserApi'



export default function Home(props) {
const [users,setUsers]=useState([])


    const readUser=()=>{
        userApi.getAll().then((res)=>{
            console.log('data =',res.data)
            setUsers(res.data)                       //fetch the data in home state
        }).catch(err=>{console.log(err.message)})
    }

  
   useEffect(()=>{
    readUser()
   },[]);


   //for delete the data 
  const delHandler=(id)=>{
      if(window.confirm("sure to delete =" + id  + "?")){
         userApi.delete(id).then(res=>{
            toast.success("user deleted ");
            window.location.href="/"
          }).catch(err=>toast.error(err.message))
      }else{
          toast.warning("Delete Terminated ")
      }
  }



    return (
     
            <div className="row mt-3">
                {
                    users.length === 0 ? (
                        <div className="col-md-12 text-center">
                              <h3 className="text-center text-danger">No user to show </h3>
                        </div>
                    ) :(
                        <div className="container">
                          <div className="row">
                          {
                               users.map((item,key)=>{
                                   return(
                                       <div className="col-md-4  mt-2  mb-2" key={key}>
                                           <div className="card w-75 mx-auto shadow-lg p-3 ">
                                           <div className="card-header bg-dark">
                                                 <h5 className="text-center text-light"> UserName : {item.name}</h5>
                                           </div>
                                           <div className="card-body">
                                          <ul className="list-group ">
                                              <li className="list-group-item">
                                                  <strong className="float-start">Email</strong>
                                                  <span className="float-end">{item.email}</span>
                                              </li>
                                              <li className="list-group-item">
                                                  <strong className="float-start">Mobile</strong>
                                                  <span className="float-end">{item.mobile}</span>
                                              </li>
                                              <li className="list-group-item">
                                                  <strong className="float-start">Address</strong>
                                                  <span className="float-end">{item.address}</span>
                                              </li>
                                          </ul>
                                               
                                                   
                                           </div>
                                           <div className="footer">
                                                <Link to={`/update/${item.id}`} className="btn btn-outline-info w-100">Update</Link>
                                                <button className="btn btn-outline-danger w-100 mt-2" onClick={()=>delHandler(item.id)} >Delete</button>
                                           </div>
                                           </div>
                                        
                                       </div>
                                   )
                               })
                           }
                          </div>
                        </div>
                    )
                }
            </div>
     
    )
}
