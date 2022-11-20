import {Link} from 'react-router-dom'
import axios from 'axios'
import { React,useEffect,useState } from "react"
import Loading from '../loading'
import { useNavigate } from 'react-router-dom'

import Cookies from 'universal-cookie'
const cookies = new Cookies();
const Users = ({setbar, bar,setTabo})=>{ 
const [tab, settab] = useState('loading')
const userToken = cookies.get('userToken')
//inputs
const [username, setusername] = useState('')
const [users, setusers] = useState([]);

// const [password, setpassword] = useState('')
useEffect(()=>{
  axios.post(window.$api + '/getusers',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
    settab('project')
    if(Response.data.status == 0){
      cookies.remove("userToken")
      navigate('/admin/login', { replace: true })
    }else if(Response.data.status == 22){
// no perm
navigate('/admin/dashboard/noperm', { replace: false })

    }else{
      console.log(Response)
      setusers(Response.data)
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
<div id='c3' className="bg-gray-900  h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Users<span onClick={()=>{
 
if(bar == 'hidden'){
 setbar('')
 }else{
  setbar('hidden')
 }
  
  
  }}>
<i  className="fa-solid fa-bars float-right pr-3 pt-1"></i>

</span></div>

<div className='grid'>

<div className='flex-0'>
<button className="btn float-right m-3" onClick={()=>{setTabo('add_user')}}>
  <div  className="inline-block w-6 h-6 mr-2 stroke-current">   
  <i id='mme' className="fas mt-1 fa-plus"></i>                 
  </div>
      Add User
    
</button> 
</div>
<div className="overflow-x-auto m-4">

  <table className="table w-full">
    <thead>
      <tr>
        <th>Name</th> 
        <th>Rank</th> 
        <th>Edit</th>
      </tr>
    </thead> 
    <tbody>
      {users.map((g,i)=>{
        return (
          <tr className="hover">

          <th>{g.name}</th> 
              <th><div className="badge badge-accent">{g.rank}</div> </th> 
              <th onClick={()=>{}} className='text-blue-500'>Edit</th>
            </tr>
        )
      })}


     
    </tbody>
  </table>
</div>
</div>
        </div>

        </>
    )}else if(tab == 'loading'){
		return(
			<Loading ></Loading>

		)
	}
}
export default Users

