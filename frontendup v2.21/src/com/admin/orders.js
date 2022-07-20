import {Link} from 'react-router-dom'
import axios from 'axios'
import { React,useEffect,useState } from "react"
import Loading from '../loading'
import { useNavigate } from 'react-router-dom'

import Cookies from 'universal-cookie'
const cookies = new Cookies();
const Orders = ({setbar, bar,setTabo})=>{ 
const [tab, settab] = useState('project')
const userToken = cookies.get('userToken')
//inputs
const [productlist, setproductlist] = useState([])
const [qfix, setqfix] = useState('')
const [toedit, settoedit] = useState(0)
useEffect(()=>{
  axios.post(window.$api + 'getproducts',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
    if(Response.data.status == 0){
      cookies.remove("userToken")
      navigate('/admin/login', { replace: true })
    }else if(Response.data.status == 22){
      navigate('/admin/dashboard/noperm', { replace: false })
    
    }else{
      setproductlist(Response.data)
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
<div id='c3e' className="bg-black  h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Orders<span onClick={()=>{
 
if(bar == 'hidden'){
 setbar('')
 }else{
  setbar('hidden')
 }
  
  
  }}>
<i  className="fa-solid fa-bars float-right pr-3 pt-1"></i>

</span></div>
     <div className="float-right text-xl mr-32">
  {qfix == 'hidden' && (<><div className='w-full'>Close the menu to show the list again</div> </>)}
  </div>

<div className={"grid " + qfix}>
<div className='flex-0'>
<button className="btn float-right m-3"  onClick={()=>{setTabo('add')}}>
  <div  className="inline-block w-6 h-6 mr-2 stroke-current">   
  <i id='mme' className="fas mt-1 fa-plus"></i>                 
  </div>
      Add Order
    
</button> 
</div>
<div className="overflow-x-auto m-4">

  <table className="table w-full">
    <thead>
      <tr>
        <th>Name</th> 
        <th>Status</th> 
        <th>Price</th>
        <th>Edit</th>
      </tr>
    </thead> 
    <tbody>
{productlist.map((git)=>{
  if( 1 == 1 ){
    return(
      <tr className="hover">

      <th>{git.name}</th> 
          <th><div className="badge badge-accent">Enabled</div> </th> 
          <th className='text-green-400'>{git.price}$</th>
          <th onClick={()=>{settoedit(git.id)}} className='text-blue-500'>Edit</th>
        </tr>
    )
  }else{
return(
  <tr className="hover">
  <th>{git.name}</th> 
    <th><div className="badge badge-secondary bg-red-700 border-red-700">Disabled</div>  </th> 
    <th className='text-green-400'>{git.price}$</th>
    <th onClick={()=>{settoedit(git.id)}} className='text-blue-500'>Edit</th>
  </tr>
)
  }
})}

     
    </tbody>
  </table>
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
export default Orders

