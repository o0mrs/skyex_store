import axios from 'axios'
import { React,useEffect,useState, useCallback} from "react"
import { useNavigate } from 'react-router-dom'
import Loading from './loading'
import Cookies from 'universal-cookie'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Popup from 'reactjs-popup';
const Cash = ({tabname,av})=>{
    const [logo, setlogo] = useState(av)
    const cookies = new Cookies();
      const [tab, settab] = useState('project')
      const userToken = cookies.get('userToken')
      const [newalart,setnewalart] = useState([])
      const [cart, setcart] = useState([])
      const navigate = useNavigate();
      const handle = useFullScreenHandle();
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

<div className='h-[100%]'>
<div className='grid place-items-center  h-[100%] '>

<div className='grid  h-52 place-items-center'>
<i  class="fa-solid  fa-lock text-9xl mt-24  text-white"></i>
<div class="form-control mt-12">
  <div class="input-group">
    <input type="text" placeholder="Pass code" class="input input-bordered bg-base-300" />

    <button class="btn text-xsf text-white" onClick={handle.enter}>
Go
    </button>
  </div>
</div>


</div>
<FullScreen handle={handle}>
    {handle.active == true &&(
   <div className='fullofsh mt-0 h-screen'>
   <div className='mt-0 '>
   <div className='text-2xl roboto   w-32 m-6'>
        Skyex
        </div>
        <div className="float-right -mt-[4.9rem] text-white">

    <div className="dropdown dropdown-end  ">
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
<div className="w-screen  h-[100%] flex">
    <div className=" h-[100%] w-[65%]">
    <div className="  p-6 pt-3 flex">

      <div onClick={()=>{setcart([...cart,{id:cart.length,name:'Anything',icon:'fa-solid fa-box-archive' }])}} className="rounded-xl bg-[#072d43] p-5 ">
        Anything
      </div>
      </div>
      <input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal ">
  <div class="modal-box bg-base-300">
    <div>
    <h3 class="font-bold text-lg">Tools</h3>

    </div>
    {/* <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
    <div class="modal-action">
      <label for="my-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>
    </div>
    <div className="   h-[100%] w-[34%] bg-[#0a0b0d] ml-2 -mt-[5.24rem] rounded-lg">
      <div className=" mt-[1.5rem] bosrder ml-3">
      {/* <i class="fa-solid text-xl text-red-700 fa-lock"></i> */}
<i  onClick={handle.exit} class="fa-solid cursor-pointer fa-lock text-md ml-2 text-white"></i>
<i   class="fa-solid cursor-pointer fa-magnifying-glass text-md ml-4 text-white"></i>
<i class=""></i>
      </div>
      {cart.length == 0 &&(
      <div className="grid h-full   place-items-center">
        
      <div className="h-[8rem] -mt-24  grid place-items-center">
        <div>
        <i class="fa-solid  text-5xl text-gray-400 fa-basket-shopping"></i>
        </div>
        <div className="roboto text-gray-400">

      Shopping cart empty
        </div>

      </div>

    </div>
      )}
            {cart.length > 0 &&(
              <div className="grid  mt-12 overflow-y-auto max-h-[75%]  px-4 ">
                {cart.slice(0).reverse().map((gf,i)=>{ return(
                <div className="bg-[#101214] mt-3 py-2   rounded-lg ease-out duration-300">
                <i class={" ml-4 text-lg " +gf.icon}></i>
                <span className="text-md ml-3 ">{gf.name} {gf.id}</span>
                <i onClick={()=>{
                  setcart(cart.filter(obj=>obj.id !== gf.id))
                }} class={" mr-4 text-lg float-right fa-solid fa-xmark cursor-pointer"}></i>
                </div>
                )})}

                
                </div>
            )}
      {cart.length > 0 &&(
        <div className="  w-[34%] pl-2 pb-4 mt[25vh] rb h-[13w%] ">
          <div className=" grid mr-2">
          <button className="btn btn-warning bg-[#a97515] focus:bg-[#a97515] focus:border-[#a97515] hover:bg-[#a97515] hover:border-[#a97515] border-[#a97515] btn-md mr-2 text-white w-full mb-2  "><label for="my-modal" class="btn bg-[#a97515] focus:bg-[#a97515] w-full h-full focus:border-[#a97515] hover:bg-[#a97515] hover:border-[#a97515] btn-xs text-white text-lsm border-[#a97515] modal-button">Tools</label></button>

          </div>
<div className=" grid grid-cols-3">

<button className="btn btn-active btn-md mr-2 text-white ">Cash</button>
<button className="btn btn-active btn-md mr-2   text-white">Card</button>
<button onClick={()=>{setcart([])}} className="btn  btn-error bg-red-900 border-red-900 focus:bg-red-900 focus:border-red-900 hover:bg-red-900 hover:border-red-900 btn-md mr-2 text-white">Clear</button> 
</div>
</div>
      )}

    </div>
</div>
   </div>
    )}
 
       
      </FullScreen>

</div>
</div>
        </div>
</div>)}else if(tab == 'loading'){
return(
  <>
<Loading t={tab} logo={logo}/>
  </>
)
}
}
export default Cash;