import {Link} from 'react-router-dom'
import axios from 'axios'
import { React,useEffect,useState } from "react"
import Loading from '../loading'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'
const cookies = new Cookies();
const Logs = ({setbar, bar,setTabo})=>{ 
const navigate = useNavigate();
const [tab, settab] = useState('project')
const userToken = cookies.get('userToken')
const [logsList, setlogsList] = useState([])
useEffect(()=>{
    axios.post(window.$api + 'logs',{userToken: userToken ,limit:30}).then((Response)=>{
        if(Response.data.status == 0){
            cookies.remove("userToken")
            navigate('/admin/login', { replace: true })
          }else if(Response.data.status == 22){
            navigate('/admin/dashboard/noperm', { replace: false })
          
          }else{
            setlogsList(Response.data)
          }

    })
  },[])
  const load_100 = ()=>{
    axios.post(window.$api + 'logs',{userToken: userToken ,limit:100}).then((Response)=>{
        if(Response.data.status == 0){
            cookies.remove("userToken")
            navigate('/admin/login', { replace: true })
          }else if(Response.data.status == 22){
            navigate('/admin/dashboard/noperm', { replace: false })
          
          }else{
            setlogsList(Response.data)
          }

            })
  }
if(tab == 'project'){


    return(
        <>
        {/* sm: md: lg: xl: */}

        <div id='d99' className="text-gray-900">
<div id='c3' className="bg-gray-900   h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Logs <span onClick={()=>{
 
if(bar == 'hidden'){
 setbar('')
 }else{
  setbar('hidden')
 }
  
  
  }}>
<i  className="fa-solid fa-bars float-right pr-3 pt-1"></i>

</span></div>

<div>


<div className='grid place-items-center mt-5'>
<table className="border-collapse max-w-screen w-auto border text-sm border-green-800 ...">
  <thead>
    <tr>
      <th className="border border-green-600 p-2">made  by</th>
      <th className="border border-green-600 p-2">changed</th>
      <th className="border border-green-600 p-2">date</th>
      <th className="border border-green-600 p-2">ip</th>
    </tr>
  </thead>
  <tbody>
    {logsList.map(get =>{
     return(
         <>
                <tr key={get.id}>
                 <td className="border border-green-600 p-2">{get.made_by}</td>
                 <td className="border border-green-600 p-2">{get.wchange}</td>
                 <td className="border border-green-600 p-2">{get.date}</td>
                 <td className="border border-green-600 p-2">{get.ip}</td>
                 </tr>
         </>
     )

    })}

  </tbody>
</table>
<button onClick={load_100} className="border border-gray-500 rounded-xl px-3 py-2 mt-3">Load 100</button>
</div>
        </div>
        </div>

        </>
    )}else if(tab == 'loading'){
		return(
			<div id='d2' className="grid place-items-center w-screen">
			<Loading ></Loading>
			</div>
		)
	}
}
export default Logs

