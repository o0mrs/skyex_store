import axios from 'axios'
import { React,useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
const Payment = ({tabname,av})=>{
    const [logo, setlogo] = useState(av)
    const cookies = new Cookies();
      const [tab, settab] = useState('loading')
      const userToken = cookies.get('userToken')
      const [newalart,setnewalart] = useState([])
      const [paymentmethodlist, setpaymentmethodlist] = useState([])

//general
//edit payment
const [toEdit, settoEdit] = useState(0)
const [vise, setvise] = useState(1)
const [eise, seteise] = useState(1)
const [mode, setmode] = useState('sandbox')
const [client_id, setclient_id] = useState('')
const [client_secret, setclient_secret] = useState('')
const [webhook_id, setwebhook_id] = useState('')
const [alart, setalart] = useState('')
const [prog, setprog] = useState(0)
      const navigate = useNavigate();
      const handlesubmit = ()=>{
        if(prog == 0){
          setprog(1)
        if(toEdit == 0){
          if(1 == 2){
            setalart("You can't active paypal without adding client_id")
          }else if(1 == 2){
            setalart("You can't active paypal without adding client_id")
          }else if(1 == 1){
            axios.post(window.$api + 'editpaypal',{
              username: localStorage.getItem('username'),
              userToken:userToken,
              client_id:client_id,
              client_secret:client_secret,
              webhook_id:webhook_id,
              vise:vise,
            }).then((Response)=>{
              console.log('done')
              if(Response.data.status == 0){
                cookies.remove("userToken")
                navigate('/admin/login', { replace: true })
              }else if(Response.data.status == 22){
                navigate('/admin/dashboard/noperm', { replace: false })
              }else if(Response.data.status == 1){
                setalart('Done')
                settab('list')
                setprog(0)
                setalart('')
              }else if(Response.data.status == 3){
                setalart("i told you it's not possible")
              }
            })
          }
        }else if(toEdit == 1){
          axios.post(window.$api + 'editcash',{
            username: localStorage.getItem('username'),
            userToken:userToken,
            vise:vise,
          }).then((Response)=>{
            console.log('done')
            if(Response.data.status == 0){
              cookies.remove("userToken")
              navigate('/admin/login', { replace: true })
            }else if(Response.data.status == 1){
              setalart('Done')
              settab('list')
              setalart('')
            }else if(Response.data.status == 22){
              navigate('/admin/dashboard/noperm', { replace: false })
            
            }else if(Response.data.status == 3){
              setalart("i told you it's not possible")
            }
          })
        }
      
      }else{
      
      }}
      useEffect(()=>{
        axios.post(window.$api + 'getpaymentforadmin',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
          settab('list')
          if(Response.data.status == 0){
            cookies.remove("userToken")
            navigate('/admin/login', { replace: true })
          }else if(Response.data.status == 22){
            navigate('/admin/dashboard/noperm', { replace: false })
          
          }else{
            console.log(Response.data)
            setpaymentmethodlist(Response.data)
          setclient_id(Response.data[0].Client_id)
          setwebhook_id(Response.data[0].webhook_id)
          setclient_secret(Response.data[0].client_secret)
          }
          
        })
      },[])
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

<div className="grid m-4 w-[100%] place-items-center">

<div className="overflow-x-auto   grid place-items-center w-[100%]">
  <table id='table' className=" w-[87%]">
    <thead>
      <tr>

        <th>Name</th> 
        <th>Visible</th> 
        <th>Edit</th>
      </tr>
    </thead> 
    <tbody>

      {paymentmethodlist.map((get)=>{
      if(get.visible == 0){
        return(
          <>
          <tr>
          <td>  <i className={"text-2xl " + get.logo}></i><span className="ml-3 -pt-12 text-bold">{get.name}</span></td>
          <td><div className="badge badge-accent bg-red-700 border-red-700">False</div> </td>
          <th className="text-cyan-700" onClick={()=>{
            settoEdit(paymentmethodlist.findIndex(x => x.id === get.id))
            setvise(get.visible)
            seteise(get.electric)
            settab('edit')
          }
            }>Edit</th>
          </tr>
  
          </>
        )
      }else if(get.visible == 1){
        return(
          <>
          <tr>
          <td >  <i className={"text-2xl " + get.logo}></i><span className="ml-3 -pt-12 text-bold">{get.name}</span></td>
          <td><div className="badge badge-accent">True</div> </td>
          <th className="text-cyan-700" onClick={()=>{
                  settoEdit(paymentmethodlist.findIndex(x => x.id === get.id))
                  setvise(get.visible)
                  seteise(get.electric)
                  settab('edit')
          }
            }>Edit</th>
          </tr>
  
          </>
        )
      }

    })}
    </tbody>
  </table>
</div>

</div>


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
}else if(tab == 'edit'){
  return(
      
    <div className="grid place-items-center  w-[100%]">
        <div className="float-left text-left mt-0  w-[100%] h-[40rem]">
        <div className="pl-4 pt-[1.1rem] mb-8 text-white roboto float-left text-left font-[400] text-2xl">
    
        <div className="float-left  text-left ">
       Edit {tabname}
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
        <div className="alert tr   alert-success shadow-lg max-w-xs mt-16 float-right proalt rounded-r-none text-left">
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
    
    <div className=''>
    <div className=''>
    
    <i className="fas fa-arrow-left  text-2xl text-white m-4" onClick={()=>{settab('list')}}></i>
<span className="float-right text-blue-800 m-3" onClick={handlesubmit}><a className="b">Save</a></span>
<div>
  
<div className="grid place-items-center m-4">
<i className={"text-5xl " + paymentmethodlist[toEdit].logo}></i>
<div className='mt-2 font-medium' id='f3'>
    {paymentmethodlist[toEdit].name}
  </div>

  <div className='mt-2 grid place-items-center'>

{eise == 1 && (
<>
<div className="grid mb-3">

<div className='mt-3 grid'>
<lable>Client id:</lable>
<input type="text" className="mb-3 input bg-base-300" value={client_id} onChange={(e)=>{setclient_id(e.target.value)}}/>
</div>
<div className='mt-3 grid'>
<lable>client_secret:</lable>
<input type="text" className="mb-3 input bg-base-300" value={client_secret} onChange={(e)=>{setclient_secret(e.target.value)}}/>
</div>
<div className='mt-3 grid'>
<lable>Webhook id:</lable>
<input type="text" className="mb-3 input bg-base-300" value={webhook_id} onChange={(e)=>{setwebhook_id(e.target.value)}}/>
</div>
<div className='mt-3 grid'>
<lable>mode:</lable>
<select className="select bg-base-300 input">
  <option>Live</option>
  <option>Sandbox</option>
</select></div>
</div>



</>)}
<div className='mt-3 grid'>
<lable>Visible:</lable>



{vise == 1 && (<button onClick={()=>{setvise(0)}} className="btn btn-outline btn-accent mt-3 w-52">True</button>)}
{vise == 0 && (<button onClick={()=>{setvise(1)}} className="btn btn-outline btn-error mt-3 w-52">False</button>)}
</div>

  </div>
  <div className="flex mt-3 p-1
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  justify-center">
    {/* <div className="mockup-code">
  <pre data-prefix="$"><code>{window.$api}/payhook</code></pre>
</div> */}

</div>
  <div className="border-red-900 flex pl-3 border-l-2 h-6 mt-3">
{alart}
  </div>
</div>
</div>
    
    
    </div>
    </div>
            </div>
    </div>)
}
}
export default Payment;