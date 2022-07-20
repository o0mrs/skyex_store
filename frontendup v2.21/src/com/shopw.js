import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Darkfoot from './parts/foobar';
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
      // console.log(Response.data)
    
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
    
<>
<NavBar/>

<div className='emo text-3xl font-bold	 m-7 mt-5 max-w-7xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"'>
{searchin.length == 0 && (
  <>
  Explore
  </>
)}
{searchin.length > 0 && (
  <>
  {searchin}
  </>
)}
</div>
<div className='grid place-items-center'>
<div className="form-control w-full max-w-xs">
  <div className="input-group p-2 rounded-2xl bg-gray-100 h-12">
  <button className="text-gray-500 pl-2 pr-1">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <input type="text" placeholder="Search for products" className="border-0 input focus:outline-none h-12 -mt-2 border-transparent focus:border-transparent focus:ring-0  bg-gray-100" value={searchin} onChange={(e)=>{setsearchin(e.target.value)}}/>

  </div>
</div>
<div className="px-2 max-w-[100vw]">
<div className=" focus:outline-none mt-3 h-10 elative w-auto max-w-96 flex gap-6 scrollbar-hide snap-x  scroll-p-8 hover:scroll-p-0 will-change-scroll overflow-x-auto ">
{catagorys.map((git) => {
  if(activetab == git.id){
    return(
      <div key={git.id} className="  tab snap-normal scrollbar-hide snap-center shrink-0  text-black border-b border-black" onClick={()=>{setactivetab(git.id)}}>{git.name}</div> 
    )
  }
  return(
    <div key={git.id} className="tab snap-normal scrollbar-hide snap-center shrink-0 " onClick={()=>{setactivetab(git.id)}}>{git.name}</div>
  )
})}
</div>
</div>

</div>
<center>

          <>
<div className="relative mt-4 rounded-xl justify-center grid overflow-auto scrollbar-hide">  
  <div className="relative w-auto max-w-96 flex gap-6 scrollbar-hide snap-x  scroll-p-8 hover:scroll-p-0 will-change-scroll overflow-x-auto pb-14">

          {products.map((product) =>{
            const imgp = JSON.parse(product.media);
          
            if(imgp.length > 0){
              
            
            const img = imgp[0].image
            if(product.for === activetab){
              if(products.length == 0){
return(
  <>
  There's no products in this Store
  </>
)
              }else if(products.length == 1){
                return (
                  <>
     <div onClick={()=>{navigate('/product/'+ product.id, { replace: false })}} key={product.id} className="snap-normal scrollbar-hide justify-center snap-center shrink-0 first:pl-8 last:pr-8">
        <img className="shrink-0 w-48 h-52 object-cover rounded-lg shadow-xl bg-white" src={img} />
        <span className="float-left m-2">{product.name}</span>
        <span className="float-right m-2">{product.price}$</span>
      </div>
        
                
                  </>
                )
              }else if(products.length > 1){
              return (
                <>
   <div onClick={()=>{navigate('/product/'+ product.id, { replace: false })}} key={product.id} className="snap-normal scrollbar-hide snap-center shrink-0 first:pl-8 last:pr-8">
      <img className="shrink-0 w-48 h-52 object-cover rounded-xl shadow-sm bg-white" src={img} />
      <div className="text-left m-2 roboto ">{product.name}</div>
      <div className="text-left -mt-1 m-2 text-gray-500">{product.price}$</div>
    </div>
      
              
                </>
              )}

            }
            }else if(imgp.length == 0){
              if(product.for === activetab){
                if(products.length == 0){
  return(
    <>
    There's no products in this Store
    </>
  )
                }else if(products.length == 1){
                  return (
                    <>
   <div onClick={()=>{navigate('/product/'+ product.id, { replace: false })}} key={product.id} className="snap-normal scrollbar-hide snap-center shrink-0 first:pl-8 last:pr-8">
      <img className="shrink-0 w-48 h-52 object-cover rounded-lg shadow-xl bg-white" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRiaxVlv_hi5y9807GnQ8XbtzHEuVv3CYjg&usqp=CAU'} />

    </div>
      
          
                  
                    </>
                  )
                }else if(products.length > 1){
                return (
                  <>
   <div onClick={()=>{navigate('/product/'+ product.id, { replace: false })}} key={product.id} className="snap-normal scrollbar-hide snap-center shrink-0 first:pl-8 last:pr-8">
      <img className="shrink-0 w-48 h-52 object-cover rounded-lg shadow-xl bg-white" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRiaxVlv_hi5y9807GnQ8XbtzHEuVv3CYjg&usqp=CAU'} />

    </div>
      
        
                
                  </>
                )}
  
              }
              return (
                // 
                <>

              
                </>
              )
            }
          })}
               <div onClick={()=>{navigate('/shop/category/' + activetab, { replace: false })}}  className="snap-normal scrollbar-hide justify-center snap-center shrink-0 first:pl-8 last:pr-8">
        <div className="shrink-0 w-48 h-52 object-cover rounded-lg bg-[#00000080]">
          <div className="hero roboto pt-[4.8rem] font-bold text-white">
          <i className="fa-solid fa-eye text-4xl"></i>
            View All
          </div>
        </div>
        <span className="float-left m-2"></span>

      </div>
          </div>
          
          </div>

          </>

</center>
<div className='emo text-2xl font-semibold	 m-7  -mt-12 max-w-7xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"'>
Categories
</div>
<div className='relative  justify-center grid  scrollbar-hide'>
<div className=' p-3 -mt-5 relative flex gap-6 scrollbar-hide snap-x  scroll-p-8 hover:scroll-p-0 will-change-scroll overflow-x-auto pb-14'>

<div className='w-fusll h-52 w-[21rem] max-w-sm rounded-[1.5rem] border bg-gradient-to-r to-[#2C3E50] from-[#44484c] flex snap-normal scrollbar-hide snap-center shrink-0 first:pl-1 last:pr-1'>
    <div>
      <div className='text-white roboto m-7 mt-12'>
      Limted Edition
      <div className='text-3xl'>
        Skyex originals
      </div>

      </div>
    </div>
    <div className=' pt-6 pr-2 max-h-[2rem]'>
    <img src='/shir.png' className='md:h-40'></img>
      
    </div>
  </div>
  <div className='w-fusll h-52 w-[21rem] max-w-sm rounded-[1.5rem] border bg-gradient-to-r from-[#161f27] to-[#22374a] flex snap-normal scrollbar-hide snap-center shrink-0 first:pl-1 last:pr-1'>
    <div>
      <div className='text-white roboto m-7 mt-12'>
      Hot
      <div className='text-3xl'>
        Summer collection
      </div>

      </div>
    </div>
    <div className=' pt-6 pr-2 max-h-[2rem]'>
    <img src='/shir.png' className='md:h-40'></img>
      
    </div>
  </div>


</div>
</div>

<Darkfoot />
   

 </>
  )}else if(state == 'loading'){
    return(
      <>
      <NavBar />
      <div className="ml-[50%] mt-[30vh]">
        <div className="snippet" data-title=".dot-pulse">
          <div className="stage">
            <div className="dot-pulse"></div>
          </div>
        </div>
      </div>
</>
    )

  }
}
export default Shopw
