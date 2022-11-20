import axios from 'axios'
import { React,useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
const Account = ({tabname,av})=>{
    const [logo, setlogo] = useState(av)
    const cookies = new Cookies();
      const [tab, settab] = useState('loading')
      const userToken = cookies.get('userToken')
      //inputs
      const [username, setusername] = useState('')
      const [password, setpassword] = useState('')
      const [email, setemail] = useState('') 
      const [rank, setrank] = useState('')
      const [name, setname] = useState('')
      //change Password
      const [onprogr, setonprogr] = useState(0)
      const [tbc, settbc] = useState('Change password')
      const [oldpass, setoldpass] = useState('')
      const [newpass, setnewpass] = useState('')
      const [renewpass, setrenewpass] = useState('')
      const [btext, setbtext] = useState('')
      const [newalart,setnewalart] = useState([])
      const [first, setfirst] = useState('')
      const changeaccount = ()=>{
        axios.post(window.$api + 'editaccount',{name:name,email:email,user:username,password:password,userToken:userToken,username: localStorage.getItem('username')}).then((Response)=>{
          if(Response.data.status == 200){
            // all right
            setnewalart([...newalart,{id:Math.floor(Math.random() * 900) ,name:"Your Account has been updated successfully",type:"ok"}])

          }else{
            setnewalart([...newalart,{id:Math.floor(Math.random() * 900) ,name:"Something went wrong please try again later",type:"error"}])
          }
        }).catch((Error)=>{
          console.error(Error);
          setnewalart([...newalart,{id:Math.floor(Math.random() * 900) ,name:"Something went wrong please try again later",type:"error"}])

        })
      }
      useEffect(()=>{
        axios.post(window.$api + '/adminaccount',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
          if(Response.data.status == 0){
            cookies.remove("userToken")
            navigate('/admin/login', { replace: true })
          }else{
            setusername(Response.data[0].user)
            setemail(Response.data[0].email)
            setrank(Response.data[0].rank)
            setfirst(Response.data[0].av)
            setname(Response.data[0].name)
            settab('project')
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
      
<div className="grid place-items-center  w-[100%]">
    <div className="float-left text-left  w-[100%]">
    <div className="p-4 pt-[1.1rem] mb-8 text-white roboto float-left text-left font-[400] h-[40rem] text-2xl">

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
    <div className="text-white sm:-mt-[400rem]    w-[100%] md:-mt-[42rem]">
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
  <span onClick={changeaccount} className="float-right mt-2 mr-6  cursor-pointer b text-blue-500"><a>Save</a></span>
</div>
<div>
<div className='grid place-items-center '>

<div className="">
  <div className=''>
  <img className='rounded-full w-52 h-52 ' src={first}/>
  
  </div>
  <div className='text-center -mt-4 -ml-2 text-xl'>
{rank}
</div>



<div className="form-control mt-3">
    <label className="label">
      <span className="label-text">Name</span>
    </label> 
    <input type="text" value={name} onChange={(r)=>{setname(r.target.value)}} placeholder="username" className="input b bg-base-300" />
  </div>
  <div className="form-control mt-3">
    <label className="label">
      <span className="label-text">Username</span>
    </label> 
    <input type="text" value={username} onChange={(r)=>{setusername(r.target.value)}} placeholder="username" className="input b bg-base-300" />
  </div>
  <div className="form-control mt-3">
    <label className="label">
      <span className="label-text">Email</span>
    </label> 
    <input value={email} onChange={(r)=>{setemail(r.target.value)}} type='email' placeholder="email" className="input b bg-base-300" />
  </div>
</div>




<button className='border p-3 mt-6 rounded-xl border-red-800' onClick={()=>{settab('password')}}>Change password</button>
</div>
</div>
        </div>
</div>)}else if(tab == 'loading'){
return(
  <>
        
<div className="grid place-items-center  w-[100%] static">
    <div className="float-left text-left mt-0  w-[100%] sm:h-96 md:h-[40rem]">
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
    <div className="text-white sm:-mt-24  sm:-ml-10 md:ml-0    w-[100%] md:-mt-[40rem]">

<div>
<div className='grid place-items-center static h-52 sm:-mt-[10rem] '>
<div className="snippet static" data-title=".dot-pulse">
          <div className="stage">
            <div className="dot-pulse"></div>
          </div>
        </div>
</div>
</div>
        </div>
</div>
  </>
)
}else if(tab == 'password'){
  return(
    <>
    <div className="grid place-items-center w-screen">
    <div className="flex">
    <div className="p-4 pt-[1.1rem] mb-8 text-white roboto  font-[400] text-2xl">

    <div className="float-left mr-6 tl mt-[1.1rem]  ml-14 text-left ">
    {tabname}
    </div>
    </div>
    <div className="tr text-white">
    <div className="dropdown dropdown-end ">
  <label tabindex="0" className=""><img alt='avatar' src={logo} className=' h-14 w-14 mt-[0.4rem] mr-3 rounded-full ' /></label>
  <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-300 b mr-6 rounded-box w-52 absolute">
    <li><a>My Account</a></li>
    <li className="text-cyan-600"><a>Support</a></li>
    <li onClick={()=>{              
        cookies.remove("userToken")
        localStorage.removeItem('username');
        navigate('/admin/login', { replace: true })
        }} className="text-red-600"><a>Logout</a></li>
  </ul>
</div>

</div>
    </div>
    <div className="text-white sm:-m-10 md:mt-0">
    <div className='grid place-items-center mt-8'>
<div className='mt-6'>
<div className='grid mb-3'>
<label className='ml-1 mb-2'>old password:</label>
<input autocomplete="off" value={oldpass} onChange={(r)=>{setoldpass(r.target.value.replace(/\s/g, ''))}} type='text' className="input bg-base-300 "/>
</div>
<div className='grid mb-3'>
<label className='ml-1 mb-2'>new password:</label>
<input autocomplete="off" value={newpass} onChange={(r)=>{setnewpass(r.target.value.split(' ').join(''))}} type='email' className="input bg-base-300 "/>
</div>
<div className='grid mb-3'>
<label className='ml-1 mb-2'>repeat password:</label>
<input autocomplete="off" value={renewpass} onChange={(r)=>{setrenewpass(r.target.value.split(' ').join(''))}} type='email' className="input bg-base-300 "/>
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
        </div></>
  )
}
}
export default Account;