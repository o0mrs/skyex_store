import axios from 'axios'
import { React,useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom'
import Loading from './loading'
import Cookies from 'universal-cookie'
const ShippingProfile = ({tabname,av,setshippingto})=>{
    const [logo, setlogo] = useState(av)
    const cookies = new Cookies();
      const [tab, settab] = useState('loading')
      const userToken = cookies.get('userToken')
      const [newalart,setnewalart] = useState([])
      const [alart, setalart] = useState('')
      const [profiles, setprofiles] = useState([])
      const [name, setname] = useState('')
      const [idtochange, setidtochange] = useState(0)
      const [progforchange, setprogforchange] = useState(0)
      const [deletex, setdeletex] = useState(0)
      //inputs
      const [namee, setnamee] = useState('')
      const [worlswide, setworlswide] = useState(0)
      const [worldwideprice, setworldwideprice] = useState(0)
      const [methods,setmethods] = useState([])
      // inputs for methods
      const [shippingmethodid,setshippingmethodid] = useState(0)
      const [shipingmethodname,setshipingmethodname] = useState('')
      const [marray,setmarray] = useState([])
      const [type,settype] = useState()
      // zone
      const [zonename,setzonename] = useState('')
      const [zoneprofile,setzoneprofile] = useState()
      const [zoneprice,setzoneprice] = useState(0)
      const [icon,seticon] = useState("fa-solid fa-truck-fast")
      const [inid,setinid] = useState(0)
      const [prog, setprog] = useState(0)
      useEffect(()=>{
        if(tab === 'loading'){
          axios.post(window.$api + 'getshippingprofileforadmins',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
            if(Response.data.status === 0){
              cookies.remove("userToken")
              navigate('/admin/login', { replace: true })
            }else if(Response.data.status === 22){
        // no perm
        navigate('/admin/dashboard/noperm', { replace: false })
        
        console.log('no perm')
            }else{
              // console.log(Response.data)
              settab('app')
              setprofiles(Response.data)
            }
          })
        }
      
      },[tab])
      const handle_save = ()=>{
        if(progforchange === 0){
          setprogforchange(1)
          if(idtochange === 0){
            setprogforchange(0)
          }else{
            axios.post(window.$api + 'editprofilen',{      userToken: userToken,
            username: localStorage.getItem('username'),name:namee,id:idtochange,worlswide:worlswide,price:worldwideprice}).then((Response)=>{
              setprogforchange(0)
              if(Response.data.status === 0){
                cookies.remove("userToken")
                navigate('/admin/login', { replace: true })
              }else if(Response.data.status === 22){
          // no perm
          navigate('/admin/dashboard/noperm', { replace: false })
      
              }else{
                setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:name + ' Has been edited',s:1}])
              }
            })
      
      
        
          }
        }
      
      }
      const handle_save_method = ()=>{
        if(progforchange === 0){
          setprogforchange(1)
          if(shippingmethodid === 0){
            setprogforchange(0)
          }else{
            axios.post(window.$api + 'editprofilen',{      userToken: userToken,
            username: localStorage.getItem('username'),name:shipingmethodname,id:shippingmethodid,worlswide:0,price:0}).then((Response)=>{
              setprogforchange(0)
              if(Response.data.status === 0){
                cookies.remove("userToken")
                navigate('/admin/login', { replace: true })
              }else if(Response.data.status === 22){
          // no perm
          navigate('/admin/dashboard/noperm', { replace: false })
      
              }else{
                setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:name + ' has been Edited',s:1}])
                // console.log(Response.data)
              }
            })
      
      
        
          }
        }
      
      }
      useEffect(()=>{
        if(tab === 'loading2'){
          axios.post(window.$api + '/getadminshippingmethods',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
            if(Response.data.status === 0){
              cookies.remove("userToken")
              navigate('/admin/login', { replace: true })
            }else if(Response.data.status === 22){
        // no perm
        navigate('/admin/dashboard/noperm', { replace: false })
        
        console.log('no perm')
            }else{
              // console.log(Response.data)
              setmethods(Response.data)
              settab('shippingmethods')
            }
          })
        }
      },[tab])
      useEffect(()=>{
        if(tab === 'loading3'){
    //   setbar('zone_list')
      
        }
      },[tab])
      const handlesubmit = ()=>{
      //   addshippingprofile
      if(prog === 0){
          setprog(1)
          axios.post(window.$api + 'addshippingprofile',{      userToken: userToken,
            username: localStorage.getItem('username'),name:name,worlswide:worlswide,price:worldwideprice}).then((Response)=>{
              setprog(0)
          if(Response.data.status === 0){
            cookies.remove("userToken")
            navigate('/admin/login', { replace: true })
          }else if(Response.data.status === 22){
      // no perm
      navigate('/admin/dashboard/noperm', { replace: false })
      
          }else if(Response.data.status ===1){
            setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:name + ' has been added',s:1}])
          }else if(Response.data.status === 501){
            setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:'Required fields were not filled.',s:0}])
          }
        })
      }else{
      
      }
      
      }
      const handleaddmethod = ()=>{
        //   addshippingprofile
        if(prog === 0){
            setprog(1)
            axios.post(window.$api + '/addmethod',{      userToken: userToken,
              username: localStorage.getItem('username'),name:name,worlswide:worlswide,price:worldwideprice}).then((Response)=>{
                setprog(0)
            if(Response.data.status === 0){
              cookies.remove("userToken")
              navigate('/admin/login', { replace: true })
            }else if(Response.data.status === 22){
        // no perm
        navigate('/admin/dashboard/noperm', { replace: false })
        
            }else if(Response.data.status ===1){
              setmarray()
              setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:name + ' has been added',s:1}])
            }else if(Response.data.status === 501){
              setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:'Required fields were not filled.',s:0}])
            }
          })
        }else{
        
        }
        
        }
      const navigate = useNavigate();
      const add_zone = (iwstbwmfe)=>{
        if(prog === 0){
          setprog(1)
          axios.post(window.$api + '/addzone',{userToken: userToken,username: localStorage.getItem('username'),zto:shippingmethodid,zarr:JSON.stringify(iwstbwmfe)}).then((Response)=>{
              setprog(0)
          if(Response.data.status === 0){
            cookies.remove("userToken")
            navigate('/admin/login', { replace: true })
          }else if(Response.data.status === 22){
      // no perm
      navigate('/admin/dashboard/noperm', { replace: false })
      
          }else if(Response.data.status ===1){
            setmarray(JSON.stringify(iwstbwmfe))
            setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:zonename + ' has been added',s:1}])
          }else if(Response.data.status === 501){
            setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:'Required fields were not filled.',s:0}])
          }
        })
      }else{
      
      }
      }
      if(tab == 'app'){
    return(
      
<div className="grid place-items-center  w-[100%]">
    <div className="float-left text-left mt-0  w-[100%] h-[40rem]">
    <div className="pl-4 pt-[1.1rem] mb-8 text-white roboto float-left text-left font-[400] text-2xl">

    <div className="float-left  text-left ">
    Shipping profiles
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
<div className='grid place-items-center '>
          <div className='w-[100%]'>
<div className="overflow-x-auto sm:m-4 md:m-7  ">
  
  <div className='sm:grid float-right '>
  
  <button className="btn btn-active mb-3 float-right text-left w-full text-white"   aria-pressed="true" onClick={()=>{settab('add_profile')}}>  

  <div className='w-full text-left'>
  <div  className="inline-block w-6 h-6 mr-2 stroke-current">   
  <i id='mme' className="fas mt-1 text-white fa-plus"></i>                 
  </div>
  Add Profile
    </div>
  </button>
  <button className="btn btn-active mb-3 float-right text-left w-full text-white"   aria-pressed="true" onClick={()=>{settab('loading2')}}>  

<div className='w-full text-left'>
<div  className="inline-block w-6 h-6 mr-2 stroke-current">   
<i id='mme' className=" mt-1 text-white fa-solid fa-pen-to-square "></i>   
           
</div>
Shipping methods
  </div>
</button>
  </div>
<table id='table' className=" w-full">
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
            <tr key={g.id} className="hover cursor-pointer">
        
            <th>{g.id}</th> 
    <th>{g.name}</th>
                <th className='text-blue-500 cursor-pointer' onClick={()=>{
                    console.log('dd')
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

</div>
</div>
)}else if(tab == 'loading'){
return(
  <>
<Loading t='Shipping profiles' logo={logo}/>
  </>
)
}else if(tab == 'loading2'){
    return(
      <>
    <Loading t='Shipping methods' logo={logo}/>
      </>
    )
    }else if(tab == 'loading3'){
        return(
          <>
        <Loading t='Shipping profiles' logo={logo}/>
          </>
        )
        }else if(tab == 'shippingmethods'){
  return(
<div className="grid place-items-center  w-[100%]">
    <div className="float-left text-left mt-0  w-[100%] h-[40rem]">
    <div className="pl-4 pt-[1.1rem] mb-8 text-white roboto float-left text-left font-[400] text-2xl">

    <div className="float-left  text-left ">
Shipping methods
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

    
{/* sm: md: lg: xl: */}

<div id='' className="w-[100%]">

<div className="overflow-x-auto sm:m-4 md:m-7">
<div className=' mb-12  '>

<button className="btn btn-active mb-3  float-right text-left w-50 text-white"   aria-pressed="true" onClick={()=>{settab('add_method')}}>  

<div className=' text-left'>
<div  className="inline-block w-6 h-6 mr-2 stroke-current">   
<i id='mme' className="fas mt-1 text-white fa-plus"></i>                 
</div>
Add a Method
</div>
</button>

<div className='text-left cursor-pointer' onClick={()=>{settab('loading')}}>
<i className="fa-solid text-2xl mt-2 fa-arrow-left-long"></i>
</div>

</div>
<table id='table' className=" w-full">
<thead>
<tr>
<th>Id</th> 
<th>Name</th>
<th >Edit</th>
</tr>
</thead> 
<tbody>
{methods.map((g,i)=>{
  return (
    <tr key={g.id} className="hover">

    <th>{g.id}</th> 
<th>{g.name}</th>
        <th className='text-blue-500 cursor-pointer' onClick={()=>{
setshippingmethodid(g.id)
setshipingmethodname(g.name)
setmarray(g.shippingmethods)
            settab('edit_method')
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
        </div>
</div>
  )
}else if(tab == 'edit_profile'){
    return(
      
<div className="grid place-items-center  w-[100%]">
    <div className="float-left text-left mt-0  w-[100%] h-[40rem]">
    <div className="pl-4 pt-[1.1rem] mb-8 text-white roboto float-left text-left font-[400] text-2xl">

    <div className="float-left  text-left ">
    Edit profile
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

    {newalart.map((gf,i)=>{
  setTimeout(() => {
    // setnewalart()
    setnewalart((products) => products.filter((d, index) => d.id !== gf.id));
    console.log(gf.id)
    console.log((products) => products.filter((d, index) => d.id !== gf.id))
  }, 2000);
  if(gf.s === 0){
    return(
      <div className="alert  alert-warning shadow-lg max-w-xs mt-2 float-right proalt rounded-r-none text-left">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      <span className='min-w-[15rem] '>{gf.name}</span>
        
      </div>
    </div>
    )
  }else{
    return(
      <div className="alert  alert-success shadow-lg max-w-xs mt-2 float-right proalt rounded-r-none text-left">
      <div>
      <i className="fa-solid fa-check"></i>      <span className='min-w-[15rem] '>{gf.name}</span>
        
      </div>
    </div>
    )
  }

})}
                <div onClick={()=>{
settab('app')
                      }} className='m-4 text-2xl'>
                  <i  className="fas fa-arrow-left"></i>
                </div>
            <div className='grid w-[100%] place-items-center'>
              
            <div className="p-10 w-[100%] max-w-[22rem] card bg-base-300">
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label> 
                <input type="text" value={namee} onChange={(e)=>{setnamee(e.target.value)}}placeholder="Name" className="input bg-base-200" />
              </div>
              {/* rank */}
              {worlswide === 1 && (
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
                <button className="btn btn-outline"   aria-pressed="true" onClick={()=>{setworlswide(1)}}>False</button> 

                )}
                 {worlswide == 1 && (
                <button className="btn btn-outline btn-accent"   aria-pressed="true" onClick={()=>{setworlswide(0)}}>True</button> 

                )}
              </div>

   

              <div className="grid place-items-center mt-4 form-control">
                  {progforchange === 1 && (
              <button className="btn btn-active w-full  loading text-white"   aria-pressed="true" >Loading</button> 
                      
                  )}
              {progforchange === 0 && (
              <button className="btn btn-active w-full text-white"   aria-pressed="true" onClick={handle_save}>Save</button> 
              )}
                            <button className="btn  text-white w-full btn-active mt-4"   aria-pressed="true" onClick={()=>{

navigate('/admin/dashboard/Shippings', { replace: false })
                            }}>Edit Regions</button> 
                                     {deletex === 0 && (
  <button className="btn btn-active bg-red-800 text-white w-full border-red-800 mt-4 hover:border-red-900 hover:bg-red-900"   aria-pressed="true" onClick={()=>{setdeletex(1)}}>DELETE</button> 
            )}
            {deletex === 1 && (
                <button className="btn btn-active text-white w-full bg-red-800 border-red-800 mt-4 hover:border-red-900 hover:bg-red-900"   aria-pressed="true" onClick={()=>{
                  axios.post(window.$api + 'deleteprofile',{      userToken: userToken,
      username: localStorage.getItem('username'),id:idtochange}).then((Response)=>{
                    if(Response.data.status === 0){
                      cookies.remove("userToken")
                      navigate('/admin/login', { replace: true })
                    }else if(Response.data.status === 22){
    navigate('/admin/dashboard/noperm', { replace: false })
                    }else if(Response.data.status === 1){
                      setdeletex(0)
                      setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:idtochange + ' Has been deleted'}])
                      settab('loading')
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
  </svg> 
  <label>{alart}</label>
</div>
</div>

            )}
      
            
            
            </div>
            
                    </div>

</div>
</div>
        </div>
</div>)}
else if(tab == 'edit_method'){
    return(
      
<div className="grid place-items-center  w-[100%]">
    <div className="float-left text-left mt-0  w-[100%] h-[40rem]">
    <div className="pl-4 pt-[1.1rem] mb-8 text-white roboto float-left text-left font-[400] text-2xl">

    <div className="float-left  text-left ">
    Edit method
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
<div className='w-[100%]'>
    

                  {newalart.map((gf,i)=>{
  setTimeout(() => {
    // setnewalart()
    setnewalart((products) => products.filter((d, index) => d.id !== gf.id));
  }, 2000);
  if(gf.s === 0){
    return(
      <div className="alert  alert-warning shadow-lg max-w-xs mt-2 float-right proalt rounded-r-none text-left">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      <span className='min-w-[15rem] '>{gf.name}</span>
        
      </div>
    </div>
    )
  }else{
    return(
      <div className="alert  alert-success shadow-lg max-w-xs mt-2 float-right proalt rounded-r-none text-left">
      <div>
      <i className="fa-solid fa-check"></i>      <span className='min-w-[15rem] '>{gf.name}</span>
        
      </div>
    </div>
    )
  }

})}
                <div onClick={()=>{
settab('loading2')
                      }} className='m-4 text-2xl'>
                  <i  className="fas fa-arrow-left"></i>
                </div>
            <div className='grid place-items-center'>
              
            <div className="p-10 w-[100%] max-w-[22rem]  card bg-base-300">
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label> 
                <input type="text" value={shipingmethodname} onChange={(e)=>{setshipingmethodname(e.target.value)}}placeholder="Name" className="input bg-base-200" />
              </div>
              {/* rank */}



   

              <div className="grid place-items-center mt-4">
                  {progforchange === 1 && (
              <button className="btn btn-active w-full loading text-white"   aria-pressed="true" >Loading</button> 
                      
                  )}
              {progforchange === 0 && (
              <button className="btn btn-active w-full text-white"   aria-pressed="true" onClick={handle_save_method}>Save</button> 
              )}
                            <button className="btn text-white w-full btn-active mt-4"   aria-pressed="true" onClick={()=>{
settab('zone_list')

                            }}>Edit Zones</button> 
                                     {deletex === 0 && (
  <button className="btn btn-active bg-red-800 text-white w-full border-red-800 mt-4 hover:border-red-900 hover:bg-red-900"   aria-pressed="true" onClick={()=>{setdeletex(1)}}>DELETE</button> 
            )}
            {deletex === 1 && (
                <button className="btn btn-active text-white w-full bg-red-800 border-red-800 mt-4 hover:border-red-900 hover:bg-red-900"   aria-pressed="true" onClick={()=>{
                  axios.post(window.$api + '/deleteprofile',{      userToken: userToken,
      username: localStorage.getItem('username'),id:shippingmethodid}).then((Response)=>{
                    if(Response.data.status === 0){
                      cookies.remove("userToken")
                      navigate('/admin/login', { replace: true })
                    }else if(Response.data.status === 22){
    navigate('/admin/dashboard/noperm', { replace: false })
                    }else if(Response.data.status === 1){
                      setdeletex(0)
                      setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:idtochange + ' Has been deleted'}])
                      settab('loading2')
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
  </svg> 
  <label>{alart}</label>
</div>
</div>

            )}
      
            
            
            </div>
            
                    </div>
                    </div>

</div>
</div>
</div>)}
else if(tab == 'add_profile'){
    return(
      
<div className="grid place-items-center  w-[100%]">
    <div className="float-left text-left mt-0  w-[100%] h-[40rem]">
    <div className="pl-4 pt-[1.1rem] mb-8 text-white roboto float-left text-left font-[400] text-2xl">

    <div className="float-left  text-left ">
    Add profile
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

<div id='' className=" w-[100%]">

              {newalart.map((gf,i)=>{
  setTimeout(() => {
    // setnewalart()
    setnewalart((products) => products.filter((d, index) => d.id !== gf.id));
  }, 2000);
  if(gf.s === 0){
    return(
      <div className="alert  alert-warning shadow-lg max-w-xs mt-2 float-right proalt rounded-r-none text-left">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      <span className='min-w-[15rem] '>{gf.name}</span>
        
      </div>
    </div>
    )
  }else{
    return(
      <div className="alert  alert-success shadow-lg max-w-xs mt-2 float-right proalt rounded-r-none text-left">
      <div>
      <i className="fa-solid fa-check"></i>      <span className='min-w-[15rem] '>{gf.name}</span>
        
      </div>
    </div>
    )
  }

})}
                <div onClick={()=>{
settab('loading')
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
                <button className="btn btn-outline"   aria-pressed="true" onClick={()=>{setworlswide(1)}}>False</button> 

                )}
                 {worlswide == 1 && (
                <button className="btn btn-outline btn-accent"   aria-pressed="true" onClick={()=>{setworlswide(0)}}>True</button> 

                )}
              </div>
 
              {/* rank */}

            {/* worlswide */}
            
            
              
              <div className="grid place-items-center mt-4">
                  {prog === 1 && (
              <button className="btn btn-active text-white w-full loading"   aria-pressed="true" >Loading</button> 
                      
                  )}
              {prog === 0 && (
              <button className="btn btn-active text-white w-full"   aria-pressed="true" onClick={handlesubmit}>Add Profile</button> 
              )}
              </div>
              
            </div>
            </div>
                    </div>


</div>
</div>
        </div>
</div>)}
else if(tab == 'add_method'){
    return(
      
<div className="grid place-items-center  w-[100%]">
    <div className="float-left text-left mt-0  w-[100%] h-[40rem]">
    <div className="pl-4 pt-[1.1rem] mb-8 text-white roboto float-left text-left font-[400] text-2xl">

    <div className="float-left  text-left ">
    Add Method
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


<div id='' className=" w-[100%]">

              {newalart.map((gf,i)=>{
  setTimeout(() => {
    // setnewalart()
    setnewalart((products) => products.filter((d, index) => d.id !== gf.id));
  }, 2000);
  if(gf.s === 0){
    return(
      <div className="alert  alert-warning shadow-lg max-w-xs mt-2 float-right proalt rounded-r-none text-left">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      <span className='min-w-[15rem] '>{gf.name}</span>
        
      </div>
    </div>
    )
  }else{
    return(
      <div className="alert  alert-success shadow-lg max-w-xs mt-2 float-right proalt rounded-r-none text-left">
      <div>
      <i className="fa-solid fa-check"></i>      <span className='min-w-[15rem] '>{gf.name}</span>
        
      </div>
    </div>
    )
  }

})}
                <div onClick={()=>{
settab('loading2')
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
              {worlswide === 1 && (
                <div className="form-control">
                <label className="label">
                  <span className="label-text">WorldWide Price</span>
                </label> 
                <input type="text" value={worldwideprice} onChange={(e)=>{setworldwideprice(e.target.value.replace(/[A-z]/g, ''))}}placeholder="Price" className="input text-center bg-base-200" />
              </div>
              )}

              {/* rank */}

            {/* worlswide */}
            
            
              
              <div className="grid place-items-center mt-4">
                  {prog === 1 && (
              <button className="btn btn-active text-white loading"   aria-pressed="true" >Loading</button> 
                      
                  )}
              {prog === 0 && (
              <button className="btn btn-active text-white"   aria-pressed="true" onClick={handleaddmethod}>Add Metod</button> 
              )}
              </div>
              
            </div>
            </div>
                    </div>

</div>
</div>
        </div>
</div>)}
else if(tab == 'edit_zone'){
    let lgf = JSON.parse(marray)
    return(
      
<div className="grid place-items-center  w-[100%]">
    <div className="float-left text-left mt-0  w-[100%] h-[40rem]">
    <div className="pl-4 pt-[1.1rem] mb-8 text-white roboto float-left text-left font-[400] text-2xl">

    <div className="float-left  text-left ">
    Edit zone
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

              {newalart.map((gf,i)=>{
  setTimeout(() => {
    // setnewalart()
    setnewalart((products) => products.filter((d, index) => d.id !== gf.id));
  }, 2000);
  if(gf.s === 0){
    return(
      <div className="alert  alert-warning shadow-lg max-w-xs mt-2 float-right proalt rounded-r-none text-left">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      <span className='min-w-[15rem] '>{gf.name}</span>
        
      </div>
    </div>
    )
  }else{
    return(
      <div className="alert  alert-success shadow-lg max-w-xs mt-2 float-right proalt rounded-r-none text-left">
      <div>
      <i className="fa-solid fa-check"></i>      <span className='min-w-[15rem] '>{gf.name}</span>
        
      </div>
    </div>
    )
  }

})}
                <div onClick={()=>{
settab('zone_list')
                      }} className='m-4 text-2xl'>
                  <i  className="fas fa-arrow-left"></i>
                </div>
            <div className='grid place-items-center'>
              
            <div className="p-10 card bg-base-300">
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label> 
                <input type="text" value={zonename} onChange={(e)=>{setzonename(e.target.value)}}placeholder="Name" className="input bg-base-200" />
              </div>  
              <div className="form-control">
                <label className="label">
                  <span className="label-text">icon</span>
                </label> 
                <input type="text" value={icon} onChange={(e)=>{seticon(e.target.value)}}placeholder="Name" className="input bg-base-200" />
              </div>  
                            <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile</span>
                </label> 
                <select type="text" onChange={(e)=>{setzoneprofile(e.target.value)}}placeholder="Name" className="select bg-base-200" >
                  <option selected='selected' disabled='disabled'>Profile</option>
                  <option value={-1}>Worldwide</option>
{profiles.map((gf,i)=>{
  if(gf.id == zoneprofile){
    return(
      <option selected='selected' value={gf.id}>({gf.id}) {gf.name}</option>
    )
  }else{
    return(
      <option value={gf.id}>({gf.id}) {gf.name}</option>
    )
  }

})}
                </select>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label> 
                <select type="text" onChange={(e)=>{
                  setzoneprice('')
                  settype(e.target.value)}
                  }placeholder="Name" className="select bg-base-200" >
                  {type == 1 &&(
<>
<option selected='selected' value={1}>use a shipping profiile</option>
                  <option value={2}>Pick up</option>
                  </>
                  )}
                                    {type == 2 &&(
<>
<option  value={1}>use a shipping profiile</option>
                  <option selected='selected' value={2}>Pick up</option>
                  </>
                  )}

                </select>
              </div>



{type == 2 && (
              <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label> 
              <input type="text" value={zoneprice} onChange={(e)=>{setzoneprice(e.target.value)}}placeholder="Address" className="input bg-base-200" />
            </div>
)}

              {/* rank */}

            {/* worlswide */}
            
            
              
              <div className="grid place-items-center mt-4">
                  {prog === 1 && (
              <button className="btn btn-active text-white loading"   aria-pressed="true" >Loading</button> 
                      
                  )}
              {prog === 0 && (
              <button className="btn btn-active text-white"   aria-pressed="true" onClick={()=>{
                var lgf = JSON.parse(marray)

if(zonename.length < 1 || zoneprofile.length == -2 || icon.length < 2 || type == null ){
  setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:'Required fields were not filled.',s:0}])
}else{
  if(type == 1){
    var em = lgf.filter(obj=>obj.id !== inid);
    // console.log(foundValue)
    em.push({id:lgf.length + 1,name:zonename,icon:icon,priceble:1,to:zoneprofile,price:zoneprice,type:1})
    add_zone(em)
  }else if (type == 2){
    em.push({id:lgf.length + 1,name:zonename,icon:icon,priceble:0,to:zoneprofile,price:zoneprice,type:1})
    add_zone(em)
  }else{
    console.error('please select a type')
  }
}

         }}>SAVE</button> 
              )}
                                          <button className="btn btn-active text-white"   aria-pressed="true" onClick={()=>{
                var lgf = JSON.parse(marray)

if(zonename.length < 1 || zoneprofile.length == -2 || icon.length < 2 || type == null ){
  setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:'Required fields were not filled.',s:0}])
}else{
  if(type == 1){
    var em = lgf.filter(obj=>obj.id !== inid);
    // console.log(foundValue)
    // em.push({id:lgf.length + 1,name:zonename,icon:icon,priceble:1,to:zoneprofile,price:zoneprice,type:1})
    add_zone(em)
  }else if (type == 2){
    // em.push({id:lgf.length + 1,name:zonename,icon:icon,priceble:0,to:zoneprofile,price:zoneprice,type:1})
    add_zone(em)
  }else{
    console.error('please select a type')
  }
}

         }}>DELETE</button> 
              </div>
              
            </div>
            </div>
                    </div>


</div>
</div>
        </div>
</div>)}
else if(tab == 'add_zone'){
    let lgf = JSON.parse(marray)
    return(
      
<div className="grid place-items-center  w-[100%]">
    <div className="float-left text-left mt-0  w-[100%] h-[40rem]">
    <div className="pl-4 pt-[1.1rem] mb-8 text-white roboto float-left text-left font-[400] text-2xl">

    <div className="float-left  text-left ">
   Add zone
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

<div id='' className=" w-[100%]">

            {newalart.map((gf,i)=>{
setTimeout(() => {
  // setnewalart()
  setnewalart((products) => products.filter((d, index) => d.id !== gf.id));
}, 2000);
if(gf.s === 0){
  return(
    <div className="alert  alert-warning shadow-lg max-w-xs mt-2 float-right proalt rounded-r-none text-left">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    <span className='min-w-[15rem] '>{gf.name}</span>
      
    </div>
  </div>
  )
}else{
  return(
    <div className="alert  alert-success shadow-lg max-w-xs mt-2 float-right proalt rounded-r-none text-left">
    <div>
    <i className="fa-solid fa-check"></i>      <span className='min-w-[15rem] '>{gf.name}</span>
      
    </div>
  </div>
  )
}

})}
              <div onClick={()=>{
settab('zone_list')
                    }} className='m-4 text-2xl'>
                <i  className="fas fa-arrow-left"></i>
              </div>
          <div className='grid place-items-center'>
            
          <div className="p-10 card bg-base-300">
          
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label> 
              <input type="text" value={zonename} onChange={(e)=>{setzonename(e.target.value)}}placeholder="Name" className="input bg-base-200" />
            </div>  
            <div className="form-control">
              <label className="label">
                <span className="label-text">icon</span>
              </label> 
              <input type="text" value={icon} onChange={(e)=>{seticon(e.target.value)}}placeholder="Name" className="input bg-base-200" />
            </div>  
                          <div className="form-control">
              <label className="label">
                <span className="label-text">Profile</span>
              </label> 
              <select type="text" onChange={(e)=>{setzoneprofile(e.target.value)}}placeholder="Name" className="select bg-base-200" >
                <option selected='selected' disabled='disabled'>Profile</option>
                <option value={-1}>Worldwide</option>
{profiles.map((gf,i)=>{
return(
  <option value={gf.id}>({gf.id}) {gf.name}</option>
)
})}
              </select>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type</span>
              </label> 
              <select type="text" onChange={(e)=>{
                setzoneprice('')
                settype(e.target.value)}
                }placeholder="Name" className="select bg-base-200" >
                <option selected='selected'>Type</option>
                <option value={1}>use a shipping profiile</option>
                <option value={2}>Pick up</option>
              </select>
            </div>



{type == 2 && (
            <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label> 
            <input type="text" value={zoneprice} onChange={(e)=>{setzoneprice(e.target.value)}}placeholder="Address" className="input bg-base-200" />
          </div>
)}

            {/* rank */}

          {/* worlswide */}
          
          
            
            <div className="grid place-items-center mt-4">
                {prog === 1 && (
            <button className="btn btn-active text-white loading"   aria-pressed="true" >Loading</button> 
                    
                )}
            {prog === 0 && (
            <button className="btn btn-active text-white"   aria-pressed="true" onClick={()=>{
              var lgf = JSON.parse(marray)

if(zonename.length < 1 || zoneprofile.length == -2 || icon.length < 2 || type == null ){
setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:'Required fields were not filled.',s:0}])
}else{
if(type == 1){
  lgf.push({id:lgf.length + 1,name:zonename,icon:icon,priceble:1,to:zoneprofile,price:zoneprice,type:1})
  add_zone(lgf)
}else if (type == 2){
  lgf.push({id:lgf.length + 1,name:zonename,icon:icon,priceble:0,to:zoneprofile,price:zoneprice,type:1})
  add_zone(lgf)
}else if (type == 3){
  lgf.push({id:lgf.length + 1,name:zonename,icon:icon,priceble:1,to:zoneprofile,price:zoneprice,type:2})
  add_zone(lgf)
}else if (type == 4){
  lgf.push({id:lgf.length + 1,name:zonename,icon:icon,priceble:1,to:zoneprofile,price:zoneprice,type:3})
  add_zone(lgf)
}else if (type == 5){
  lgf.push({id:lgf.length + 1,name:zonename,icon:icon,priceble:1,to:zoneprofile,price:zoneprice,type:4})
  add_zone(lgf)
}else if (type == 6){
  lgf.push({id:lgf.length + 1,name:zonename,icon:icon,priceble:1,to:zoneprofile,price:zoneprice,type:5})
  add_zone(lgf)
}else if (type == 7){
  lgf.push({id:lgf.length + 1,name:zonename,icon:icon,priceble:1,to:zoneprofile,price:zoneprice,type:6})
  add_zone(lgf)
}else{
  console.error('please select a type')
}
}

       }}>Add Zone</button> 
            )}
            </div>
            
          </div>
          </div>
                  </div>


</div>
</div>
        </div>
</div>)}else if(tab == 'zone_list'){
    let lgf = JSON.parse(marray)

    return(
      
<div className="grid place-items-center  w-[100%]">
    <div className="float-left text-left mt-0  w-[100%] h-[40rem]">
    <div className="pl-4 pt-[1.1rem] mb-8 text-white roboto float-left text-left font-[400] text-2xl">

    <div className="float-left  text-left ">
    Zones
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
<div className="w-[100%]">
            <div className='w-[100%]'>
  
          {/* sm: md: lg: xl: */}
  
          <div id='' className="w-[100%]">

  <div>
  {newalart.map((gf,i)=>{
    setTimeout(() => {
      // setnewalart()
      setnewalart((products) => products.filter((d, index) => d.id !== gf.id));
    }, 2000);
    if(gf.s === 0){
      return(
        <div className="alert sticky alert-warning shadow-lg max-w-xs mt-2 float-right proalt rounded-r-none text-left">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span className='min-w-[15rem] '>{gf.name}</span>
          
        </div>
      </div>
      )
    }else{
      return(
        <div className="alert sticky  alert-success shadow-lg max-w-xs mt-2 float-right proalt rounded-r-none text-left">
        <div>
        <i className="fa-solid fa-check"></i>      <span className='min-w-[15rem] '>{gf.name}</span>
          
        </div>
      </div>
      )
    }
  
  })}
  </div>
  <div onClick={()=>{
settab('loading2')
                      }} className='m-4 text-2xl'>
                  <i  className="fas fa-arrow-left"></i>
                </div>
  <div className="overflow-x-auto sm:m-4 md:m-7">
    
    <div className='sm:grid float-right '>
    
    <button className="btn btn-active mb-3 float-right text-left w-full text-white"   aria-pressed="true" onClick={()=>{settab('add_zone')}}>  
  
    <div className='w-full text-left'>
    <div  className="inline-block w-6 h-6 mr-2 stroke-current">   
    <i id='mme' className="fas mt-1 text-white fa-plus"></i>                 
    </div>
    Add a zone
      </div>
    </button>

    </div>
  <table id='table' className=" w-full">
    <thead>
      <tr>
        <th>Id</th> 
        <th>Name</th>
        <th >Edit</th>
      </tr>
    </thead> 
    <tbody>
        {lgf.map((g,i)=>{
            return (
              <tr key={g.id} className="hover">
          
              <th>{g.id}</th> 
      <th><i className={g.icon + ' mr-2'}></i>{g.name}</th>
                  <th className='text-blue-500 cursor-pointer' onClick={()=>{
                      setinid(g.id)
                      setzonename(g.name)
                      setnamee(g.name)
                      seticon(g.icon)
                      setzoneprice(g.price)
                      setzoneprofile(g.to)
                      settype(g.type)
                      settab('edit_zone')
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



</div>
</div>
        </div>
</div>)}else if(tab == 'proje55ct'){
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




</div>
</div>
        </div>
</div>)}
}
export default ShippingProfile;