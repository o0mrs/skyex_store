import axios from 'axios'
import { React,useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom'
import Loading from './loading'
import Cookies from 'universal-cookie'
const Catagorys = ({tabname,av})=>{
    const [logo, setlogo] = useState(av)
    const cookies = new Cookies();
      const [tab, settab] = useState('loading')
      const userToken = cookies.get('userToken')
      const [newalart,setnewalart] = useState([])
      const navigate = useNavigate();
      const [onProgess, setonProgess] = useState(0)
const [SText, setSText] = useState('Save')
const [toEditI, settoEditI] = useState(0)
const [toEditN, settoEditN] = useState('')
const [toEditV, settoEditV] = useState(0)
const [o1T, seto1T] = useState('')
const [o2F, seto2F] = useState('')
const [edithomepage, setedithomepage] = useState(0);
const [orderedit, setorderedit] = useState(0);
//Add catagory
const [STextA, setSTextA] = useState('Add')
const [onProgessA, setonProgessA] = useState(0)
const [AddName, setAddName] = useState('')
const [AddV, setaddV] = useState(1)
const [vishomnepage, setvishomnepage] = useState(0)
const [order, setorder] = useState(0)
//list
const [refresh, setrefresh] = useState(0)
const [catagoryList, setcatagoryList] = useState([])
useEffect(()=>{
  if(tab == 'loading'){
    axios.post(window.$api + 'getcatagorys',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
      console.log(Response.data)
      settab('list')
  
      if(Response.data.status == 0){
        cookies.remove("userToken")
        navigate('/admin/login', { replace: true })
      }else if(Response.data.status == 22){
        navigate('/admin/dashboard/noperm', { replace: false })
      
      }else{
        setcatagoryList(Response.data)
      }
  
      
    })
  }

},[tab,refresh])
//handle
const handleAddSubmit = ()=>{
  if(onProgessA == 0){
    if(AddName.length == 0){
      setSTextA('You forgot the name')
    }else{
    setonProgessA(1)
    setSTextA('Working on it')
  axios.post(window.$api + 'addcatagory',{
          userToken: userToken,
      username: localStorage.getItem('username'),
    name: AddName,
    v:toEditV,
    vishomnepage:vishomnepage,
    order:order
}).then((Response)=>{
  if(Response.data.status == 0){
    cookies.remove("userToken")
    navigate('/admin/login', { replace: true })
  }else if(Response.data.status == 22){
    navigate('/admin/dashboard/noperm', { replace: false })
  
  }else{
    setonProgessA(0)
    setSTextA('Done')
    setTimeout(()=>{
      settab('loading')
    }, 1000);
  }

}
)}}else{
  setSTextA("STOP I'M ON IT")
}
}
//handle catagory edit save
const handleCatagorySave = ()=>{
  if(onProgess == 0){
    setonProgess(1)
    setSText('Working on it')
  axios.post(window.$api + 'handlecatagorysave',{
          userToken: userToken,
      username: localStorage.getItem('username'),
    name: toEditN,
    id: toEditI,
    toEditV:toEditV,
    order:orderedit,
    home:edithomepage,
    t:1,
}).then((Response)=>{
  if(Response.data.status == 0){
    cookies.remove("userToken")
    navigate('/admin/login', { replace: true })
  }else if(Response.data.status == 22){
    navigate('/admin/dashboard/noperm', { replace: false })
  
  }else{
    setonProgess(0)
    setSText('Done')
    setTimeout(()=>{
      setSText('Save') 
      settab('loading')
      seto1T('')
      seto2F('')
      settoEditN('')
      settoEditV(0)
      settoEditI(0)
    }, 1000);
  }

}
)}else{
  setSText("STOP I'M ON IT")
}
}

const handleCatagoryRemove = ()=>{
  if(onProgess == 0){
    setonProgess(1)
    setSText('Working on it')
  axios.post(window.$api + 'handlecatagorysave',{
          userToken: userToken,
      username: localStorage.getItem('username'),
    name: toEditN,
    id: toEditI,
    toEditV:toEditV,
    t:0
}).then((Response)=>{
  if(Response.data.status == 0){
    cookies.remove("userToken")
    navigate('/admin/login', { replace: true })
  }else if(Response.data.status == 22){
    navigate('/admin/dashboard/noperm', { replace: false })
  
  }else{
    setonProgess(0)
    setSText('Done')
    setTimeout(()=>{
      setSText('Save') 
      settab('loading')
      seto1T('')
      seto2F('')
      settoEditN('')
      settoEditV(0)
      settoEditI(0)
    }, 1000);
  }
}
)}else{
  setSText("STOP I'M ON IT")
}
}
      if(tab == 'list'){
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
    }} className="text-cyan-600 cursor-pointer"><a>Support</a></li>
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
<div className='grid place-items-center w-[100%]'>


<div className='w-[100%]'>
<i className="fas fa-arrow-left ml-4 text-xl" onClick={()=>{navigate('/admin/dashboard/Settings',{replace: false})}}></i>
<div>
<div className="grid">
  <div>
  <button className="btn mr-3 float-right text-white" onClick={()=>{settab('Add')}}> <i className="fas fa-plus mr-2"></i>  Add Category</button> 
  </div>

<div className="overflow-x-auto grid place-items-center mt-8">
  <table className="table max-w-xl w-full">
    <thead>
      <tr>
        <th>ID</th> 
        <th>Name</th> 
        <th>Visible on NavBar</th> 
        <th>Visible on Home</th>
        <th>Edit</th>
      </tr>
    </thead> 
    <tbody>
    {catagoryList.map(get =>{
      if(get.display == 0){
        if(get.displays == 1){
          return (
            <>
                <tr>
            <td>{get.id}</td>
          <td>{get.name}</td>
          <td ><div className="badge badge-accent border-red-700 bg-red-700">False</div></td>
          <td ><div className="badge badge-accent  ">True</div></td>
          <th className='text-cyan-600 cursor-pointer' onClick={()=>{
            settoEditI(get.id)
            settoEditN(get.name)
            settoEditV(get.display)
            setorderedit(get.corder)
            seto2F('False')
            seto1T('')
            setedithomepage(get.displays)
            settab('edit')
          }}>Edit</th>
        </tr>
            </>
          )
        }else{
          return (
            <>
                <tr>
            <td>{get.id}</td>
          <td>{get.name}</td>
          <td ><div className="badge badge-accent border-red-700 bg-red-700">False</div></td>
          <td ><div className="badge badge-accent border-red-700 bg-red-700">False</div></td>
          <th className='text-cyan-600 cursor-pointer' onClick={()=>{
            settoEditI(get.id)
            settoEditN(get.name)
            setorderedit(get.corder)
            settoEditV(get.display)
            setedithomepage(get.displays)
            seto2F('False')
            seto1T('')
            settab('edit')
          }}>Edit</th>
        </tr>
            </>
          )
        }

      }else{
        // true 
        if(get.displays == 1){
          return (
            <>
                <tr>
            <td>{get.id}</td>
          <td>{get.name}</td>
          <td ><div className="badge badge-accent  ">True</div></td>
          <td ><div className="badge badge-accent  ">True</div></td>
          <th className='text-cyan-600 cursor-pointer' onClick={()=>{
            settoEditI(get.id)
            settoEditN(get.name)
            settoEditV(get.display)
            setorderedit(get.corder)
            setedithomepage(get.displays)
            seto2F('False')
            seto1T('')
            settab('edit')
          }}>Edit</th>
        </tr>
            </>
          )
        }else{
          return (
            <>
                <tr>
            <td>{get.id}</td>
          <td>{get.name}</td>
          <td ><div className="badge badge-accent  ">True</div></td>
          <td ><div className="badge badge-accent border-red-700 bg-red-700">False</div></td>
          <th className='text-cyan-600 cursor-pointer' onClick={()=>{
            settoEditI(get.id)
            settoEditN(get.name)
            settoEditV(get.display)
            setorderedit(get.corder)
            setedithomepage(get.displays)
            seto2F('False')
            seto1T('')
            settab('edit')
          }}>Edit</th>
        </tr>
            </>
          )
        }
      }

    })}

    </tbody>
  </table>
</div>

</div>
</div>
<div className="flex justify-center mt-5 place-items-center">


</div>
</div>

</div>
</div>
        </div>
</div>)}else if(tab == 'loading'){
return(
  <>
<Loading t={tab} logo={logo}/>
  </>
)
}if(tab == 'Add'){
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

<div>
<span className="float-right text-blue-500 mr-3" ></span>
<i className="fas fa-arrow-left ml-4 text-xl" onClick={()=>{settab('loading')}}></i>
<div className='mt-6 grid place-items-center'>



<div className="p-10 card bg-base-200">
  <div className="form-control">
    <label className="label">
      <span className="label-text">Name</span>
    </label> 
    <input type='text' value={AddName} onChange={(e)=>{setAddName(e.target.value)}} placeholder="Name" className="input" />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Order</span>
    </label> 
    <input type='text' value={order} onChange={(e)=>{setorder(e.target.value.replace(/[A-z]/g, ''))}} placeholder="Order" className="input" />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Visible on NavBar</span>
    </label> 
    {toEditV == 0 && (
      <div>
          <button className="btn btn-outline btn-accent" onClick={()=>{settoEditV(1)}}>False</button> 

      </div>
         )}
            {toEditV == 1 && (
              <div>
          <button className="btn btn-outline btn-accent" onClick={()=>{settoEditV(0)}}>True</button> 

              </div>
         )}
 </div>
 <div className="form-control">
    <label className="label">
      <span className="label-text">Visible on Homepage</span>
    </label> 
    {vishomnepage == 0 && (
      <div>
          <button className="btn btn-outline" onClick={()=>{setvishomnepage(1)}}>False</button> 

      </div>
         )}
            {vishomnepage == 1 && (
              <div>
          <button className="btn btn-outline" onClick={()=>{setvishomnepage(0)}}>True</button> 

              </div>
         )}
 </div>
 <div className="form-control">


          <button className="btn btn-active mt-4" onClick={handleAddSubmit}>{STextA}</button> 

 </div>
</div>


      </div>
</div>


</div>
</div>
      </div>
</div>)}if(tab == 'edit'){
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

<div>
<span className="float-right text-blue-500 mr-3" onClick={handleCatagorySave}>{SText}</span>
<i className="fas fa-arrow-left ml-4 text-xl" onClick={()=>{settab('loading')
}}></i>
<div className="hero">
<div className="p-10 card bg-base-200 sm:max-w-xs md:w-96 mt-12 lg:max-w-2xl xl:max-w-2xl 2xl:max-w-2xl">
  {/* name */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Name</span>
    </label> 
    <input type='text' placeholder="name" value={toEditN} onChange={(e)=>{settoEditN(e.target.value)}} className="input" />
  </div>
  {/* order */}
   <div className="form-control">
    <label className="label">
      <span className="label-text">Order</span>
    </label> 
    <input type='text' placeholder="order" value={orderedit} onChange={(e)=>{setorderedit(e.target.value)}} className="input text-center" />
  </div>
  {/* visible on nav bar */}
  
  {toEditV == 1 && (
       <div className="form-control mt-2">
       <label className="label">
         <span className="label-text">Visible on NavBar</span>
       </label> 
       <button onClick={(e)=>{settoEditV(0)}}  type="button" className="btn btn-outline btn-accent ">True</button>

     </div>
  )}
    {toEditV == 0 && (
         <div className="form-control mt-2">
         <label className="label">
           <span className="label-text">Visible on NavBar</span>
         </label> 
         <button onClick={(e)=>{settoEditV(1)}} type="button" className="btn btn-outline">False</button>
       </div>
  )}
  {/* visible on home page */}
  {edithomepage == 1 && (
       <div className="form-control mt-2">
       <label className="label">
         <span className="label-text">Visible on Home</span>
       </label> 
       <button onClick={(e)=>{setedithomepage(0)}}  type="button" className="btn btn-outline btn-accent ">True</button>

     </div>
  )}
    {edithomepage == 0 && (
         <div className="form-control mt-2">
         <label className="label">
           <span className="label-text">Visible on Home</span>
         </label> 
         <button onClick={(e)=>{setedithomepage(1)}} type="button" className="btn btn-outline">False</button>
       </div>
  )}

  {/* reomve button */}
<button className='btn hover:text-white hover:bg-red-800 hover:border-red-700 border-red-700 mt-8 text-red-600 btn-outline' onClick={handleCatagoryRemove}>Remove</button>
</div>
</div>


</div>


</div>
</div>
        </div>
</div>)}
}
export default Catagorys;