import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Cookies from 'universal-cookie';
import Darkfoot from './parts/foobar';
const Productsin = ({})=>{
  const perm = useParams()
  const navigate = useParams()
  const id = perm.id
  const [tab, settab] = useState('loading')
  const [name, setname] = useState('')
  const [discription, setdiscription] = useState('')
  const [catagorys, setcatagorys] = useState([])
  const [imgss, setimgss] = useState([])
  const [obj, setobj] = useState(0)
  const [currency, setcurrency] = useState('')
  const [value, setValue] = useState(3);
  const [options, setoptions] = useState([])
  const [colors, setcolors] = useState([])
  const [color, setcolor] = useState({state: 'null'})
  const [sizes, setsizes] = useState([])
  const [size, setsize] = useState({state: 'null'})
  const [op, setop] = useState({state: 'null'})
  const [coptions, setcoptions] = useState([])
  const [coption, setcoption] = useState({state: 'null'})
  const [up, setup] = useState(0)
  const [sku,setsku] = useState('')
//price
const [price, setprice] = useState(0)
const [sprice, setsprice] = useState(0)
const [opprice, setopprice] = useState(0)
const [coprice, setcoprice] = useState(0)
const [oprice, setoprice] = useState(0)
// det
const [returnPolicy,setreturnPolicy] = useState("This product doesn't have a rerurn policy ")
//general
const [alartstate, setalartstate] = useState('')
const [tryit,settryit] = useState()
const [sizeguide,setsizeguide] = useState()
const handle_add_cart = ()=>{
  var foundValuea = colors.filter(obj=>obj.enable === true);
  var foundValueb = sizes.filter(obj=>obj.enable === true);
  var foundValuec = coptions.filter(obj=>obj.enable === true);
if(colors.length > 0 && color.state == 'null'&& foundValuea.length > 0){
  setalartstate('Please select a color')
  setTimeout(() => {
    setalartstate('')
  }, 2000);
}else if(sizes.length > 0 && size.state == 'null' && foundValueb.length > 0){
  setalartstate('Choose your size')
  setTimeout(() => {
    setalartstate('')
  }, 2000);
}else if(coptions.length > 0 && coption.state == 'null' && foundValuec.length > 0){
  console.log(coptions)
  setalartstate('You forgot one of the options')
  setTimeout(() => {
    setalartstate('')
  }, 2000);
}else{
  setalartstate('Item Has been added successfully')
  setTimeout(() => {
    setalartstate('')
  }, 2000);
  const cookies = new Cookies();
  const current = new Date();
  const nextYear = new Date();
  nextYear.setFullYear(current.getFullYear() + 80);
  const is_cart2 = localStorage.getItem('cart')
  const is_cart3 = JSON.parse(localStorage.getItem('cart'))

  if(is_cart2){
    const cid = is_cart3.length + 1
const is_cart = JSON.parse(localStorage.getItem('cart'))
    const item_set = JSON.stringify([...is_cart,{cid:cid,prid:id,size:size,color:color,op:coption,price:price,name:name,img:imgss[0].image}])
    localStorage.setItem('cart',item_set)
  }else{
    const cid = 0
    const item_set = JSON.stringify([{cid:cid, prid:id,size:size,color:color,op:coption,price:price,name:name,img:imgss[0].image}])
    localStorage.setItem('cart',item_set)
  }
  setup(up+1)
}
}
useEffect(()=>{
  setprice(parseFloat(oprice) + parseFloat(sprice) + parseFloat(coprice) + parseFloat(opprice))
},[sprice,coprice,opprice])
  useEffect(()=>{
    axios.post(window.$api + '/idproduct',{
  productid: id
}).then((Response)=>{
  if(Response){
    if(Response.data.result.length == 0){
      navigate('/shop', { replace: true })
    }else{
    setname(Response.data.result[0].name)
    setdiscription(Response.data.result[0].details)
    setoprice(Response.data.result[0].price)
    setprice(Response.data.result[0].price)
    if(Response.data.result[0].sku != null){
      setsku(Response.data.result[0].sku)
    }else{
      setsku('')
    }
    if(Response.data.result[0].return == null){
      setreturnPolicy("This product doesn't have a rerurn policy ")
    }else{
      setreturnPolicy(Response.data.result[0].return)
    }
    var cat = JSON.parse(Response.data.result[0].catagorys);
    setcatagorys(cat)
    var im = JSON.parse(Response.data.result[0].media);
    if (im.length === 0 || im === null){
      setimgss([{id: "1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRiaxVlv_hi5y9807GnQ8XbtzHEuVv3CYjg&usqp=CAU"}])
     
    }else{
      setimgss(im)
    }

    axios.get(window.$api + '/currency').then((Response)=>{
      setcurrency(Response.data[0].currency)
      axios.post(window.$api + '/options',{
        id: id
      }).then((Response)=>{
        setoptions(Response.data)
        settab('app')
      })

    })

    }

  }
})
  },[])
useEffect(()=>{
  axios.get('https://api.printful.com/countries').then((Response)=>{
    // setcountries(Response.data.result)
})  
  options.map((g,i)=>{
    if(g.Sgroup == 2 && g.Sto == id){
      var co = JSON.parse(g.array);
      setcolors(co)
    }else if(g.Sgroup == 1 && g.Sto == id){
      var co = JSON.parse(g.array);
      setsizes(co)
    }else if(g.Sgroup == 3 && g.Sto == id){
      var co = JSON.parse(g.array);
      setcoptions(co)
    }
      })
},[options])
  if(tab == 'app'){
  return(
  <>
      <NavBar up={up}/>
<div>
{alartstate.length > 0 && alartstate == 'Item Has been added successfully' && (
  <div className="alert ease-in-out duration-300 delay-75	 alert-success shadow-lg max-w-xs float-right proalart rounded-r-none text-left top-[1rem] md:top-[3.4rem]">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    {alartstate}
  </div>
</div>

)}

{alartstate.length > 0 && alartstate !== 'Item Has been added successfully' && (
  <div className="alert alert-warning shadow-lg max-w-xs float-right proalart rounded-r-none text-left top-[1rem] md:top-[3.4rem]">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    {alartstate}
  </div>
</div>

)}


<div className="text-sm  scrollbar-hide breadcrumbs m-3 ml-8 h-auto flex">
  <ul>
    {/* {catagorys.map((git,i)=>{
      return (
        <li key={git.id}>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">          
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>                
          </svg>
             {git.name}
            
        </a>
      </li> 
      )
    })} */}

  </ul>
</div>
{/* phone */}

<div className="sm:block md:hidden -mt-10 max-w-[100vw] scrollbar-hide lg:hidden xl:hidden 2xl:hidden ">
<center>
<div className="max-w-lg p-4 space-x-4 carousel carousel-center rounded-box ">  
  {imgss.map((git,i)=>{
return(
  <>
    <div key={git.id} className="carousel-item w-screen">
    <img src={git.image} className="rounded-box w-screen h-auto max-h-lg"/>
  </div> 

  </>

  
)


})}


</div>
</center>
<div className=''>
<div className='px-10 w-screen '>
  <span  className="text-xl float-left max-w-[70vw] ">
  {name}
  </span>
  <span className="text-lg float-right">
 {JSON.parse(sessionStorage.getItem('symbol')).symbol}{price}
</span>
</div>

</div>

<div className="mt-10"> 
<div className=" ml-8">
  {/* <div className="text-left ml-2 text-gray-900">Description</div> */}
<article className="text-left text-gray-500 ml-3">
{/* {discription} */}
</article>

</div>
<div className="grid max-w-[50vw]  ml-8 grid-cols-5">




{colors.map((g,i)=>{

  if(colors.length > 1){
    if(g.enable == true){
      if(g.instock > 0){
        if (color.arnum == i){
          return(
            <>
            <div key={i+1} className={"rounded-2xl mt-3 h-[2.2rem] w-[1.8rem] ml-2 ring-2 ring-cyan-800 " } onClick={()=>{setcolor({arnum:i,color:g.color})}} style={{backgroundColor:g.color}}></div>
  
            </>
          )
        }else{
          return(
            <>
            <div key={i+1} className={"rounded-2xl mt-3 h-[2.2rem] w-[1.8rem] ring-0 border-0 ml-2 " } onClick={()=>{setcolor({arnum:i,color:g.color})}} style={{backgroundColor:g.color}}></div>
  
            </>
          )
        }
       
      }else if(g.instock == false) {
        return(
          <>
          <div data-tip="out of stock" className="tooltip">
          <div key={i+1} className={"rounded-2xl mt-3 h-[2.2rem] w-[1.8rem] ml-2" } style={{backgroundColor:g.color}}></div>
   </div>
          </>
        )
      }
    }
  
  }

})}




</div>
<div className='mt-5 ml-8'>
  {sizes.length > 0 && (
  <div className='ml-[0.6rem] font-[400] text-lg roboto'>Size</div>
  )}

  {sizes.map((g,i)=>{

    if(g.enable == true){
      if(g.instock > 0){
        if(i == size.arnum){
          return(
            <div key={i+1}  className="ring text-white outline-0 rounded-[1.2rem] ring-cyan-800 m-2 btn btn-circle btn-md" onClick={(e) =>{
              e.preventDefault()
              setsize({arnum:i,name:g.name})
              setsprice(g.price)}
              
            }>{g.name}</div> 
          )
        }else{
          return(
            <div key={i+1}  className="m-2 rounded-[1.2rem]  text-white outline-0 btn btn-circle btn-md" onClick={(e) =>{
              e.preventDefault()
              setsize({arnum:i,name:g.name})
              setsprice(g.price)
            }}>{g.name}</div> 
          )
        }
        
      }else if(g.instock == false){
        return(
          <div key={i+1} data-tip="out of stock" className="tooltip text-white">
          <button className="btn btn-circle ounded-[1.2rem] btn-md m-2 text-white" disabled="">{g.name}</button> 
</div>


        )
      }
    }
  })}
    {coptions.length > 0 && (
  <div className='ml-[0.6rem] mt-4 font-[400] text-lg roboto'>Option</div>
  )}
  {coptions.map((g,i)=>{

if(g.enable == true){
  if(g.instock > 0){
    if(i == op.arnum){
      return(
        <div key={i+1}  className="ring text-white  ring-cyan-800 m-2 mt-3 btn  btn-md" onClick={(e) =>{
          e.preventDefault()
          setcoption({arnum:i,name:g.optionName})
          setcoprice(g.price)
        }
          
        }>{g.optionName}</div> 
      )
    }else{
      return(
        <div key={i+1}  className="text-white  ring-cyan-800 m-2 btn mt-3 btn-md" onClick={(e) =>{
          e.preventDefault()
          setcoption({arnum:i,name:g.optionName})
          setcoprice(g.price)
        }}>{g.optionName}</div> 
      )
    }
    
  }else if(g.instock == false){
    return(
      <div key={i+1} data-tip="out of stock" className="tooltip text-white">
      <button className="text-white  ring-cyan-800 m-2 btn mt-3 btn-md" disabled="">{g.optionName}</button> 
</div>


    )
  }
}
})}
  <div className=" mt-5 text-2xl flex justify-center">
    <div className="flex">
    <i className="fa-solid fa-pen-ruler -ml-10"></i>
  <div className="font-[550] underline underline-offset-4 text-base ml-3  -mt-[0.04rem]">Size Guide</div>
    </div>
    <div className="flex ml-10">

    <i className="fa-solid fa-camera"></i>
  <div className="font-[550] underline underline-offset-4 text-base ml-3  -mt-[0.04rem]">Try it</div>
</div>

  </div>
</div>

{/* <div className='mt-4 flex'>
  {coptions.map((g,i)=>{

    if(g.enable === true){





      if(g.instock > 0){
        if(i == coption.arnum){
          return(
            <button key={i+1} className="btn m-2 ring ring-cyan-800" onClick={()=>{
              setcoption({arnum:i,name:g.optionName})
              setcoprice(g.price)
            }}>{g.optionName}</button> 
          )
        }else{
          return(
            <button key={i+1} className="btn m-2 " onClick={()=>{
              setcoption({arnum:i,name:g.optionName})
              setcoprice(g.price)
            }}>{g.optionName}</button> 
          )
        }
       
      }else if(g.instock == false){
        return(
          <>
                   <div key={i+1} data-tip="out of stock" className="tooltip">
<button className="btn m-2">{g.optionName}</button> 
</div>

          </>
        )
      }







    }
  })}
</div> */}
<center>
<div className="mt-16 grid place-items-center   ">
<button className="btn btn-active w-full max-w-xs text-white" role="button" onClick={()=>{
  handle_add_cart()
}}  aria-pressed="true">Add to Cart</button> 
</div>
</center>
<div className="grid max-w-[100vh] divide-solid divide-y p-2 mt-5">
<div tabindex="0" className="collapse collapse-plus ">
  <div className="collapse-title text-xl font-medium">
    Description
  </div>
  <div className="collapse-content"> 
    <p>{discription}</p>
  </div>
</div>
<div tabindex="0" className="collapse collapse-plus ">
  <div className="collapse-title text-xl font-medium">
    Return
  </div>
  <div className="collapse-content"> 
    <p>{returnPolicy}</p>
  </div>
</div>
{sku.length > 0 &&(
  <>
  <div tabindex="0" className="collapse collapse-plus ">
  <div className="collapse-title text-xl font-medium">
    SKU
  </div>
  <div className="collapse-content"> 
    <p>{sku}</p>
  </div>
</div>
</>
)}
<div tabindex="0" className="collapse collapse-plus ">
  <div className="collapse-title text-xl font-medium">
    Reviews
  </div>
  <div className="collapse-content"> 
    <p>Reviews</p>
  </div>
</div>
</div>

</div>
{/* <div className="">
<Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly />
    </Box>
</div> */}




</div>

{/* pc */}
<div className="sm:hidden md:flex lg:flex xl:flex 2xl:flex ">
<div className="grid m-6 ml-12 -mt-10 ">
  
    <div id='flavoursContainer' className="w-full overflow-scroll p-4 carousel">
          <div id='flavoursContainer' className="relative w-full pt-20 carousel-item">
              {imgss.length > 0 && (
                <div>
                    <img id='dw' src={imgss[obj].image} className="w-auto h-auto max-h-96 rounded-xl" ></img> 
                </div>
              )}
              
              {imgss.length == 0 && (
                <div>
                    <img id='dw' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRiaxVlv_hi5y9807GnQ8XbtzHEuVv3CYjg&usqp=CAU'} className="w-auto h-auto max-h-96 rounded-xl" ></img> 
                </div>
              )}
  </div>

</div> 



<div className="grid grid-cols-4 ml-4">
    {imgss.map((git,i)=>{

            return(
<div key={i+1} className="avatar" onClick={()=>{setobj(i)}}>
  <div className=" rounded-btn w-16 p-1 h-16">
    <img src={git.image} />
  </div> 
</div>
    )

    })}


    </div>
    
</div>
<div className=" ml-6 m-12">
<div className="text-2xl">{name}</div>
<div className="text-xl">{price} <span className="text-green-700">{currency}</span></div>
<div className="">
<article className="prose prose-lg text-left p-4">
{discription}
</article>

</div>
<div className="flex grid-cols-5">




{colors.map((g,i)=>{
  if(colors.length > 1){
    if(g.enable == true){
      if(g.instock > 0){
        if (color.arnum == i){
          return(
            <>
            <div key={i+1} className={"btn btn-circle btn-sm ml-2 ring-1 ring-cyan-800 " } onClick={()=>{setcolor({arnum:i,color:g.color})}} style={{backgroundColor:g.color}}></div>
  
            </>
          )
        }else{
          return(
            <>
            <div key={i+1} className={"btn btn-circle btn-sm ring-0 border-0 ml-2 " } onClick={()=>{setcolor({arnum:i,color:g.color})}} style={{backgroundColor:g.color}}></div>
  
            </>
          )
        }
       
      }else if(g.instock == false) {
        return(
          <>
               <div data-tip="out of stock" className="tooltip">
          <div key={i+1} className={"pt-[7%] rounded-full text-center h-6 w-6 ml-2" } style={{backgroundColor:g.color}}></div>
   </div>
   
          </>
        )
      }
    }
  
  }

})}




</div>
<div className='mt-6'>
  {sizes.map((g,i)=>{
    if(g.enable == true){
      if(g.instock > 0){
        if(i == size.arnum){
          return(
            <button className="ring ring-cyan-800 m-2 btn btn-circle btn-md" onClick={() =>{
              setsize({arnum:i,name:g.name})
              setsprice(g.price)
            }}>{g.name}</button> 
          )
        }else{
          return(
            <button className="m-2 btn btn-circle btn-md" onClick={() =>{
              setsize({arnum:i,name:g.name})
              setsprice(g.price)
            }}>{g.name}</button> 
          )
        }
        
      }else if(g.instock == false){
        return(
          <div data-tip="out of stock" className="tooltip">
          <button className="btn btn-circle btn-md m-2" disabled="">{g.name}</button> 
</div>


        )
      }
    }
  })}
</div>
<div className='mt-4 flex'>
  {coptions.map((g,i)=>{

    if(g.enable === true){





      if(g.instock > 0){
        if(i == coption.arnum){
          return(
            <button className="btn m-2 ring ring-cyan-800" onClick={()=>{
              setcoption({arnum:i,name:g.optionName})
              setcoprice(g.price)
            }}>{g.optionName}</button> 
          )
        }else{
          return(
            <button className="btn m-2 " onClick={()=>{
              setcoption({arnum:i,name:g.optionName})
              setcoprice(g.price)
            }}>{g.optionName}</button> 
          )
        }
       
      }else if(g.instock == false){
        return(
          <>
                   <div data-tip="out of stock" className="tooltip">
<button className="btn m-2">{g.optionName}</button> 
</div>

          </>
        )
      }







    }
  })}
</div>
<div className="mt-8 flex">
<button className="btn btn-active mr-3" onClick={()=>{
  handle_add_cart()
}} role="button" aria-pressed="true">Add to Cart</button> 








</div>



</div>

</div>

</div>
<Darkfoot />
   

 </>
  

    )
  }else if(tab == 'loading'){
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

export default Productsin
