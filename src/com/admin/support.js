import {Link} from 'react-router-dom'
import axios from 'axios'
import { React,useEffect,useState } from "react"

const Support = ({setbar, bar})=>{

const [username, setusername] = useState('')
const [password, setpassword] = useState('')
const [ordersnum, setordersnum] = useState('')
const [productsCount, setproductsCount] = useState('')
const [earn, setearn] = useState(0)

useEffect(()=>{
  axios.post(window.$api + 'overview').then((Response)=>{
    setordersnum(Response.data.orders)
    setproductsCount(Response.data.products)
    setearn(Response.data.earn)
    
  })
},[])
const handlesubmit = ()=>{
  
}

    return(
        <>
        {/* sm: md: lg: xl: */}
        <div id='d2' className="text-gray-900">
<div className="bg-gray-900  h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Support <span onClick={()=>{
 
if(bar == 'hidden'){
 setbar('')
 }else{
  setbar('hidden')
 }
  
  
  }}>
<i  className="fa-solid fa-bars float-right pr-3 pt-1"></i>

</span></div>

<div>

</div>
        </div>

        </>
    )
} 
export default Support

