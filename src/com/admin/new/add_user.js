import axios from 'axios'
import { React,useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom'
import Loading from './loading'
import Cookies from 'universal-cookie'
const Add_user = ({tabname,av})=>{
    const [logo, setlogo] = useState(av)
    const cookies = new Cookies();
      const [tab, settab] = useState('loading')
      const userToken = cookies.get('userToken')
      const [newalart,setnewalart] = useState([])
      const navigate = useNavigate();
      const [ranks, setranks] = useState([])
      const [name, setname] = useState('')
      const [rank, setrank] = useState('')
      const [email, setemail] = useState('')
      const [password, setpassword] = useState('')
      const [alart, setalart] = useState('');
      const [prog, setprog] = useState(0);
      const [username, setusername] = useState('')
      useEffect(()=>{
        axios.post(window.$api + 'getusersranktoadd',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
          if(Response.data.status == 0){
            cookies.remove("userToken")
            navigate('/admin/login', { replace: true })
          }else if(Response.data.status == 22){
            navigate('/admin/dashboard/noperm', { replace: false })
          
          }else{
              setranks(Response.data)
              settab('app')
            }   
        })
      },[])
      const handlesubmit = ()=>{
      if(prog == 0){
        setprog(1)
        if(username.length < 2){
          // username
        setprog(0)
          setnewalart([...newalart,{id:Math.floor(Math.random() * 900) ,name:"username must be 3 characters or more",type:"error"}])
        }else if(name.length < 2 ){
          // name length
        setprog(0)
          setnewalart([...newalart,{id:Math.floor(Math.random() * 900) ,name:"Name must be 3 characters or more",type:"error"}])
        }else if(rank.length < 1){
          // rank
        setprog(0)
          setnewalart([...newalart,{id:Math.floor(Math.random() * 900) ,name:"Select a rank",type:"error"}])

        }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false){
          // email
        setprog(0)
          setnewalart([...newalart,{id:Math.floor(Math.random() * 900) ,name:"PLease enter a vaild email",type:"error"}])
        }else if(password.length < 7){
          // password
        setprog(0)
          setnewalart([...newalart,{id:Math.floor(Math.random() * 900) ,name:"Password must be 8 characters or more",type:"error"}])
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
      setnewalart([...newalart,{id:Math.floor(Math.random() * 900) ,name:"Pleaqse fill all of the requierd informations",type:"error"}])
            }else if(Response.data.status == 501){
      // internal error
      setnewalart([...newalart,{id:Math.floor(Math.random() * 900) ,name:"501 Internal server error",type:"error"}])
            }else if(Response.data.status == 201){
      // already exists
      setnewalart([...newalart,{id:Math.floor(Math.random() * 900) ,name:"An account with this username already exist",type:"error"}])
            }else if(Response.data.status == 200){
      // done
      setnewalart([...newalart,{id:Math.floor(Math.random() * 900) ,name:"use has been added successfully",type:"ok"}])

      // navigate('/admin/login', { replace: true })
      // settab('')
            }
          })
        }}else{
      
        }
      
      }
      if(tab == 'app'){
    return(
      
<div className="grid place-items-center  w-[100%]">
    <div className="float-left text-left mt-0  w-[100%] h-[40rem]">
    <div className="pl-4 pt-[1.1rem] mb-8 text-white roboto float-left text-left font-[400] text-2xl">

    <div className="float-left  text-left ">
    Add users
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

    <div className='m-4 ml-6 md:-mt-0 sm:-mt-3 text-2xl'>
      <i onClick={()=>{navigate('/admin/dashboard/Users',{replace:false})}} className="fas fa-arrow-left"></i>
    </div>
<div className='grid  place-items-center'>
  
<div id='' className="p-10 rounded-2xl bg-base-300">

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
  <button className="btn btn-active text-white"  aria-pressed="true" onClick={handlesubmit}>Add user</button> 

    )}
        {prog == 1 && (
  <button className="btn loading text-white"  aria-pressed="true" onClick={handlesubmit}>loading</button> 

    )}
  </div>

</div>


</div>
        </div>


</div>
</div>
        </div>
</div>)}else if(tab == 'loading'){
return(
  <>
<Loading t={'Add user'} logo={logo}/>
  </>
)
}else if(tab == 'password'){
  return(
    <>
</>
  )
}
}
export default Add_user;