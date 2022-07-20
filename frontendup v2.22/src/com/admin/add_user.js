import {Link} from 'react-router-dom'
import axios from 'axios'
import { React,useEffect,useState } from "react"
import Loading from '../loading'
import { useNavigate } from 'react-router-dom'

import Cookies from 'universal-cookie'
const cookies = new Cookies();
const Add_user = ({setbar, bar,setTabo})=>{ 
const [tab, settab] = useState('project')
const userToken = cookies.get('userToken')
//inputs
const [ranks, setranks] = useState([])
const [username, setusername] = useState('')
const [name, setname] = useState('')
const [rank, setrank] = useState('')
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [alart, setalart] = useState('');
const [prog, setprog] = useState(0);
useEffect(()=>{
  axios.post(window.$api + 'getusersranktoadd',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
    if(Response.data.status == 0){
      cookies.remove("userToken")
      navigate('/admin/login', { replace: true })
    }else if(Response.data.status == 22){
      navigate('/admin/dashboard/noperm', { replace: false })
    
    }else{
        setranks(Response.data)
    }   
  })
},[])
const handlesubmit = ()=>{
if(prog == 0){
  setprog(1)
  if(username.length < 2){
    // username
  setprog(0)
    setalart('username must be at least 3 characters')
  }else if(name.length < 2 ){
    // name length
  setprog(0)
    setalart('name must be at least 3 characters')
  }else if(rank.length < 1){
    // rank
  setprog(0)
    setalart('Select a rank')
  }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false){
    // email
  setprog(0)
    setalart('Wrong email')
  }else if(password.length < 7){
    // password
  setprog(0)
    setalart('Password must be at least 8 characters')
  }else{
    // send the request
    axios.post(window.$api + 'addusers',{      userToken: userToken,
      username: localStorage.getItem('username'),user:username,name:name,rank:rank,email:email,password:password}).then((Response)=>{
      console.log(Response)
  setprog(0)
      if(Response.data.status == 0){
        cookies.remove("userToken")
        navigate('/admin/login', { replace: true })
      }else if(Response.data.status == 22){
// no permissions
navigate('/admin/dashboard/noperm', { replace: false })

      }else if(Response.data.status == 404){
// forgot something
setalart('You fonrgot something')

      }else if(Response.data.status == 501){
// internal error
setalart('Try again if this error still exists please contact support')

      }else if(Response.data.status == 201){
setalart('an account with this user already exist')
// already exist
      }else if(Response.data.status == 200){
// done
// navigate('/admin/login', { replace: true })
// settab('')
      }
    })
  }}else{

  }

}
const navigate = useNavigate();

if(tab == 'project'){



    return(
        <>
        {/* sm: md: lg: xl: */}

        <div id='d99' className="text-gray-900">
<div id='c3' className="bg-gray-900  h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Add Users<span onClick={()=>{
 
if(bar == 'hidden'){
 setbar('')
 }else{
  setbar('hidden')
 }
  
  
  }}>
<i  className="fa-solid fa-bars float-right pr-3 pt-1"></i>

</span></div>
    <div className='m-4 text-2xl'>
      <i onClick={()=>{setTabo('Users')}} className="fas fa-arrow-left"></i>
    </div>
<div className='grid  place-items-center'>
  
<div className="p-10 card bg-base-300">

  <div className="form-control">
    <label className="label">
      <span className="label-text">Username</span>
    </label> 
    <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder="username" className="input bg-base-200" />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Name</span>
    </label> 
    <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}placeholder="Name" className="input bg-base-200" />
  </div>
  {/* rank */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Rank</span>
    </label> 
    <select onChange={(e)=>{setrank(e.target.value)}} className="select select-bordered w-full bg-base-200 max-w-xs">
  <option disabled="disabled" selected="selected">Choose user superpower</option> 
  {ranks.map((git)=>{
      return(
        <option>{git.name}</option> 
      )
  })}

</select>

  </div>
  <div className="form-control">

    <label className="label">
      <span className="label-text">Email</span>
    </label> 
    <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder="Example@domain.com" className="input bg-base-200" />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Password</span>
    </label> 
    <input value={password} onChange={(e)=>{setpassword(e.target.value)}}type="text" placeholder="Password" className="input bg-base-200" />
  </div>
  <div className="grid place-items-center mt-4">
    {prog == 0 && (
  <button className="btn btn-active" role="button" aria-pressed="true" onClick={handlesubmit}>Add user</button> 

    )}
        {prog == 1 && (
  <button className="btn loading" role="button" aria-pressed="true" onClick={handlesubmit}>loading</button> 

    )}
  </div>

</div>

{alart.length > 0 && (

<div class="alert alert-info mt-6">
  <div class="flex-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
    </svg> 
    <label>{alart}</label>
  </div>
</div>

  )}
</div>
        </div>

        </>
    )}else if(tab == 'loading'){
		return(
			<Loading ></Loading>

		)
	}
}
export default Add_user

