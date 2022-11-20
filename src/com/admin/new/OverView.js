import axios from 'axios'
import { React,useEffect,useState ,PureComponent } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
const OverView = ({tabname,av,name,id})=>{

  const data = [
    {
      name: '27/jul',
      Moneyin: 220,
      sales: 12,

    },
    {
      name: '28/jul',
      Moneyin: 2120,
      sales: 120,

    },
    {
      name: '29/jul',
      Moneyin: 200,
      sales: 100,
    },7

  ];
  
    const [logo, setlogo] = useState(av)
    const cookies = new Cookies();
      const [tab, settab] = useState('project')
      const userToken = cookies.get('userToken')
      //inputs
      const [earn, setearn] = useState(0)
      const [orderprog, setorderprog] = useState(0);
      const [employeecardid, setemployeecardid] = useState('be');

      const navigate = useNavigate();
      const handle_refreshorder = ()=>{
        setorderprog(1)
        setTimeout(() => {
        setorderprog(0)
        }, 5000);
      }
      const scan = async() =>{
      if ("NDEFReader" in window) {
          try {
              const ndef = new window.NDEFReader();
              await ndef.scan();
  
              // alert("Scan started successfully.");
              ndef.onreadingerror = () => {
                alert("Cannot read data from the NFC tag. Try another one?");
              };
  
              ndef.onreading = (event) => {
                  alert("NDEF message read.");
                  alert(event); //Find function below
              };
          } catch (error) {
            alert(`Error! Scan failed to start: ${error}.`);
          }
      }else{
        // alert(`You dont have nfc.`); 
      }
  };
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
      // useEffect(()=>{
      //   const userToken = cookies.get('userToken')
      //   axios.post(window.$api + 'overview',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
      //     setearn(Response.data.earn)
          
      //   })
      // },[])
      if(tab == 'project'){
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
<div>
<center className='flex-0 md:-mt-12 justify-center'>
  <div className='md:float-right sm:mt-8 sm:w-[95vw] h-auto p-7 md:w-[24rem]  md:mr-2  rounded-3xl border flex-0  border-base-300 '>
    {/* empliyee card */}   
     <div id='empliyeecard' onClick={()=>{
       if(employeecardid == 'be'){
        setemployeecardid('empliyeecard2')
        scan()
       }else{
        setemployeecardid('be')
       }
     }} className='mb-12  h-44 p-4  rounded-xl'>
       <div className='text-xl text-left'>
     <i className="fa-solid fa-microchip "></i>
        
       </div>
       <div className='text-xl mt-4 text-left'>
      {id}
        
       </div>
       <div className='-mt-3'>
       {employeecardid == 'empliyeecard2' && (<i className="fa-brands   fa-nfc-symbol text-2xl"></i>)}

       </div>
   
       <div id={employeecardid} className=' mt-[3.8rem]'>
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
      <div className='mt-[0.46rem]  float-right'>
      <span className="flex ">
  <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
  <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-sky-400 opacity-75"></span>
</span>
      {/* {orderprog == 0 && (
      <div className='-mt-7'>
      <a  onClick={handle_refreshorder}><span  className="fa-solid  fa-arrow-rotate-right float-right mt-1"></span></a>
      </div>)} {orderprog == 1 && (
        <div className='-mt-7'>
      <span className="fa-solid  fa-arrow-rotate-right float-right mt-1 animate-spin	"></span>

        </div>
      
      )} */}
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
  <div className='roboto h-96 md:w-80 sm:max-w-[100vw] sm:w-[100vw] text-xs mt-24 max'>
  <ResponsiveContainer width='100%' height="60%">

  <LineChart

          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          stroke="#8184d8"
        >

          <CartesianGrid strokeDasharray="3 3" stroke="#0a0b0d"/>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Moneyin" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
        </LineChart>    
        </ResponsiveContainer>    
            </div>

        </div>
</div>
)}else if(tab == 'loading'){
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
</>
  )
}
}
export default OverView;