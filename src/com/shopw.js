import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Darkfoot from './parts/foobar';
import {Helmet} from "react-helmet";

const Shopw = ({match})=>{
  const navigate = useNavigate();
  const [state, setstate] = useState('loading')
  const [catagorys, setcatagorys] = useState([])
  const [products, setproducts] = useState([])
  const [limit, setlimit] = useState(10)
  const [collectionnumber, setcollectionnumber] = useState(0)
  const [activetab, setactivetab] = useState()
  const [searchin, setsearchin] = useState('')
  useEffect(()=>{
    window.scrollBy(0,-339999);
  })
  useEffect(()=>{

axios.post(window.$api + 'getcatagorysshop',{limit:limit}).then((Response)=>{
  setcollectionnumber(1)
  if(Response.data.status){
    // console.log(Response.data.status)
  }else{
    if(Response.data){
    setcatagorys(Response.data)
    setactivetab(Response.data[0].id)
    axios.post(window.$api + 'getproductsshopw',{limit:limit}).then((Response)=>{
      console.log(Response.data)
    
      setcollectionnumber(2)
      if(Response.data.status){
    
      }else{
        setproducts(Response.data)
        setcollectionnumber(2)
      }
    if(Response.data.length == 0){
      setcollectionnumber(2)
    }
    })
    }

  }
})
  },[limit])
  
  useEffect(()=>{
    if(collectionnumber == 2){
      setstate('project')
    }else{
      setstate('loading')
    }
  },[collectionnumber,products,catagorys])



  






if(state == 'project'){
  return (
    
<div className="bg-[#171718]">
<NavBar/>
<div className='w-full mt-10 sm:grid md:hidden'>
  <div className='text-white text-5xl leading-relaxed
 Poppins w-full px-2 grid place-items-center text-center'>
    WHAT THE <br /> <span className='text-accent'>FUCK</span>IS REALLY <br /> GOING ON
  </div>
  <div>
    <img className='-rotate-d3	pxd-6' src='main.png' />
  </div>
  <div className='grid w-full'>
<div className='w-full grid text-xl place-items-center Poppins px-6 text-white'>
<span className='text-accent text-center text-5xl '>HAVE </span><br />You ever been in a situation were you thought to yourself wtf is fuck is really going on but you couldn't say it well now your shirt could.
</div>
<div>
  
</div>
  </div>
</div>


<Darkfoot />
   

 </div>
  )}else if(state == 'loading'){
    return(
      
      <div className="bg-[#171718]">
                    {/* <Helmet> */}
            {/* <title>WTF IS GOING ON</title> */}
            <style>
            <style>
        {
          ` body{
                background-color: #171718;
                color: white;
                font-size: 2em
            }`
        }
      </style>
            </style>
            {/* </Helmet> */}
      <NavBar />
      <div className="ml-[50%] bg-[#171718 mt-[30vh]">
        <div className="snippet" data-title=".dot-pulse">
          <div className="stage">
            <div className="dot-pulse"></div>
          </div>
        </div>
      </div>
</div>
    )

  }
}
export default Shopw