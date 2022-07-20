import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { React,useEffect,useState } from "react"
import Cookies from 'universal-cookie'
import Loading from '../loading'
const cookies = new Cookies();
const Catagorys = ({setbar, bar,setTab})=>{
  //general
  const navigate = useNavigate();
  const [tabb, settabb] = useState('loading')
  const userToken = cookies.get('userToken')
//
//Edit catagory
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
//useEffect
useEffect(()=>{
  if(tabb == 'loading'){
    axios.post(window.$api + 'getcatagorys',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
      console.log(Response.data)
      settabb('list')
  
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

},[tabb,refresh])
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
      settabb('loading')
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
      settabb('loading')
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
      settabb('loading')
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
if(tabb == 'list'){
    return(
        <>
        {/* sm: md: lg: xl: */}
        <div id='d99' className="bg-black">
<div id='c3' className="bg-gray-900  h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Catagory <span onClick={()=>{
 
if(bar == 'hidden'){
 setbar('')
 }else{
  setbar('hidden')
 }
  
  
  }}>
<i  className="fa-solid fa-bars float-right pr-3 pt-1"></i>

</span></div>

<div>
<i className="fas fa-arrow-left ml-4 text-xl" onClick={()=>{setTab('settings')}}></i>
<div>
<div className="grid">
  <div>
  <button className="btn mr-3 float-right " onClick={()=>{settabb('Add')}}> <i className="fas fa-plus mr-2"></i>  Add Category</button> 
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
          <th className='text-cyan-600' onClick={()=>{
            settoEditI(get.id)
            settoEditN(get.name)
            settoEditV(get.display)
            setorderedit(get.corder)
            seto2F('False')
            seto1T('')
            setedithomepage(get.displays)
            settabb('edit')
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
          <th className='text-cyan-600' onClick={()=>{
            settoEditI(get.id)
            settoEditN(get.name)
            setorderedit(get.corder)
            settoEditV(get.display)
            setedithomepage(get.displays)
            seto2F('False')
            seto1T('')
            settabb('edit')
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
          <th className='text-cyan-600' onClick={()=>{
            settoEditI(get.id)
            settoEditN(get.name)
            settoEditV(get.display)
            setorderedit(get.corder)
            setedithomepage(get.displays)
            seto2F('False')
            seto1T('')
            settabb('edit')
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
          <th className='text-cyan-600' onClick={()=>{
            settoEditI(get.id)
            settoEditN(get.name)
            settoEditV(get.display)
            setorderedit(get.corder)
            setedithomepage(get.displays)
            seto2F('False')
            seto1T('')
            settabb('edit')
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

        </>
    )}else if(tabb == 'loading'){
return(
  <>
  <Loading />
  </>
)
    }else if(tabb == 'edit'){
      return(


      <>
        {/* sm: md: lg: xl: */}
        <div id='d99' className="bg-black">
<div id='c3' className="bg-gray-900  h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Edit Catagory <span onClick={()=>{
 
if(bar == 'hidden'){
 setbar('')
 }else{
  setbar('hidden')
 }
  
  
  }}>
<i  className="fa-solid fa-bars float-right pr-3 pt-1"></i>

</span></div>

<div>
<span className="float-right text-blue-500 mr-3" onClick={handleCatagorySave}>{SText}</span>
<i className="fas fa-arrow-left ml-4 text-xl" onClick={()=>{settabb('loading')
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

        </>
            )
    }else if(tabb == 'Add'){
      return(


      <>
        <div id='d99' className="bg-black">
<div id='c3' className="bg-gray-900  h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Add Catagory <span onClick={()=>{
 
if(bar == 'hidden'){
 setbar('')
 }else{
  setbar('hidden')
 }
  
  
  }}>
<i  className="fa-solid fa-bars float-right pr-3 pt-1"></i>

</span></div>

<div>
<span className="float-right text-blue-500 mr-3" ></span>
<i className="fas fa-arrow-left ml-4 text-xl" onClick={()=>{settabb('loading')}}></i>
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

        </>
            )
    }
} 
export default Catagorys

