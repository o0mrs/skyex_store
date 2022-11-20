import { useEffect, useState } from "react";
import { useNavigate,useParams } from 'react-router-dom'
const Dnavbar = ({setmaintab})=>{
    const [open, setopen] = useState(0)
    const [tab,setTab] = useState('OverView')
    const [s, sets] = useState('')
    let p = useParams()
    const navli = [
        {id:1,name:'OverView',icon:'fa-solid fa-chart-column',tc:''},
        {id:2,name:'Products',icon:'fa-solid fa-box'},
        {id:3,name:'Orders',icon:'fa-solid fa-boxes-packing -ml-1',tc:'pl-1 '},
        {id:12,name:'Cash',icon:'fa-solid fa-cash-register',tc:''},
        {id:4,name:'Account',icon:'fa-solid fa-user',tc:''},
        {id:5,name:'Payment',icon:'fa-solid fa-money-check-dollar',tc:''},
        {id:6,name:'Users',icon:'fa-solid fa-users',tc:''},
        {id:7,name:'Shipping',icon:'fa-solid fa-truck',tc:''},
        {id:8,name:'Logs',icon:'fa-solid fa-record-vinyl',tc:''},
        {id:9,name:'DropShipping',icon:'fa-solid fa-boxes-packing',tc:''},
        {id:10,name:'Finance',icon:'fa-solid fa-file-invoice-dollar ml-1',tc:''},
        {id:11,name:'Settings',icon:'fa-solid fa-gear ml-[0.2rem] ',tc:''},


    ]
//         
const navigate = useNavigate();
    useEffect(() => { 
        if(s.length == 0){
            sets('dd')

        }else{
            setmaintab(tab)

        }
    }, [tab])
    useEffect(()=>{
        if(p.tab){
            if(tab == p.tab){
          
            }else{
                setTab(p.tab)
            }

          }

  
      },[p])
return(
    <>
        <i onClick={()=>{
        if(open == 1){
            setopen(0)
        }else{
            setopen(1)
        }
    }} className="fa-solid md:hidden pt-[1.2rem] pl-5  text-white text-xl fa-bars-staggered"></i>
      <div className="sm:hidden md:block text-white roboto">
<div className="grid p-4 pl-7 border-r border-gray-900">
{open == 1 && (
    <i onClick={()=>{
        if(open == 1){
            setopen(0)
        }else{
            setopen(1)
        }
    }} className="fa-solid cursor-pointer  ml-24 text-xl fa-bars-staggered"></i>
)}
{open == 0 && (
    <i onClick={()=>{
        if(open == 1){
            setopen(0)
        }else{
            setopen(1)
        }
    }} className="fa-solid cursor-pointer text-xl fa-bars-staggered"></i>
)}
<div className="mt-4 w-50%">
    {/* overview */}
    {navli.map((gf,i)=>{

        if(tab == gf.name){
return(
<>
<div className='flex mt-4 cursor-pointer' onClick={()=>{
    setTab(gf.name)
    navigate('/admin/dashboard/'+gf.name, { replace: false })
    } }>
    <div className='bg-accent rounded-full py-2 px-4  -ml-4 -mt-1 text-black'>
    <i className={"text-xl w-6 text-center " + gf.icon}></i>
        {open == 1 && (<><span className={"ml-2 mt-[0.19rem] font-[430] " +gf.tc}>{gf.name}</span></>)}
        </div>
        </div> 
    </>)
        }else{
            return(
<>
<div className='flex mt-4 cursor-pointer' onClick={()=>{
    setTab(gf.name)
    navigate('/admin/dashboard/'+gf.name, { replace: false })
    } }>
<i className={"text-xl w-6 " + gf.icon}></i>
    {open == 1 && (<><span className={"ml-2 mt-[0.19rem] font-[430]  " +gf.tc}>{gf.name}</span></>)}
    </div> 
</>

            )
        }
    }


        )}


</div>

</div>
    </div>
    {open == 1 &&(
    <div className=' md:hidden tl w-52 bg-[#111316] h-screen  absolute'>
<div>
    <div className='float-right'>
    <i onClick={()=>{
        if(open == 1){
            setopen(0)
        }else{
            setopen(1)
        }
    }}  className="fa-solid fa-xmark text-2xl p-5 text-white"></i>

    </div>

</div>
<div className='mt-16 ml-8'>
{navli.map((gf,i)=>{

if(tab == gf.name){
return(
<>
<div className='flex mt-4  cursor-pointer' onClick={()=>{
    setTab(gf.name)
    navigate('/admin/dashboard/'+gf.name, { replace: false })
}
     }>7
<div className='bg-accent rounded-full py-2 px-4  -ml-4 -mt-1 text-black'>
<i className={"text-xl w-6 text-center " + gf.icon}></i>
{open == 1 && (<><span className={"ml-2 mt-[0.19rem] font-[430] " +gf.tc}>{gf.name}</span></>)}
</div>
</div> 
</>)
}else{
    return(
<>
<div className='flex mt-4 cursor-pointer' onClick={()=>{
    setTab(gf.name)
    navigate('/admin/dashboard/'+gf.name, { replace: false })
}
     }>
<i className={"text-xl w-6 text-white " + gf.icon}></i>
{open == 1 && (<><span className={"ml-2 mt-[0.19rem] font-[430] text-white  " +gf.tc}>{gf.name}</span></>)}
</div> 
</>

    )
}
}


)}
</div>
    </div>
    )}

    </>
 
)
}
export default Dnavbar;