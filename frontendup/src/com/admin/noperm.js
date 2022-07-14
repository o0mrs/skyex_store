import React from "react"
const NoPerm = ({setbar, bar})=>{ 
    return(
        <>
        <div id='d99' className="text-gray-900">
<div id='c3' className="bg-gray-900  h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Astatine<span onClick={()=>{
 
if(bar == 'hidden'){
 setbar('')
 }else{
  setbar('hidden')
 }
  
  
  }}>
<i  className="fa-solid fa-bars float-right pr-3 pt-1"></i>

</span></div>

<div className='grid'>
    <div className='text-5xl text-center text-red-700 mb-2 mt-32'>
        403
    </div>
<div id='f2' className='grid place-items-center text-2xl'>
You Don't Have Access To This Page

</div>
</div>
        </div>

        </>
    )
}
export default NoPerm

