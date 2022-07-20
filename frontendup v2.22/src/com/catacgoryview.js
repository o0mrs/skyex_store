import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import Darkfoot from './parts/foobar';
const CatagoryView = ({match})=>{
  const navigate = useNavigate();
  const [state, setstate] = useState('loading')
  const [catagorys, setcatagorys] = useState([])
  const [products, setproducts] = useState([])
  const [limit, setlimit] = useState(10)
  const [collectionnumber, setcollectionnumber] = useState(0)
  const [activetab, setactivetab] = useState()
  const perm = useParams()
  const catname = perm.name
  useEffect(()=>{
    window.scrollBy(0,-339999);
  })
  useEffect(()=>{

axios.post(window.$api + 'getcatagorysshoptoo',{id:catname}).then((Response)=>{
  setcollectionnumber(1)
  if(Response.data.status){
    // console.log(Response.data.status)
  }else{
    if(Response.data){
    setcatagorys(Response.data)
    axios.post(window.$api + 'getproductsbycategory',{limit:limit,id:catname}).then((Response)=>{
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
    
<>
<NavBar/>

<div className='emo text-3xl font-bold	 m-7 mt-5 max-w-7xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"'>
{catagorys[0].name}
</div>
<div className='grid place-items-center'>
<div class="form-control w-full max-w-xs">
  <div class="input-group p-2 rounded-2xl bg-gray-100 h-12">
  <button class="text-gray-500 pl-2 pr-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <input type="text" placeholder="Search for products" class="border-0 input focus:outline-none h-12 -mt-2 border-transparent focus:border-transparent focus:ring-0  bg-gray-100" />

  </div>
</div>
<div class="px-2 max-w-[100vw]">
<div class=" focus:outline-none mt-3 h-10 elative w-auto max-w-96 flex gap-6 scrollbar-hide snap-x  scroll-p-8 hover:scroll-p-0 will-change-scroll overflow-x-auto ">

</div>
</div>

</div>
<center>

          <>
{/* <div className="relative mt-4 rounded-xl justify-center grid overflow-auto scrollbar-hide">  
  <div className="">

          {products.map((product) =>{
            const imgp = JSON.parse(product.media);
          
            if(imgp.length > 0){
              
            
            const img = imgp[0].image
            if(product.for == activetab){
              if(products.length == 0){
return(
  <>
  There's no products in this Store
  </>
)
              }else if(products.length == 1){
                return (
                  <>
     <div onClick={()=>{navigate('/product/'+ product.id, { replace: false })}} key={product.id} className="">
        <img className="shrink-0 w-48 h-52 object-cover rounded-lg shadow-xl bg-white" src={img} />
        <span className="float-left m-2">{product.name}</span>
        <span className="float-right m-2">{product.price}$</span>
      </div>
        
                
                  </>
                )
              }else if(products.length > 1){
              return (
                <>
   <div onClick={()=>{navigate('/product/'+ product.id, { replace: false })}} key={product.id} className="">
      <img className="shrink-0 w-48 h-52 object-cover rounded-xl shadow-sm bg-white" src={img} />
      <div className="text-left m-2 roboto ">{product.name}</div>
      <div className="text-left -mt-1 m-2 text-gray-500">{product.price}$</div>
    </div>
      
              
                </>
              )}

            }
            }else if(imgp.length == 0){
              return (
                // 
                <>
   <div onClick={()=>{navigate('/product/'+ product.id, { replace: false })}} key={product.id} className="snap-normal scrollbar-hide snap-center shrink-0 first:pl-8 last:pr-8">
      <img className="shrink-0 w-48 h-52 object-cover rounded-lg shadow-xl bg-white" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRiaxVlv_hi5y9807GnQ8XbtzHEuVv3CYjg&usqp=CAU'} />

    </div>
      
              
                </>
              )
            }
          })}

          </div>
          
          </div> */}
<div className="relative -mt-4 rounded-xl justify-center grid  overflow-auto scrollbar-hide">  
  <div className="grid grid-cols-2 p-5 max-w-[100vw]">

          {products.map((product) =>{
            const imgp = JSON.parse(product.media);
          
            if(imgp.length > 0){
              
            
            const img = imgp[0].image
            if(product.for == activetab){
              if(products.length == 0){
return(
  <>
  There's no products in this Store
  </>
)
              }else if(products.length == 1){
                return (
                  <>
     <div onClick={()=>{navigate('/product/'+ product.id, { replace: false })}} key={product.id} className="">
        <img className="h-52 object-cover rounded-lg shadow-xl bg-white" src={img} />
        <span className="float-left m-2 roboto">{product.name}</span>
        <span className="float-right m-2">{product.price}$</span>
      </div>
        
                
                  </>
                )
              }else if(products.length > 1){
              return (
                <>
                <div className="hero">
                <div onClick={()=>{navigate('/product/'+ product.id, { replace: false })}} key={product.id} className="mb-4  w-auto">
      <img className="object-cover h-52 rounded-xl shadow-sm bg-white" src={img} />
      <span className="float-left m-2 roboto">{product.name}</span>
        <span className="float-right m-2 text-gray-600"> {sessionStorage.getItem('symbol')}{product.price}</span>
    </div>
                </div>

      
              
                </>
              )}

            }
            }else if(imgp.length == 0){
              return (
                // 
                <>
   <div onClick={()=>{navigate('/product/'+ product.id, { replace: false })}} key={product.id} className="snap-normal scrollbar-hide snap-center shrink-0 first:pl-8 last:pr-8">
      <img className="shrink-0 w-48 h-52 object-cover rounded-lg shadow-xl bg-white" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRiaxVlv_hi5y9807GnQ8XbtzHEuVv3CYjg&usqp=CAU'} />

    </div>
      
              
                </>
              )
            }
          })}

          </div>
          
          </div>
          </>

</center>
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
export default CatagoryView
