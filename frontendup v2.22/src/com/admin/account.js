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
const [email, setemail] = useState('')
const [rank, setrank] = useState('')
//change Password
const [onprogr, setonprogr] = useState(0)
const [tbc, settbc] = useState('Change password')
const [oldpass, setoldpass] = useState('')
const [newpass, setnewpass] = useState('')
const [renewpass, setrenewpass] = useState('')
const [btext, setbtext] = useState('')
useEffect(()=>{
  axios.post(window.$api + 'adminaccount',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
    if(Response.data.status == 0){
      cookies.remove("userToken")
      navigate('/admin/login', { replace: true })
    }else{
      console.log(Response.data)
      setusername(Response.data[0].user)
      setemail(Response.data[0].email)
      setrank(Response.data[0].rank)
    }
  })
},[tab])
const changepass = ()=>{
  if(onprogr == 0){
  if(newpass.length < 6 || renewpass.length < 6 || oldpass.length < 6){
    setbtext('Passwords must be at least 6 characters')
  }else{

    setonprogr(1)
    settbc('Working on it')
    
    axios.post(window.$api + 'changepasswordadmin',{
            userToken: userToken,
      username: localStorage.getItem('username'),
      oldpass: oldpass,
      newpass: newpass,
      renewpass: renewpass,
    }).then((Response)=>{
      setonprogr(0)
      settbc('Change password')
      if(Response.data.status == 0){
        cookies.remove("userToken")
        navigate('/admin/login', { replace: true })
      }else if(Response.data.status == 5){
        setbtext("new pass and repeat pass arn't the same")
      }else if(Response.data.status == 4){
        setbtext('new pass must be at least 6 characters')
      }else if(Response.data.status == 3){
        setbtext('Wrong password')
      }else if(Response.data.status == 1){
        setbtext('Changed successfully')
      }else if(Response.data.status == 22){
        navigate('/admin/dashboard/noperm', { replace: false })
      
      }
    })
  }
}else{
  settbc('Waittt')
}
}
const navigate = useNavigate();

if(tab == 'project'){



    return(
        <div className='bg-black'>
        {/* sm: md: lg: xl: */}

        <div id='d99' className="text-gray-900">
<div id='d99' className="bg-black h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Account<span onClick={()=>{
 
if(bar == 'hidden'){
 setbar('')
 }else{
  setbar('hidden')
 }
  
  
  }}>
<i  className="fa-solid fa-bars float-right pr-3 pt-1"></i>

</span></div>
<div>
  <span className="float-right mt-1 mr-3 text-blue-500">Save</span>
</div>
<div>
{/* 
store icon check
store name check
curncy
catargy
*/}

<div className='grid place-items-center mt-8'>

<div className="p-10 card bg-black">
  <div className='hero'>
  <img className='rounded-full w-52 h-52 ' src='https://skyex.me/%E2%80%94Pngtree%E2%80%94cat%20default%20avatar_5416936.png'/>
  
  </div>
  <div className='hero -mt-4 text-xl'>
{rank}
</div>




  <div className="form-control mt-3">
    <label className="label">
      <span className="label-text">Username</span>
    </label> 
    <input type="text" value={username} onChange={(r)=>{setusername(r.target.value)}} placeholder="username" className="input bg-base-300" />
  </div>
  <div className="form-control mt-3">
    <label className="label">
      <span className="label-text">Email</span>
    </label> 
    <input value={email} onChange={(r)=>{setemail(r.target.value)}} type='email' placeholder="email" className="input bg-base-300" />
  </div>
</div>




<button className='border p-3 rounded-xl border-red-800' onClick={()=>{settab('password')}}>Change password</button>
</div>
</div>
        </div>

        </div>
    )}else if(tab == 'loading'){
		return(
			<div id='d2' className="grid place-items-center w-screen">
			<Loading ></Loading>
			</div>
		)
	}else if(tab == 'password'){
    return(
      <div className="bg-black">
      {/* sm: md: lg: xl: */}

      <div id='d99' className="text-gray-900">
<div id='c3' className="bg-gray-900  h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Account<i onClick={()=>{

if(bar == 'hidden'){
setbar('')
}else{
setbar('hidden')
}


}} className="fas fa-bars float-right pr-3 pt-1"></i></div>
<div onClick={()=>{settab('project')}}>
<i className="fas fa-arrow-left ml-4 text-xl" ></i>
</div>
<div>
{/* 
store icon check
store name check
curncy
catargy
*/}

<div className='grid place-items-center mt-8'>
<div className='mt-6'>
<div className='grid mb-3'>
<label className='ml-1 mb-2'>old password:</label>
<input autocomplete="off" value={oldpass} onChange={(r)=>{setoldpass(r.target.value.replace(/\s/g, ''))}} type='text' className="bg-black rounded-xl h-7 p-2 border border-indigo-600"/>
</div>
<div className='grid mb-3'>
<label className='ml-1 mb-2'>new password:</label>
<input autocomplete="off" value={newpass} onChange={(r)=>{setnewpass(r.target.value.split(' ').join(''))}} type='email' className="bg-black rounded-xl h-7 p-2 border border-indigo-600"/>
</div>
<div className='grid mb-3'>
<label className='ml-1 mb-2'>repeat password:</label>
<input autocomplete="off" value={renewpass} onChange={(r)=>{setrenewpass(r.target.value.split(' ').join(''))}} type='email' className="bg-black rounded-xl h-7 p-2 border border-indigo-600"/>
</div>
<div className='grid mb-3 place-items-center'>
<button className='border p-3 rounded-xl border-red-800' onClick={changepass}>{tbc}</button>
</div>
{/* <div className='grid mb-3'>
<label className='ml-3 mb-1'>Password:</label>
<input value={password} onChange={(e)=>{setpassword(e.target.value)}} type='password' className="bg-black rounded-xl h-7 p-2  border border-indigo-600"/>
</div> */}


</div>
<center>
<div className='flex items-center pl-4 border-red-800 border-red border-l text-center'>
  <span>{btext}</span>
</div>
</center>
</div>
</div>
      </div>

      </div>
    )
  }
}
export default Account

