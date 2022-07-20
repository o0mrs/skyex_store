

import { react, useState, useEffect} from "react";
import '../../css/dashboard.css'
import Account from "./account";
import axios from 'axios'
import Cookies from 'universal-cookie'
import { useNavigate,useParams } from 'react-router-dom'
import Products from "./products";
import Orders from "./orders";
import Overview from "./overview";
import Payment from "./payment";
import Support from "./support";
import Add_product from "./add_product";
import Settings from "./settings";
import Catagorys from "./Editcatagorys";
import Shipping from "./shipping";
import Logs from "./logs";
import Users from "./users";
import Add_user from "./add_user";
import Add_region from "./add_region";
import ShippingProfile from "./shipping_profile";
import NoPerm from "./noperm";
import PrintFul from "./printful";
const cookies = new Cookies();
const DashBoard = ()=>{
  const navigate = useNavigate();
  const userToken = cookies.get('userToken')
  const [username, ssetusername] = useState('')
  const [email, setemail] = useState('')
  const [id, setid] = useState();
  const [name, setname] = useState('')
  const [rank, setrank] = useState('')
  const [tab,setTab] = useState('overview')
  const [bar, setbar] = useState('hidden')
  const [shippingto, setshippingto] = useState(0)
  const [app, setapp] = useState('');
  let p = useParams()
  useEffect(()=>{
    console.log(window.$api)
    if(bar == 'hidden'){
      setapp('')
    }else{
      setapp('hidden')
    }
  },[bar])
  useEffect(()=>{
  
    if(userToken){
    axios.post(window.$api + '/verfy',{
            userToken: userToken,
      username: localStorage.getItem('username'),
    }).then((Response)=>{
      
      if(Response.data.msg == 0){
        cookies.remove("userToken")
        navigate('/admin/login', { replace: true })
      }else if(Response.data.msg == 1){
        // setusername(Response.data.username)
        setemail(Response.data.email)
        setrank(Response.data.rank)
        setname(Response.data.name)
        setid(Response.data.id)

      }else if(Response.data.msg == 2){
        navigate('/', { replace: true })
      }else if(Response.data.msg == 22){
        navigate('/admin/dashboard/noperm', { replace: false })
      
      }
    })
  }else{
    navigate('/', { replace: true })
  }
  },[tab])
  useEffect(()=>{
// console.log(p.tab)
if(p.tab){
  setTab(p.tab)
}
  },[])
return(
  
<div className="flex bg-black">
  <div className="w-64">








    <div id='navd' className={bar}>
      <div className="flex-auto text-white bg-black w-screen relative h-screen ">
        
        <div className='float-right m-4' onClick={()=>{setbar('hidden')}}>
        <i className="fas fa-times-circle text-2xl"></i>
        </div>


        <div className='pl-3 pt-4 text-xl'>
        Skyex Store v2.2
        </div>
        <div className='grid mt-12 text-left place-items-center'>


          {/* 1 */}
        <div onClick={()=>{
            setTab('overview')
            setbar('hidden')
            navigate('/admin/dashboard/overview', { replace: true })
            }} className={"text-cyan-s00 text-xl mt-12 flex relative px-5 hover:bg-base-200 rounded-md cursor-pointer"}>
            <div className="mr-2 my-auto">
            <i className="far fa-eye"></i>            </div>
            <div className="flex-auto relative my-1">
              <span>Overview</span>
            </div>
            
          </div>
{/* 2 */}
<div onClick={()=>{
            setTab('account')
            setbar('hidden')
            navigate('/admin/dashboard/account', { replace: true })
            }} className={"text-cyan-s00 text-xl mt-3 flex relative px-5 hover:bg-base-200 rounded-md cursor-pointer"}>
            <div className="mr-2 my-auto">
            <i className="fas fa-user"></i></div>
            <div className="flex-auto relative my-1">
              <span>Account</span>
            </div>
            
          </div>
          {/* 3 */}
          <div onClick={()=>{
            setTab('orders')
            setbar('hidden')
            navigate('/admin/dashboard/orders', { replace: true })
            }} className={"text-cyan-s00 text-xl mt-3 flex relative px-5 hover:bg-base-200 rounded-md cursor-pointer"}>
            <div className="mr-2 my-auto">
            <i className="fas fa-th-list"></i></div>
            <div className="flex-auto relative my-1">
              <span>Order</span>
            </div>
            
          </div>
{/* 4 */}
<div onClick={()=>{
            setTab('products')
            setbar('hidden')
            navigate('/admin/dashboard/products', { replace: true })
            
            }} className={"text-cyan-s00 text-xl mt-3 flex relative px-5 hover:bg-base-200 rounded-md cursor-pointer"}>
            <div className="mr-2 my-auto">
            <i className="fas fa-atlas"></i>
</div>
            <div className="flex-auto relative my-1">
              <span>Products</span>
            </div>
            
          </div>
{/* 5 */}
<div onClick={()=>{
            setTab('payment')
            setbar('hidden')
            navigate('/admin/dashboard/payment', { replace: true })

            }} className={"text-cyan-s00 text-xl mt-3 flex relative px-5 hover:bg-base-200 rounded-md cursor-pointer"}>
            <div className="mr-2 my-auto">
            <i className="fas fa-money-check-alt"></i>       </div>
            <div className="flex-auto relative my-1">
              <span>Payment</span>
            </div>
            
          </div>
{/* 6 */}
<div onClick={()=>{
            setTab('Users')
            setbar('hidden')
            navigate('/admin/dashboard/Users', { replace: true })

            }} className={"text-cyan-s00 text-xl mt-3 flex relative px-5 hover:bg-base-200 rounded-md cursor-pointer"}>
            <div className="mr-2 my-auto">
            <i className="fas fa-users"></i>           </div>
            <div className="flex-auto relative my-1">
              <span>Users</span>
            </div>
            
          </div>



          {/* 7 */}
          <div onClick={()=>{
            setTab('ShippingProfile')
            setbar('hidden')
            navigate('/admin/dashboard/ShippingProfile', { replace: true })

            }} className={"text-cyan-s00 text-xl mt-3 flex relative px-5 hover:bg-base-200 rounded-md cursor-pointer"}>
            <div className="mr-2 my-auto">
            <i className="fas fa-truck text-lg"></i>          </div>
            <div className="flex-auto relative my-1">
              <span>Shipping</span>
            </div>
            
          </div>
          {/* 8 */}
          <div onClick={()=>{
            setTab('Logs')
            setbar('hidden')
            navigate('/admin/dashboard/Logs', { replace: true })

            }} className={"text-cyan-s00 text-xl mt-3 flex relative px-5 hover:bg-base-200 rounded-md cursor-pointer"}>
            <div className="mr-2 my-auto">
            <i className="fas fa-box text-lg"></i>          </div>
            <div className="flex-auto relative my-1">
              <span>Logs</span>
            </div>
            
          </div>
          {/* 9 */}
          <div onClick={()=>{
            setTab('settings')
            setbar('hidden')
            navigate('/admin/dashboard/settings', { replace: true })

            }} className={"text-cyan-s00 text-xl mt-3 flex relative px-5 hover:bg-base-200 rounded-md cursor-pointer"}>
            <div className="mr-2 my-auto">
            <i className="fas fa-hammer"></i>           </div>
            <div className="flex-auto relative my-1">
              <span>Settings</span>
            </div>
            
          </div>
          {/* 10 */}
          <div onClick={()=>{
            setTab('software')
            setbar('hidden')
            navigate('/admin/dashboard/software', { replace: true })

            }} className={"text-cyan-s00 text-xl mt-3 flex relative px-5 hover:bg-base-200 rounded-md cursor-pointer"}>
            <div className="mr-2 my-auto">
            <i className="fab fa-uncharted"></i>           </div>
            <div className="flex-auto relative my-1">
              <span>Software</span>
            </div>
            
          </div>
          <div onClick={()=>{
            setTab('DropShipping')
            setbar('hidden')
            navigate('/admin/dashboard/DropShipping', { replace: true })

            }} className={"text-cyan-s00 text-xl mt-3 flex relative px-5 hover:bg-base-200 rounded-md cursor-pointer"}>
            <div className="mr-2 my-auto">
            <i className="fa-solid fa-truck-fast"></i>         </div>
            <div className="flex-auto relative my-1">
              <span>DropShipping</span>
            </div>
            
          </div>
          {/* 11 */}
          <div onClick={()=>{
            setTab('Users')
            setbar('hidden')
            }} className={"text-cyan-s00 text-xl mt-3 flex relative px-5 hover:bg-base-200 rounded-md cursor-pointer"}>
            <div className="mr-2 my-auto">
            <i className="fas fa-sign-out-alt text-xl"></i>
            </div>

            <div onClick={()=>{
        cookies.remove("userToken")
        localStorage.removeItem('username');
          }} className="flex-auto my-1">
              <span className="ml-">Log out</span>
            </div>
            
          </div>




        </div>
      </div>
    </div>

  </div>
  <div className={'flex min-h-screen overflow-x-auto text-left absolute ' + app}>

  
{(()=>{

  if(tab == 'overview'){
    return(
<Overview name={name} id={id} rank={rank} setbar={setbar} setTab={setTab} bar={bar}/>
    )
  }else if(tab == 'account'){
    return(
      <Account setTabo={setTab} setbar={setbar} bar={bar}/>
          )
  }
  else if(tab == 'products'){
    return(
      <Products setTab={setTab} setbar={setbar} bar={bar}/>
          )
  }else if(tab == 'orders'){
    return(
      <Orders setTabo={setTab} setbar={setbar} bar={bar}/>
          )
  }else if(tab == 'payment'){
    return(

      <Payment setTab={setTab} setbar={setbar} bar={bar}/>
          )
  }
  else if(tab == 'support'){
    return(
      <Support setTab={setTab} setbar={setbar} bar={bar}/>
          )
  } else if(tab == 'add'){
    return(

      <Add_product setTab={setTab} setbar={setbar} bar={bar}/>
          )
  }else if(tab == 'settings'){
    return(

      <Settings setTabo={setTab} setbar={setbar} bar={bar}/>
    )
  }else if(tab == 'catagory'){
    return(
<Catagorys setTab={setTab} setbar={setbar} bar={bar} />
  
    )
  }else if(tab == 'Shipping'){
    if(shippingto > 0){
      return(
        <Shipping setTabo={setTab} shippingto={shippingto} setshippingto={setshippingto} setbar={setbar} bar={bar}/>
      )
    }else{
setTab('ShippingProfile')
    }

  }else if(tab == 'Logs'){
    return(
      <Logs setTabo={setTab} setbar={setbar} bar={bar}/>
    )
  }else if(tab == 'Users'){
    return(
      <Users setTabo={setTab} setbar={setbar} bar={bar}/>

    )
  }else if(tab == 'add_user'){
    return(
      <Add_user setTabo={setTab} setbar={setbar} bar={bar}/>

    )
  }else if(tab == 'add_region'){
    return(

      <Add_region setTabo={setTab} setbar={setbar} bar={bar} shippingto={shippingto} setshippingto={setshippingto}/>

    )
  }else if(tab == 'ShippingProfile'){
    if(1 == 1){
      return(
        <ShippingProfile setTabo={setTab} setbar={setbar} bar={bar} shippingto={shippingto} setshippingto={setshippingto}/>
      )
    }

  }else if(tab == 'DropShipping'){
    if(1 == 1){
      return(
        
        <PrintFul setTabo={setTab} setbar={setbar} bar={bar} shippingto={shippingto} setshippingto={setshippingto}/>
      )
    }

  }else if(tab == 'noperm'){
    if(1 == 1){
      return(
        <NoPerm setTabo={setTab} setbar={setbar} bar={bar}/>
      )
    }

  }
  else{
    setTab('overview')
    navigate('/admin/dashboard', { replace: true })
  }

})()}
</div>
  {/*content*/}
</div>

)
}
export default DashBoard