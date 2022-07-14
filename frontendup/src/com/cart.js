import axios from 'axios'
import { React,useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import Darkfoot from './parts/foobar'
function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


const Cart = ({up,settabs,gg})=>{
    const navigate = useNavigate();
    const [tab, settab] = useState('loading')
    const [productsnum, setproductsnum] = useState(0)
    const [cart, setcart] = useState([])
    const [price, setprice] = useState(0)
    const [currency, setcurrency] = useState('')
    const [up2, setup2] = useState(0)


//payments

    useEffect(()=>{
      if(JSON.parse(sessionStorage.getItem('symbol')) == null){
        setTimeout(() => {
            if(JSON.parse(sessionStorage.getItem('symbol')) == null){
              axios.get(window.$api + 'currency').then((Response)=>{
                setcurrency(Response.data[0].currency)
                    
                  })
            }else{
  setcurrency(JSON.parse(sessionStorage.getItem('symbol')).name)

            }
        }, 1500);
    }else{
        setcurrency(JSON.parse(sessionStorage.getItem('symbol')).name)
    }




      
     
    },[])
    useEffect(()=>{

        //get subTotla
        console.log(gg)
        const gcart2 = JSON.parse(localStorage.getItem('cart'))
        if(gcart2){
          if(gcart2.length == 0){
            settab('app')
            setproductsnum(gcart2.length)
          }else{
          setproductsnum(gcart2.length)
          axios.post(window.$api + '/getsubtotal',{cart:gcart2}).then((Response)=>{
            settab('app')
            console.log(Response.data)
            const hh = Response.data
            var sum = null;
            let counter = 0
          setcart(hh)
  
            hh.map((g,i)=>{
              if(g.status == 200){
                if(i == hh.length - 1){
                  sum += g.price
                  console.log(sum)
                  console.log(sum)
                  setprice(sum)
                }else{
                  sum += g.price
                  console.log(sum)
  
                  console.log(sum)
                }
              }else{
                // we have problem with i
                if(i == hh.length - 1){
      
                  setprice(sum)
                }
                // set
              }
            })
            
      
          })}
        }else{
          settab('app')

        }

    },[up,up2,gg])
      if(tab == 'app'){

      
    return(
        <>
        
        <NavBar nup={setup2} cart={'hidden'}/>
        <center>
        <div className='h-[3.4rem] bg-base-200 shadow-xs w-screen'>
          <div className='h-[3.4rem] bg-base-200 shadow-xs w-screen max-w-2xl '>
          <div className='text-white pt-[0.9rem] ml-3'>
  <span  className='float-left cursor-pointer roboto'><i class="fa-solid fa-cart-shopping mr-1 text-left"></i>  Checkout</span>

<div className='text-right -mt-[1.5wdxewrem] mr-3'>

{price} {currency}
</div>
</div>

          </div>

        </div>

        </center>
        <div class="text-sm mt-2 grid roboto place-items-center breadcrumbs">
  <ul>
  <li onClick={()=>{settabs('sum')}} className="font-[450] cursor-pointer ">Summary</li> 
    <li onClick={()=>{settabs('app')}} className="font-[450] cursor-pointer ">Account</li> 
    <li onClick={()=>{settabs('ship')}} className="font-[450] cursor-pointer ">Shipping</li> 
    <li className='text-cyan-800'>Payment</li>
  </ul>
</div>
 
<div className='flex justify-center'>
    
    <div className='ml- -mt-8'>
    
    <div className="">
    {cart.length == 0 && (
    <>
<div className='grid place-items-center'>
<div>
    <img src="/empty_cart.webp" className='md:max-w-[40rem] w-ato'/>

    </div>
<div>
  <button class="btn btn-outline  text-base-300" onClick={()=>{
       navigate('/shop', { replace: false })
       window.scrollBy(0,-90000000);}}>continue shopping</button>
</div>
</div>

    </>
  
)}
{cart.length > 0 && (
  <div className=" pt-24  w-auto">
<div className="-mt-16 hero  text-2xl mb-10">
</div>
<div className=" px-16 py-6 rounded-xl bg-base-200 text-white shadow-md sm:min-w-[80vw] lg:min-w-[40rem]">
        <div className='emo text-xl -mx-12  font-bold mt-6"'>
          Summary
          </div>
<div className='-mx-12 mt-4 emo'>
{cart.map((g,i)=>{
    console.log(g)
    
    const ff = JSON.parse(g.array)[0]
    console.log(ff)
    if (ff.status == 405){
      return(
        <div className=' mb-1'>
     <div data-tip="NOT AVAILABLE" className="tooltip  tooltip-error -ml- -mr-4"> <span className='mt-2'>    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 ">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
        </svg> </span> </div> <span className='ml-6 -mt-2'>{ff.name}</span><span className='ml-6 float-right text-green-600 mt-2'> {0} {currency}</span>
        </div>
      )
    }else if (g.status == 404){
      return(
        <div className=' mb-1'>
     <div data-tip="OUT OF STOCK" className="tooltip  tooltip-error -ml- -mr-4"> <span className='mt-2'>    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 ">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
        </svg> </span> </div> <span className='ml-6 -mt-2'>{ff.name}</span><span className='ml-6 float-right text-green-600 mt-2'> {0} {currency}</span>
        </div>
      )
    }else if(g.status == 200){
      return(
        <div id='bfont ' className=''>
        <span>{ff.name}</span><span className='ml-4 float-right text-green-600'> {g.price} {currency}</span>
        </div>
      )
      
    }
    
    
    
    })}
</div>
<div className=" mt-4 -mx-12 ">
  <span className='emo font-bold'>
    SubTotal<div className='text-right -mt-6 text-green-600'> {price} {currency}</div>

  </span>
</div>
</div>


</div>
)}



    {/* <div style={{backgroundColor: g.color.color}} className="h-6 w-6 rounded-full absolute -ml-[10.3rem] mt-2"></div> */}

    </div>
    </div>

</div>
<center>
{cart.length > 0 && (<div className="btn btn-active mt-7 mb-3 text-white" onClick={() =>{settabs('app')}} role="button" aria-pressed="true">Next</div> 
)}

</center>

<Darkfoot />
        </>
  


        





    )}else if (tab == 'loading'){
      return(
        <>
              <NavBar up={up}/>
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

export default Cart
