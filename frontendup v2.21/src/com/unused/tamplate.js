import {Link} from 'react-router-dom'
import axios from 'axios'
import { React,useEffect,useState } from "react"
import Loading from '../loading'
import { useNavigate } from 'react-router-dom'

import Cookies from 'universal-cookie'
const cookies = new Cookies();
const Account = ({setbar, bar,setTabo})=>{ 
const [tab, settab] = useState('project')
const userToken = cookies.get('userToken')
//inputs
const [username, setusername] = useState('')
const [password, setpassword] = useState('')
useEffect(()=>{
  axios.post(window.$api + 'to',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
    if(Response.data.status == 0){
      cookies.remove("userToken")
      navigate('/admin/login', { replace: true })
    }else if(Response.data.status == 22){
// no perm
    }else{
      
    }
  })
},[])
const handlesubmit = ()=>{
  
}
const navigate = useNavigate();

if(tab == 'project'){



    return(
        <>
        {/* sm: md: lg: xl: */}

        <div id='d99' className="text-gray-900">
<div id='c3' className="bg-gray-900  h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Account<span onClick={()=>{
 
if(bar == 'hidden'){
 setbar('')
 }else{
  setbar('hidden')
 }
  
  
  }}>
<i  className="fa-solid fa-bars float-right pr-3 pt-1"></i>

</span></div>

<div>
{/* 
store icon check
store name check
curncy
catargy
*/}

<div className='grid place-items-center mt-5'>
<img className='rounded-full w-24 h-24 ' src='/logo512.png'/>
<span className='text-blue-600'>Change logo</span>

<div className='mt-6'>
<div className='grid'>
  <label className='ml-3 mb-1'>Username:</label>
  <input type='text' className="bg-black rounded-xl h-7 p-2 border border-indigo-600"/>
</div>
<div className='grid'>
  <label className='ml-3 mb-1'>password:</label>
  <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type='password' className="bg-black rounded-xl h-7 p-2  border border-indigo-600"/>
</div>
</div>
</div>
</div>
        </div>

        </>
    )}else if(tab == 'loading'){
		return(
			<div id='d2' className="grid place-items-center w-screen">
			<Loading ></Loading>
			</div>
		)
	}
}
export default Account

