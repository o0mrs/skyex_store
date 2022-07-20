import {Link} from 'react-router-dom'
import axios from 'axios'
import { React,useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Loading from '../loading'
const Payment = ({setbar, bar})=>{
  const cookies = new Cookies();
  const userToken = cookies.get('userToken')
  const navigate = useNavigate();
const [paymentmethodlist, setpaymentmethodlist] = useState([])

//general
const [tabb, settabb] = useState('loading')
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
          settabb('list')
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
        settabb('list')
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

//useEffects
useEffect(()=>{
  axios.post(window.$api + 'getpaymentforadmin',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
    settabb('list')
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
if(tabb == 'list'){


    return(
        <>
        {/* sm: md: lg: xl: */}
        <div id='d99' className="text-gray-900">
<div className="bg-black  h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Payment <span onClick={()=>{
 
if(bar == 'hidden'){
 setbar('')
 }else{
  setbar('hidden')
 }
  
  
  }}>
<i  className="fa-solid fa-bars float-right pr-3 pt-1"></i>

</span></div>

<div>
<div className="grid m-4">

<div className="overflow-x-auto">
  <table className="table w-full">
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
            settabb('edit')
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
                  settabb('edit')
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

  <div className="flex">

  </div>
</div>
</div>
        </div>

        </>
    )}else if (tabb == 'loading'){
      return(
        <Loading />
      )
    }else if(tabb == 'edit'){
      return(
        <>
        {/* sm: md: lg: xl: */}
        <div id='d99' className="text-white">
<div className="bg-black h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Edit Payment<span onClick={()=>{
 
if(bar == 'hidden'){
 setbar('')
 }else{
  setbar('hidden')
 }
  
  
  }}>
<i  className="fa-solid fa-bars float-right pr-3 pt-1"></i>

</span></div>

<i className="fas fa-arrow-left text-black text-2xl m-4" onClick={()=>{settabb('list')}}></i>
<span className="float-right text-blue-800 m-3" onClick={handlesubmit}>Save</span>
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
<input type="text" className="mb-3 input" value={client_id} onChange={(e)=>{setclient_id(e.target.value)}}/>
</div>
<div className='mt-3 grid'>
<lable>client_secret:</lable>
<input type="text" className="mb-3 input" value={client_secret} onChange={(e)=>{setclient_secret(e.target.value)}}/>
</div>
<div className='mt-3 grid'>
<lable>Webhook id:</lable>
<input type="text" className="mb-3 input" value={webhook_id} onChange={(e)=>{setwebhook_id(e.target.value)}}/>
</div>
<div className='mt-3 grid'>
<lable>mode:</lable>
<select className="select input">
  <option>Live</option>
  <option>Sandbox</option>
</select></div>
</div>


</>)}
<span className='mt-3 mb-2'>Visible:   {vise == 1 && (<span onClick={()=>{setvise(0)}} className='mt-1 ml-3 bg-green-800 rounded-xl w-16 text-center p-3 h-12'>
True
</span>)}
{vise == 0 && (<span onClick={()=>{setvise(1)}} className='mt-1 bg-red-800 ml-3 rounded-xl w-16 text-center p-3 h-12'>
False
</span>)}</span>

  </div>
  <div className="flex mt-3 p-1 w-screen justify-center">
    <div className='bg-base-200 p-4 border border-base-300 rounded-xl'>
    {window.$api}/payhook
    </div>
</div>
  <div className="border-red-900 flex pl-3 border-l-2 h-6 mt-3">
{alart}
  </div>
</div>
</div>
        </div>

        </>
    )
    }
} 
export default Payment

