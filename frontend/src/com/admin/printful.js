import axios from 'axios'
import { React,useEffect,useState } from "react"
import Loading from '../loading'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
const cookies = new Cookies();
const PrintFul = ({setbar, bar,setTabo})=>{ 
const [tab, settab] = useState('project')
const userToken = cookies.get('userToken')
//inputs
const [username, setusername] = useState('')
const [password, setpassword] = useState('')
useEffect(()=>{
  axios.post(window.$api + 'to',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
      console.log(Response)
    if(Response.data.status == 0){
      cookies.remove("userToken")
      navigate('/admin/login', { replace: true })
    }else if(Response.data.status == 22){
navigate('/admin/dashboard/noperm', { replace: false })
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
<div id='c3' className="bg-gray-900  h-16 w-screen pl-5 text-gray-200 py-5 text-xl">DropShipping<span onClick={()=>{
 
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


</div>
        </div>

        </>
    )}else if(tab == 'loading'){
		return(
            
			<Loading ></Loading>

		)
	}
}
export default PrintFul

