import { useEffect, useState } from "react";
import Account from "./account";
import OverView from "./OverView";
import Dnavbar from "./dnavbar";
import axios from 'axios'
import Cookies from 'universal-cookie'
import { useNavigate,useParams } from 'react-router-dom'
import Products from "./products";
import Orders from "../orders";

import Payment from "./payment";
import Support from "../support";
import Add_product from "./add_product";
import Settings from "./settings";
import Catagorys from "./Editcatagorys";
import Shipping from "./shipping";
import Logs from "./logs";
import Users from "./users";
import Add_user from "./add_user";
import Add_region from "../add_region";
import ShippingProfile from "./shipping_profile";
import NoPerm from "../noperm";
import PrintFul from "../printful";
import Cash from "./cash";
import Finance from "./finance";

const cookies = new Cookies();
const Dashboard = ()=>{
    const ddq = [{d:'d'}]
    const [tab, settab] = useState('loading')
    const navigate = useNavigate();
    const userToken = cookies.get('userToken')
    const [username, ssetusername] = useState('')
    const [email, setemail] = useState('')
    const [id, setid] = useState();
    const [name, setname] = useState('')
    const [rank, setrank] = useState('')
    const [logo, setlogo] = useState('')
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
          setemail(Response.data.email)
          setrank(Response.data.rank)
          setname(Response.data.name)
          setid(Response.data.id)
          setlogo(Response.data.av)
                      if(p.tab){
                settab(p.tab)
              }else{
                settab('')
                navigate('/admin/dashboard/OverView', { replace: false })
              }
        }else if(Response.data.msg == 2){
          navigate('/', { replace: true })
        }else if(Response.data.msg == 22){
        //   navigate('/admin/dashboard/noperm', { replace: false })
        
        }
      }).catch(err => navigate('/admin/login', { replace: false }))
    }else{
      navigate('/admin/login', { replace: false })
    }
    },[])
    useEffect(()=>{
      if(tab == 'loading'){
        
      }else{
        if(p.tab){
          settab(p.tab)
        }
      }

    },[p])
    if(tab !== 'loading'){
        return(
            <div className="flex max-w-[100vw] w-screen">
        <Dnavbar setmaintab={settab}/>
        {tab == 'OverView' && (
        <OverView tabname={tab} av={logo} setmaintab={settab} name={name} id={id} />
        
            )}
                    {tab == 'Account' && (
        <Account setmaintab={settab} tabname={tab} av={logo} />
         
        
            )}
                                {tab == 'Products' && (
        <Products setmaintab={settab} tabname={tab} av={logo} />
         
        
            )}
                                            {tab == 'Payment' && (
        <Payment setmaintab={settab} tabname={tab} av={logo} />
         
        
            )}


{tab == 'Logs' && (
        <Logs  setmaintab={settab} tabname={tab} av={logo} />
         
        
            )}   
            {tab == 'Settings' && (
        <Settings  setmaintab={settab} tabname={tab} av={logo} />
         
        
            )}
                        {tab == 'add' && (
        <Add_product setmaintab={settab} tabname={tab} av={logo}/>
         
        
            )}

                                                {tab == 'Shippings' && (
                    <Shipping setmaintab={settab} tabname={tab} av={logo}  shippingto={shippingto} setshippingto={setshippingto} />

         
        
            )}
                                    {tab == 'Shipping' && (
        <ShippingProfile setmaintab={settab} tabname={tab} av={logo} shippingto={shippingto} setshippingto={setshippingto}/>
         
        
            )}
                                                {tab == 'add_region' && (
        <Add_region setmaintab={settab} tabname={tab} av={logo} shippingto={shippingto} setshippingto={setshippingto}/>
         
        
            )}
            
                                                {tab == 'Users' && (
        <Users setmaintab={settab} tabname={tab} av={logo} shippingto={shippingto} setshippingto={setshippingto}/>
         
        
            )}
          {tab == 'Add_user' && 
          (      <Add_user setmaintab={settab} tabname={tab} av={logo} shippingto={shippingto} setshippingto={setshippingto}/>
          )}
          {tab == 'Cash' && 
          
          (      <Cash setmaintab={settab} tabname={tab} av={logo} shippingto={shippingto} setshippingto={setshippingto}/>
          )}
                    {tab == 'Finance' && 
          
          (      <Finance setmaintab={settab} tabname={tab} av={logo} shippingto={shippingto} setshippingto={setshippingto}/>
          )}
                              {tab == 'Catagorys' && 
          
          (      <Catagorys setmaintab={settab} tabname={tab} av={logo} shippingto={shippingto} setshippingto={setshippingto}/>
          )}

 
            
            </div>
        )
    }else{
        return <div className='text-white'>loading</div>
    }
    
}
export default Dashboard;