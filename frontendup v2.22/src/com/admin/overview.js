import axios from 'axios'
import { Component, React,useEffect,useState } from "react"
import Cookies from 'universal-cookie'
const cookies = new Cookies();

const Overview = ({setbar,bar,name,id,rank})=>{

const [username, setusername] = useState('')
const [password, setpassword] = useState('')
const [ordersnum, setordersnum] = useState('')
const [productsCount, setproductsCount] = useState('')
const [earn, setearn] = useState(0)
const [orderprog, setorderprog] = useState(0);
const [employeecardid, setemployeecardid] = useState('empliyeecard');
const handle_refreshorder = ()=>{
  setorderprog(1)
  setTimeout(() => {
  setorderprog(0)
  }, 5000);
}
var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(Number((a + "").charAt(0)))) return ""; a = Number((a + "").charAt(1)); return 1 == a ? "" : 2 == a ? "" : 3 == a ? "" : "" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = dayOfMonth + "  " + curMonth + " " + curYear;


// https://storeapi.skyex.me/overview
useEffect(()=>{
  const userToken = cookies.get('userToken')
  axios.post(window.$api + 'overview',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
    setordersnum(Response.data.orders)
    setproductsCount(Response.data.products)
    setearn(Response.data.earn)
    
  })
},[])
const handlesubmit = ()=>{
  
}

    return(
        <div className='bg-black'>
        {/* sm: md: lg: xl: */}
        <div id='d99' className="text-gray-900">
<div  className="bg-black  h-16 w-screen pl-5 text-gray-200 py-5 text-xl"><span id='font99'>DASHBOARD</span>
<span onClick={()=>{
 
if(bar == 'hidden'){
 setbar('')
 }else{
  setbar('hidden')
 }
  
  
  }}>
<i  className="fa-solid fa-bars float-right pr-3 pt-1"></i>

</span>
  </div>
<div>
  {/* <div className="w-32 h-32 bg-base-300 ml-9 shadow-xl">
Get started
  </div> */} 
  <div className="">
  <div className="grid sm:grid-cols-1 sm:place-items-center md:flex md:justify-center lg:justify-start md:grid-cols-4 md:ml-16 sm:ml-6 m-4">
    {/* card */}
<div id='cardearn' className='w-48  h-48 pl-8 rounded-3xl'>
<i className="fa-duotone fa-money-bills-simple"></i>
<div className='grid place-items-start mt-2  text-gray-400'>
<i className="fas fa-credit-card text-4xl "></i>
{/* <i className="fa-solid fa-00"></i> */}
<span className='mt-3'>Earnings</span>
<span className='text-white text-xl mt-7'>$1069</span>

</div>
</div>


    {/* card */}
    <div id='cardorders' className='w-48 sm:ml-0 md:ml-9 h-48 sm:mt-6 md:mt-0 pl-8 rounded-3xl'>
{/* <i className="fa-duotone fa-money-bills-simple"></i> */}
<div className='grid place-items-start mt-8  text-gray-400'>
<i className="fa-solid fa-newspaper text-4xl "></i>
<span className='mt-3'>Orders</span>
<span className='text-white text-xl mt-7'>1</span>
</div>
</div>
<div id='cardview' className='w-48 sm:ml-0 md:ml-9 h-48 sm:mt-6 md:mt-0 pl-8 rounded-3xl'>
{/* <i className="fa-duotone fa-money-bills-simple"></i> */}
<div className='grid place-items-start mt-8  text-gray-400'>
<i className="fa-solid fa-chart-line text-4xl "></i>
<span className='mt-3'>Views</span>
<span className='text-white text-xl mt-7'>68</span>

</div>
</div> 
  </div>
  <div>
    <center className='flex-0 justify-center'>
  <div className='lg:float-right ml-[] sm:mt-8 sm:max-w-sm sm:place-items-center sm:w-auto h-auto p-7 xl:w-96 lg:w-96 mr-8 rounded-3xl border flex-0  border-base-300 lg:-mt-56'>
    {/* empliyee card */}   
     <div id={employeecardid} onClick={()=>{
       if(employeecardid == 'empliyeecard'){
        setemployeecardid('empliyeecard2')
       }else{
        setemployeecardid('empliyeecard')
       }
     }} className='mb-12  h-44 p-4  rounded-xl'>
       <div className='text-xl text-left'>
     <i className="fa-solid fa-microchip "></i>
        
       </div>
       <div className='text-xl mt-4 text-left'>
      {id}
        
       </div>
       <div className=' mt-[2.8rem]'>
       <div id='font30' className='text-xl  text-left'>
          <span className='uppercase'>{name}</span>
      </div>
        <div className='-mt-[2rem]'>
          <div className='text-right'>Skyex
            </div></div>

      </div>

      </div>
{/* recent orders */}
    <div className='border-t pt-2 text-left border-base-300'>
      <div className='text-xl'>Recent orders 
      <div>

      {orderprog == 0 && (
      <div className='-mt-7'>
      <a  onClick={handle_refreshorder}><span  className="fa-solid  fa-arrow-rotate-right float-right mt-1"></span></a>
      </div>)} {orderprog == 1 && (
        <div className='-mt-7'>
      <span className="fa-solid  fa-arrow-rotate-right float-right mt-1 animate-spin	"></span>

        </div>
      
      )}
      </div>
      
      </div>
      <div className='text-gray-400 text-xs mt-8'>

        {dayOfMonth}  {curMonth}  {curYear}
        </div>
        <div className='mt-5 grid'>
        <div>
          <span className='text-3xl'>
          <i className="fa-solid fa-calendar-check"></i>
          <span className='text-sm '>
            {/* <div id='font1' className='-mt-8 font-light
 ml-8'>
            order#20290

            </div> */}
          </span>
          </span>

        </div>
        </div>
      </div>

      






  </div>
  </center>
  </div>

  </div>
</div>
        </div>

        </div>
    )

} 

export default Overview

