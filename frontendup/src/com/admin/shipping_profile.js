import {Link} from 'react-router-dom'
import axios from 'axios'
import { React,useEffect,useState } from "react"
import Loading from '../loading'
import { useNavigate } from 'react-router-dom'

import Cookies from 'universal-cookie'
const cookies = new Cookies();
const ShippingProfile = ({setbar, bar,setTabo,setshippingto})=>{ 



const [alart, setalart] = useState('')
const [tab, settab] = useState('app')
const [profiles, setprofiles] = useState([])
const userToken = cookies.get('userToken')
const [prog, setprog] = useState(0)
const [name, setname] = useState('')
const [idtochange, setidtochange] = useState(0)
const [progforchange, setprogforchange] = useState(0)
const [deletex, setdeletex] = useState(0)

//inputs
const [namee, setnamee] = useState('')
const [worlswide, setworlswide] = useState(0)
const [worldwideprice, setworldwideprice] = useState(0)
useEffect(()=>{
  axios.post(window.$api + 'getshippingprofileforadmins',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
    if(Response.data.status == 0){
      cookies.remove("userToken")
      navigate('/admin/login', { replace: true })
    }else if(Response.data.status == 22){
// no perm
navigate('/admin/dashboard/noperm', { replace: false })

console.log('no perm')
    }else{
      // console.log(Response.data)
      setprofiles(Response.data)
    }
  })
},[tab,alart])
const handle_save = ()=>{
  if(progforchange == 0){
    setprogforchange(1)
    if(idtochange == 0){
      setprogforchange(0)
    }else{
      axios.post(window.$api + 'editprofilen',{      userToken: userToken,
      username: localStorage.getItem('username'),name:namee,id:idtochange,worlswide:worlswide,price:worldwideprice}).then((Response)=>{
        setprogforchange(0)
        if(Response.data.status == 0){
          cookies.remove("userToken")
          navigate('/admin/login', { replace: true })
        }else if(Response.data.status == 22){
    // no perm
    navigate('/admin/dashboard/noperm', { replace: false })

        }else{
          console.log(Response.data)
        }
      })


  
    }
  }

}
const handlesubmit = ()=>{
//   addshippingprofile
if(prog == 0){
    setprog(1)
    axios.post(window.$api + 'addshippingprofile',{      userToken: userToken,
      username: localStorage.getItem('username'),name:name,worlswide:worlswide,price:worldwideprice}).then((Response)=>{
        setprog(0)
    if(Response.data.status == 0){
      cookies.remove("userToken")
      navigate('/admin/login', { replace: true })
    }else if(Response.data.status == 22){
// no perm
navigate('/admin/dashboard/noperm', { replace: false })

    }else if(Response.data.status ==1){
      setalart(name+ ' has been added')
    }else if(Response.data.status == 501){
        setalart('You forgot something')
    }
  })
}else{

}

}
const navigate = useNavigate();

if(tab == 'app'){



    return(
        <div className="bg-black">
          <div>

        {/* sm: md: lg: xl: */}

        <div id='d99' className="text-gray-900">
<div id='c3' className="bg-gray-900  h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Shipping Profiles<span onClick={()=>{
 
if(bar == 'hidden'){
 setbar('')
 }else{
  setbar('hidden')
 }
  
  
  }}>
<i  className="fa-solid fa-bars float-right pr-3 pt-1"></i>

</span></div>

<div className="overflow-x-auto sm:m-4 md:m-7">
<button className="btn btn-active mb-3 float-right" role="button" aria-pressed="true" onClick={()=>{settab('add_profile')}}>Add Profile</button> 

<table className="table w-full">
  <thead>
    <tr>
      <th>Id</th> 
      <th>Name</th>
      <th >Edit</th>
    </tr>
  </thead> 
  <tbody>
      {profiles.map((g,i)=>{
          return (
            <tr key={g.id} className="hover">
        
            <th>{g.id}</th> 
    <th>{g.name}</th>
                <th className='text-blue-500' onClick={()=>{
                    setshippingto(g.id)
                    setidtochange(g.id)
                    setnamee(g.name)
                    setworldwideprice(g.worldwide_price)
                    setworlswide(g.worldwide)
                    settab('edit_profile')
                    }}>Edit</th>
    
    </tr>
    
          )
      })}

   
  </tbody>
</table>
</div>

        </div>
          </div>

        </div>
    )}else if(tab == 'loading'){
		return(
			<div id='d99' className="grid place-items-center w-screen">
        <div className="snippet" data-title=".dot-pulse">
          <div className="stage">
            <div className="dot-pulse"></div>
          </div>
        </div>
			</div>
		)
	}else if(tab == 'edit_profile'){
		return(
            <div id='d99' className="text-gray-900">
            <div id='c3' className="bg-gray-900  h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Edit Profile<i onClick={()=>{
             
             if(bar == 'hidden'){
             setbar('')
             }else{
              setbar('hidden')
             }
              
              
              }} className="fas fa-bars float-right pr-3 pt-1"></i></div>
                <div onClick={()=>{
settab('app')
                      }} className='m-4 text-2xl'>
                  <i  className="fas fa-arrow-left"></i>
                </div>
            <div className='grid place-items-center'>
              
            <div className="p-10 card bg-base-300">
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label> 
                <input type="text" value={namee} onChange={(e)=>{setnamee(e.target.value)}}placeholder="Name" className="input bg-base-200" />
              </div>
              {/* rank */}
              {worlswide == 1 && (
                <div className="form-control">
                <label className="label">
                  <span className="label-text">WorldWide Price</span>
                </label> 
                <input type="text" value={worldwideprice} onChange={(e)=>{setworldwideprice(e.target.value.replace(/[A-z]/g, ''))}}placeholder="Price" className="input text-center bg-base-200" />
              </div>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Worldwide</span>
                </label> 
                {worlswide == 0 && (
                <button className="btn btn-outline" role="button" aria-pressed="true" onClick={()=>{setworlswide(1)}}>False</button> 

                )}
                 {worlswide == 1 && (
                <button className="btn btn-outline btn-accent" role="button" aria-pressed="true" onClick={()=>{setworlswide(0)}}>True</button> 

                )}
              </div>

   
              {/* deleteprofile */}
              <div className="grid place-items-center mt-4">
                  {progforchange == 1 && (
              <button className="btn btn-active loading" role="button" aria-pressed="true" >Loading</button> 
                      
                  )}
              {progforchange == 0 && (
              <button className="btn btn-active" role="button" aria-pressed="true" onClick={handle_save}>Edit Profile</button> 
              )}
                            <button className="btn btn-active mt-4" role="button" aria-pressed="true" onClick={()=>{
setTabo('Shipping')
navigate('/admin/dashboard/Shipping', { replace: true })
                            }}>Edit Regions</button> 
                                     {deletex == 0 && (
  <button className="btn btn-active bg-red-700 border-red-700 mt-4 hover:border-red-800 hover:bg-red-800" role="button" aria-pressed="true" onClick={()=>{setdeletex(1)}}>DELETE</button> 
            )}
            {deletex == 1 && (
                <button className="btn btn-active  bg-red-700 border-red-700 mt-4 hover:border-red-800 hover:bg-red-800" role="button" aria-pressed="true" onClick={()=>{
                  axios.post(window.$api + 'deleteprofile',{      userToken: userToken,
      username: localStorage.getItem('username'),id:idtochange}).then((Response)=>{
                    if(Response.data.status == 0){
                      cookies.remove("userToken")
                      navigate('/admin/login', { replace: true })
                    }else if(Response.data.status == 22){
    navigate('/admin/dashboard/noperm', { replace: false })
                    }else if(Response.data.status == 1){
                      setdeletex(0)
                      settab('app')
                    }
                  })
                }}>CONFIRM</button> 
            )}

              </div>

            </div>
            {alart.length > 0 && (

<div className="alert mt-8">
<div className="flex-1">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 mx-2">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
  </svg> 
  <label>{alart}</label>
</div>
</div>

            )}
      
            
            
            </div>
            
                    </div>
		)
	}else if(tab == 'add_profile'){
		return(
            <div id='d99' className="text-gray-900">
            <div id='c3' className="bg-gray-900  h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Add Profile<i onClick={()=>{
             
             if(bar == 'hidden'){
             setbar('')
             }else{
              setbar('hidden')
             }
              
              
              }} className="fas fa-bars float-right pr-3 pt-1"></i></div>
                <div onClick={()=>{
settab('app')
                      }} className='m-4 text-2xl'>
                  <i  className="fas fa-arrow-left"></i>
                </div>
            <div className='grid place-items-center'>
              
            <div className="p-10 card bg-base-300">
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label> 
                <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}placeholder="Name" className="input bg-base-200" />
              </div>
              {worlswide == 1 && (
                <div className="form-control">
                <label className="label">
                  <span className="label-text">WorldWide Price</span>
                </label> 
                <input type="text" value={worldwideprice} onChange={(e)=>{setworldwideprice(e.target.value.replace(/[A-z]/g, ''))}}placeholder="Price" className="input text-center bg-base-200" />
              </div>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Worldwide</span>
                </label> 
                {worlswide == 0 && (
                <button className="btn btn-outline" role="button" aria-pressed="true" onClick={()=>{setworlswide(1)}}>False</button> 

                )}
                 {worlswide == 1 && (
                <button className="btn btn-outline btn-accent" role="button" aria-pressed="true" onClick={()=>{setworlswide(0)}}>True</button> 

                )}
              </div>
 
              {/* rank */}

            {/* worlswide */}
            
            
              
              <div className="grid place-items-center mt-4">
                  {prog == 1 && (
              <button className="btn btn-active loading" role="button" aria-pressed="true" >Loading</button> 
                      
                  )}
              {prog == 0 && (
              <button className="btn btn-active" role="button" aria-pressed="true" onClick={handlesubmit}>Add Profile</button> 
              )}
              </div>
              
            </div>
            {alart.length > 0 && (

<div className="alert mt-8">
<div className="flex-1">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 mx-2">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
  </svg> 
  <label>{alart}</label>
</div>
</div>

            )}
      
            
            
            </div>
            
                    </div>
		)
	}
}
export default ShippingProfile

// 