import axios from 'axios'
import { React,useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom'
import Loading from './loading'
import Cookies from 'universal-cookie'
const Users = ({tabname,av})=>{
    const [logo, setlogo] = useState(av)
    const cookies = new Cookies();
      const [tab, settab] = useState('loading')
      const userToken = cookies.get('userToken')
      const [newalart,setnewalart] = useState([])
      const [users, setusers] = useState([]);
      const navigate = useNavigate();
      useEffect(()=>{
        axios.post(window.$api + '/getusers',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
          settab('app')
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
      if(tab == 'app'){
    return(
      
<div className="grid place-items-center  w-[100%]">
    <div className="float-left text-left mt-0  w-[100%] h-[40rem]">
    <div className="pl-4 pt-[1.1rem] mb-8 text-white roboto float-left text-left font-[400] text-2xl">

    <div className="float-left  text-left ">
    {tabname}
    </div>
    </div>
    <div className="float-right text-white">
    <div className="dropdown dropdown-end ">
  <label tabindex="0" className=""><img alt='avatar' src={logo} className=' h-14 w-14 mt-[0.4rem] mr-3 rounded-full ' /></label>
  <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-300 b mr-6 rounded-box w-52 absolute">
    <li onClick={()=>{
              navigate('/admin/dashboard/Account', { replace: false })
    }}><a>My Account</a></li>
    <li onClick={()=>{
              navigate('/admin/dashboard/Account', { replace: false })
    }} className="text-cyan-600"><a>Support</a></li>
    <li onClick={()=>{              
        cookies.remove("userToken")
        localStorage.removeItem('username');
        navigate('/admin/login', { replace: true })
        }} className="text-red-600"><a>Logout</a></li>
  </ul>
</div>

</div>
    </div>
    <div className="text-white  sm:w-screen sm:-ml-12 sm:-mt-[45rem]  md:-ml-0 h-96   md:w-[98%] md:-mt-[48rem]">
    {newalart.map((gf,i)=>{
  setTimeout(() => {
    // setnewalart()
    setnewalart((products) => products.filter((d, index) => d.id !== gf.id));
  }, 2000);
  if(gf.type === 'ok'){
  return(
    <div className="alert tr  alert-success shadow-lg max-w-xs mt-16 float-right proalt rounded-r-none text-left">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>    <span className='min-w-[15rem] '>{gf.name}</span>
      
    </div>
  </div>
  )}else if(gf.type === 'error'){
    return(
      <div className="alert tr  alert-warning shadow-lg max-w-xs mt-16 float-right proalt rounded-r-none text-left">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      <span className='min-w-[15rem] '>{gf.name}</span>
        
      </div>
    </div>
    )
  }
})}

<div>
<div className='grid place-items-center'>



<div id='' className="w-[100%]">


<div className='grid'>

<div className='flex-0'>
<button className="btn text-white float-right m-3" onClick={()=>{ navigate('/admin/dashboard/Add_user', { replace: false })}}>
  <div  className="inline-block w-6 h-6 mr-2 stroke-current">   
  <i id='mme' className="fas mt-1 fa-plus"></i>                 
  </div>
      Add User
    
</button> 
</div>
<div className="overflow-x-auto m-4">

  <table id='table' className=" w-full">
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

</div>
</div>
        </div>
</div>)}else if(tab == 'loading'){
return(
  <>
<Loading t={'Users'} logo={logo}/>
  </>
)
}else if(tab == 'password'){
  return(
    <>
</>
  )
}
}
export default Users;