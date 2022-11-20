import axios from 'axios'
import { React,useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
const OverView = ({tabname,av})=>{
    const [logo, setlogo] = useState(av)
    const cookies = new Cookies();
      const [tab, settab] = useState('project')
      const userToken = cookies.get('userToken')
      const [newalart,setnewalart] = useState([])
      const [price, setprice] = useState(0)
//sizes
const [sizcheck, setsizcheck] = useState('hidden')
const [test,settest] = useState([{name:'XS', enable:true,price:2,instock:3}])
const [sizeaddname,setsizeaddname] = useState('')
const [sizeaddprice,setsizeaddprice] = useState('')
const [sizeaddinstock,setsizeaddinstock] = useState('')
const [sizes, setsizes] = useState([])

//inputs
const [name, setname] = useState('')
const [tags, settags] = useState('')
const [details, setdetails] = useState('')
const [returnpolicy,setreturnpolicy] = useState("this product doen't have a return policy")
const [sku,setsku] = useState('')
//colors
// 
const [colorcheck, setcolorcheck] = useState('hidden')
const [incolor,setincolor] = useState([{color:"#003257", enable:true,instock:0,img:-1}])
const [colorname,setcolorname] = useState('#003257')
const [colorstock,setcolorstock] = useState('')
const [colorimg,setcolorimg] = useState()
const [colors, setcolors] = useState([])
//custom Options 1

const [op,setop] = useState([{optionName:'SLIM',enable:true,price:69,instock:2,img:-1}])
const [opname,setopname] = useState('')
const [opprice,setopprice] = useState('')
const [opstock,setopstock] = useState('')
const [opimg,setopimg] = useState([])


const [cuops, setcuops] = useState('hidden')
const [customoptionsFEnd, setcustomoptionsFEnd] = useState([])
//catagorys
const [catagoryslist, setcatagoryslist] = useState([])
const [catagoruselect, setcatagoruselect] = useState([])
//image
const [obj, setobj] = useState(0)
const [preview_image, setpreview_image] = useState([])
const [imgs, setimgs] = useState([])
const [imgsStyle1, setimgsStyle1] = useState('')
const [imgsStyle2, setimgsStyle2] = useState('hidden')
const [imgid, setimgid] = useState(0)
//shipping
const [shippingprofilelist, setshippingprofilelist] = useState([])
const [selected_shipping_id, setselected_shipping_id] = useState(99999999999999999)
//general
const [inprog, setinprog] = useState(0)
const [Lb, setLb] = useState('hidden')
const [Pb, setPb] = useState('')
const [Alart, setAlart] = useState('')
const [Alarts, setAlarts] = useState('hidden')
const [proog, setproog] = useState(0);
      const navigate = useNavigate();

useEffect(()=>{
  axios.post(window.$api + '/getaddproductpageinfoifurreadingthisstopreadingcuzitisgonnabeareallylongurlmadebyomar',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
    if(Response.data.status == 0){
      cookies.remove("userToken")
      navigate('/admin/login', { replace: true })
    }else if(Response.data.status == 22){
// no perm
navigate('/admin/dashboard/noperm', { replace: false })

    }else{
      setcatagoryslist(Response.data)
    }
    
  })

  axios.post(window.$api + '/getprofileshippingforproducts',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
    console.log(Response.data)
    if(Response.data.status == 0){
      cookies.remove("userToken")
      navigate('/admin/login', { replace: true })
    }else if(Response.data.status == 22){
// no perm
navigate('/admin/dashboard/noperm', { replace: false })

    }else{
      console.log(Response.data)
      setshippingprofilelist([{id:0,name:'without Shipping'},...Response.data])
    }
  })
  // shippingprofilelist


},[])
//sizes
useEffect(()=>{
if(sizcheck ==  'hidden'){
setsizes([])
}else{
setsizes(test)
}
},[test,sizcheck])


//custom options
useEffect(()=>{
if(cuops == 'hidden'){
  setcustomoptionsFEnd([])
}else{
  setcustomoptionsFEnd(op)
}
},[cuops,op])
//change colors
useEffect(()=>{
  if(colorcheck == 'hidden'){
    setcolors([])
  }else{
    setcolors(incolor)
  }
},[colorcheck,incolor])
//verfy
useEffect(()=>{
  if(userToken){
    axios.post(window.$api + 'verfy',{
            userToken: userToken,
      username: localStorage.getItem('username'),
    }).then((Response)=>{
      if(Response.data.msg == 0){
        cookies.remove("userToken")
        navigate('/admin/login', { replace: true })
      }else if(Response.data.msg == 22){
        navigate('/admin/dashboard/noperm', { replace: false })
      
      }
      else if(Response.data.msg == 2){
        navigate('/', { replace: true })
      }
    })
  }else{
    navigate('/', { replace: true })
  }
},[])
// auto scroll
useEffect(()=>{
if(Alarts == 'hidden'){

}else{
  window.scrollBy(0,90000000);
}
},[Alart,Alarts])
// handle styling images
useEffect(()=>{
  if(preview_image.length == 0){
    setimgsStyle2('hidden')
    setimgsStyle1('')
  }else{
    setimgsStyle2('')
    setimgsStyle1('hidden')
  }
},[preview_image])
//handle inputs
const imageChange = (e) => {
  if (e.target.files && e.target.files.length > 0) {
    // setimgs(e.target.files[0]);
    // console.log(URL.createObjectURL(e.target.files[0]))
    // console.log(e.target.files[0])
    console.log('ff' + e.target.files.length)
    var imgsss = []
    var id = imgid
    var imgTo = []
    for (var i = 0; i < e.target.files.length; i++) {
      const data = new FormData();
      imgsss.push({image:URL.createObjectURL(e.target.files[i])})
      // console.log('f'+imgsss.length)

      const ii = e.target.files[i]
      data.append('file',ii)
      data.append('userToken',userToken)
      var idd = id + i + 1
      data.append('id',idd)
      data.append('username',localStorage.getItem('username'))
      // console.log(data)
      setTimeout(()=>{
        axios.post(window.$api + 'upload',data).then((Response)=>{
          console.log(Response.data)
          imgTo.push(Response.data)
          if (imgsss.length ==  e.target.files.length){
            // console.log(imgTo)
            console.log(imgsss)
            setpreview_image([...preview_image,...imgsss])
            setimgs([...imgs,...imgTo])
            setimgid(imgid + e.target.files.length)
          }
      })
      }, 500);

      // console.log(id)
    }


  }
};
useEffect(()=>{
  console.log(preview_image)
},[preview_image])
const handllePreview = ()=>{
  console.log(preview_image)
  console.log(colors)
  console.log(customoptionsFEnd)
  console.log(sizes)
  console.log(imgs)
  console.log(catagoruselect)
  console.log(selected_shipping_id)
  console.log(returnpolicy)
  console.log(sku)
}
useEffect(()=>{
  if(proog == 0){
    setPb('')
setLb('hidden')
  }else{
    setPb('')
    setLb('hidden')
  }
},[proog])
const handlesubmit = ()=>{

if(proog == 0){
setPb('hidden')
  setproog(1)
setLb('')

if(inprog == 0){
setPb('hidden')
setLb('')
setinprog(1)
setproog(1)

if(name.length == 0){
setLb('hidden')

  setAlart('You forgot to name it')
  setAlarts('')
  setPb('')
  setinprog(0)
setproog(0)

setLb('hidden')
}else{
setLb('hidden')

  setAlarts('hidden')
  setAlart('')
  setPb('')
  setinprog(0)
setproog(0)


  setLb('hidden')
  if(details.length == 0){
setLb('hidden')

    setAlart(" There's no details")
    setAlarts('')
    setPb('')
    setLb('hidden')
setproog(0)

  setinprog(0)

  }else if(selected_shipping_id == 99999999999999999){
setLb('hidden')

    setAlart(" There's no Shipping")
    setAlarts('')
    setPb('')
  setinprog(0)
setproog(0)

  setLb('hidden')
  }else if(returnpolicy.length === 0 ){
    setLb('hidden')

    setnewalart('Please add a return policy')
    setTimeout(() => {
        setnewalart('')
    }, 1200);
    setAlarts('')
    setPb('')
  setinprog(0)
setproog(0)

  setLb('hidden')
  }
else{
  axios.post(window.$api + 'addproduct',{
          userToken: userToken,
      username: localStorage.getItem('username'),
    name: name,
    price: price,
    details: details,
    tags: tags,
    catagory: catagoruselect,
    size:sizes,
    colors:colors,
    option1:customoptionsFEnd,
    imgs:imgs,
    shipping:selected_shipping_id,
    returnpolicy:returnpolicy,
    sku:sku
  }).then((Response)=>{
setLb('hidden')

setproog(0)
    setPb('')
    setLb('hidden')
    setinprog(0)
    if(Response){
 
      if(Response.data.status == 0){
        cookies.remove("userToken")
        navigate('/admin/login', { replace: true })
      }else if(Response.data.status == 1){
        setLb('hidden')
        setPb('')
        navigate('/admin/dashboard/Products', { replace: false })
      }
    }
  })
}
}
}
}else{

}
}

const handlePriceChange = (event)=>{
  const value = event.target.value.replace(/[A-z]/g, '')
  setprice(value)
}



      if(tab == 'project'){
    return(
      
<div className="grid place-items-center  w-[100%]">
    <div className="float-left text-left mt-0  w-[100%] h-[40rem]">
    <div className="pl-4 pt-[1.1rem] mb-8 text-white roboto float-left text-left font-[400] text-2xl">

    <div className="float-left  text-left ">
    Add products
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

<div>
<div className='grid place-items-center'>
<div className="grid ">
    <div className="m-3">
      <span onClick={(()=>{
        // setTab('products')
  navigate('/admin/dashboard/Products', { replace: false })
})
        }>
      <i  className="fas text-2xl mt-2 ml-3 cursor-pointer fa-arrow-left"></i>
      </span>
        <div className="float-right">
        <button onClick={handllePreview} className="btn btn-outline mr-2"><i className="fas fa-eye mr-2"></i> Preview</button>         <button onClick={handlesubmit} className={"btn btn-outline btn-accent " + Pb}><i className="fas fa-check mr-2"></i> Publish </button><button className={"btn btn-outline btn-accent btn-md loading " + Lb}>loading</button>  
        </div>

    </div>
    <div>
      {/* {preview_image.map((e)=>{
        console.log(e)
        return(
        <>
      <img src={e.image}></img>
        </>
      )})} */}
      <div className={imgsStyle2} id=''>
      <div className="grid place-items-center">
    <div id='flavoursContainer' className="w-full overflow-scroll p-4 carousel">
          <div id='flavoursContainer' className="relative w-full pt-20 carousel-item flex justify-center">
            {preview_image.length > 0 && (<>
              <img id='dw' src={preview_image[obj].image} className="w-auto h-auto max-h-96 rounded-xl" ></img> 
            </>)}
              {/* {preview_image.length == 0 ? (<></>)} */}

    <div className="btn btn-circle btn-sm -ml-12 mt-3" onClick={()=>{
                    setobj(0)
                    var a = preview_image
                    console.log(a)
                    a.splice(obj, 1);
                    console.log(a)
                    setpreview_image([...a])
                    var b = imgs
                    b.splice(obj, 1);
                    setimgs([...b])
                    // a = a.reduce((p,c) => (c.id !== git.id && p.push(c),p),[]);
    }}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current">   
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>                       
  </svg>
</div> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        
      {/* <i href="/components/carousel#slide4" onClick={handleScrollL} className="btn btn-circle mt-20">❮</i> 
      <i href="/components/carousel#slide2" onClick={handleScrollR} className="btn btn-circle mt-20">❯</i> */}
    </div>

  </div>
</div> 



<div className="grid grid-cols-4 place-items-center justify-center ">
    {preview_image.map((git,i)=>{

            // console.log(i)
            return(
<div className="avatar" onClick={()=>{setobj(i)}}>
  <div className=" rounded-btn w-16 p-1 h-16">
    <img src={git.image} />
  </div> 
</div>
    )

    })}

<div className="avatar" >
  <div className=" rounded-btn w-16 p-1 h-16">
  <label id='imageu' className="inline-block border border-gray-800  drop-shadow-2xl w-full h-full rounded">
  <i className="fas hero mt-[23%] fa-cloud-upload-alt text-xl"></i>
  <input type="file" className="w-full hidden h-full" multiple placeholder=""  ondrop={imageChange} onChange={imageChange}/>
  </label>

  </div> 
</div>


    </div>
</div>

                </div>
    </div>
    <div className="grid px-4 place-items-center mt-8">
    <label id='imageu' className={"inline-block border cursor-pointer border-gray-800 min-w-xs sm:max-w-xs w-screen md:max-w-sm lg:max-w-lg xl:max-w-xl p-12 h-72 drop-shadow-2xl z-12 rounded-xl " + imgsStyle1}>
  <div className="hero">
  <i className="fas fa-cloud-upload-alt text-5xl grid place-items-center mt-12"></i>
    
    </div>
<span className="grid place-items-center mt-4">Drag or tap to chose a file</span>
<span className="grid place-items-center mt-1 text-gray-500">Support mp4 mov png jpg svg </span>
  <input type="file" className="w-full hidden h-full" multiple placeholder="" ondrop={imageChange}  onChange={imageChange}/>
  </label>
  <div className="grid mt-8">
      <label className="ml-2">Name:</label>
      <input value={name} onChange={(event)=>{setname(event.target.value)}} type="text" autoComplete='false' className="sm:w-53 md:w-80 lg:w-80 2xl:w-96 xl:w-96  input input-accent input-bordered bg-black mt-2 focus:ring-black h-8 rounded-xl mb-6"></input>
      <label className="ml-2">Starting Price:</label>
      <input type="text" min="0" max="10000" ste  autoComplete='false' className="sm:w-53 md:w-80 lg:w-80 2xl:w-96 xl:w-96  h-8 rounded-xl mb-6 input input-accent input-bordered bg-black mt-2 focus:ring-black" onChange={handlePriceChange} value={price}></input>
      <label className="ml-2">Details:</label>
      <textarea value={details} onChange={(event)=>{setdetails(event.target.value)}} type="text" autoComplete='false' className="input input-accent input-bordered bg-black focus:ring-black mt-2 h-32 rounded-xl sm:w-53 md:w-80 lg:w-80 2xl:w-96 xl:w-96 mb-6"></textarea>
      <label className="ml-2">Shipping:</label>

<select onChange={(e)=>{setselected_shipping_id(e.target.value)}} className="select select-bordered select-accent sm:w-53 md:w-80 lg:w-80 2xl:w-96 xl:w-96  mb-6 bg-black">
  <option disabled="disabled" selected="selected">Choose your Profile</option> 
  {shippingprofilelist.map((g,i)=>{
    return <option value={g.id} >{g.name}</option>
  })}

</select>

      <label className="ml-2">tags:</label>
      <input value={tags} onChange={(event)=>{settags(event.target.value)}} type="text" placeholder="phone case fire" autoComplete='false' className="sm:w-53 md:w-80 lg:w-80 2xl:w-96 xl:w-96  h-8 rounded-xl mb-6 input input-accent input-bordered bg-black mt-2 focus:ring-black"></input>
      <label className="ml-2">SKU:</label>
      <input value={sku} onChange={(event)=>{setsku(event.target.value)}} type="text" placeholder="X121E2E3S" autoComplete='false' className="sm:w-53 md:w-80 lg:w-80 2xl:w-96 xl:w-96  h-8 rounded-xl mb-6 input input-accent input-bordered bg-black mt-2 focus:ring-black"></input>
      <label className="ml-2">return policy:</label>
      <textarea value={returnpolicy} onChange={(event)=>{setreturnpolicy(event.target.value)}} type="text" autoComplete='false' className="input input-accent input-bordered bg-black focus:ring-black mt-2 h-32 rounded-xl sm:w-53 md:w-80 lg:w-80 2xl:w-96 xl:w-96 mb-6"></textarea>
      <label className="ml-2">Catagorys:</label>
      <div className="grid place-items-start mt-4 ml-6 grid-cols-2">
        {catagoryslist.map((git)=>{
          return(
            <>
                    <div className="flex mb-4" key={git.id}>

<input type="checkbox" className="checkbox checkbox-primary bg-black ring-black" onChange={(e)=>{
// a.splice(a.findIndex(e => e.id == 150),1);
// console.log(a)
// setcatagoruselect(a)


var array = [
  { name:"string 1", value:"this", other: "that" },
  { name:"string 1", value:"this", other: "that" },
  { name:"string 2", value:"this", other: "that" }
];


  var a = [...catagoruselect]

  var foundValue = a.filter(obj=>obj.id===git.id);
  if(foundValue.length > 0){
    a = a.reduce((p,c) => (c.id !== git.id && p.push(c),p),[]);
    setcatagoruselect([...a])
  }else{
    setcatagoruselect([...catagoruselect,{id:git.id,name:git.name}])
  }
  

// 
  
    // 

}}   />
<div className='ml-2 '>{git.name}</div>
</div>
            </>
          )
        })}

        
        
      </div>

<div id='conprins' className='mt-5 flex'>
  
  <span className="-mt-1 ml-3 mr-3">Sized product</span>
<input type="checkbox" className="checkbox bg-black checkbox-sm -mt-[0.087rem] -ml-1" onChange={(e)=>{
  if(sizcheck == 'hidden'){
    setsizcheck('')
  }else{
    setsizcheck('hidden')
  }
  }}   />

</div>
{/* size */}
<div className={'grid place-items-center mt-3 max-w-md overflow-x-auto ' + sizcheck}>

<table className="max-w-[100vw] text-center text-sm table">
  <thead>
    <tr>
      <th className="">Name</th>
      <th className="">Price</th>
      <th className="">In stock</th>
      <th className="">Delete</th>
    </tr>
  </thead>
  
  <tbody>
      {test.map((gf,i)=>{
let name = gf.name
let enable = gf.enable
let price = gf.price
let instock = gf.instock
return (
  <>

  <tr className='hover'>

      <th className=" text-center">
      <span className="">{name}</span>
      </th>
      <th>
      <span className="" >{gf.price}</span>
      </th>
      <th>
      <span className="" >{gf.instock}</span>
      </th>
      <th onClick={()=>{
         settest((products) => products.filter((_, index) => index !== i));
         console.log(test)
      }}><i className="fa-solid fa-trash text-red-500"></i></th>
    </tr>
    

    </>
)
        console.log(gf)
      })}
<tr className='pt-6 active'>

<th className=" p-3">
<input type="text" value={sizeaddname} placeholder='Name' onChange={(e)=>{setsizeaddname(e.target.value)}} className="w-24 h-9 input input-accent input-bordered bg-base-300/[0.4] focus:ring-black mt-2" />
</th>
<th className=" p-2">
<input type="text" value={sizeaddprice} placeholder='price' onChange={(e)=>{setsizeaddprice(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-base-300/[0.4]  focus:ring-black mt-2" />
</th>
<th>
<input type="text" value={sizeaddinstock} placeholder='in stock' onChange={(e)=>{setsizeaddinstock(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-base-300/[0.4] focus:ring-black mt-2" />
</th>
<th onClick={()=>{
if(sizeaddname === '' || sizeaddprice === '' || sizeaddinstock === ''){
  setnewalart('Fill all of the fields')
  setTimeout(() => {
    
  setnewalart('')
  }, 1200);
}else{
  settest([...test,{name:sizeaddname,enable:true,price:sizeaddprice,instock:sizeaddinstock}])
  setsizeaddname('')
  setsizeaddprice('')
  setsizeaddinstock('')
}

}} className='mt-2 text-accent'>
<i className="fa-solid fa-plus mt-3"></i>
</th>
</tr>
        </tbody>
    </table>

</div>

<div id='conprins' className='mt-5 flex'>
  
  <span className="-mt-1 ml-3 mr-3">colors</span>
<input type="checkbox" className='bg-black checkbox checkbox-sm -mt-[0.087rem] -ml-1' onChange={(e)=>{
  if(colorcheck == 'hidden'){
    setcolorcheck('')
  }else{
    setcolorcheck('hidden')
  }
  }}   />

</div>
{/* color con */}
<div className={'grid place-items-center mt-3 max-w-md overflow-x-auto ' + colorcheck}>

<table className="max-w-[100vw] text-center text-sm table">
  <thead>
    <tr>
      <th className="">color</th>
      <th className="">img</th>
      <th className="">In stock</th>
      <th className="">Delete</th>
    </tr>
  </thead>
  
  <tbody>
      {incolor.map((gf,i)=>{
let color = gf.name
let enable = gf.enable
let img = gf.img
let instock = gf.instock
return (
  <>

  <tr className='hover'>

      <th className=" text-center">
      <span className="">{gf.color}</span>
      </th>
      <th>
      <span className="" >{gf.img}</span>
      </th>
      <th>
      <span className="" >{gf.instock}</span>
      </th>
      <th onClick={()=>{
         setincolor((products) => products.filter((_, index) => index !== i));
         console.log(test)
      }}><i className="fa-solid fa-trash text-red-500"></i></th>
    </tr>
    

    </>
)
        console.log(gf)
      })}
<tr className='pt-6 active'>


<th className=" p-2">
<input type="color" value={colorname} onChange={(e)=>{setcolorname(e.target.value)}} className="w-24 h-10 bg-base-300 rounded-full focus:ring-base-200 focus mt-2" />
</th>
<th className=" p-3">
<input type="text" value={colorimg} placeholder='img' onChange={(e)=>{setcolorimg(e.target.value)}} className="w-24 h-9 input input-accent input-bordered bg-base-300/[0.4] focus:ring-black mt-2" />
</th>
<th>
<input type="text" value={colorstock} placeholder='in stock' onChange={(e)=>{setcolorstock(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-base-300/[0.4] focus:ring-black mt-2" />
</th>
<th onClick={()=>{
if(colorname === '' || colorstock === '' || colorimg === ''){
  setnewalart('Fill all of the fields')
  setTimeout(() => {
    
  setnewalart('')
  }, 1200);
}else{
  setincolor([...incolor,{color:colorname,enable:true,img:colorimg,instock:colorstock}])
  setcolorname('')
  setcolorstock('')
  setcolorimg('')
}

}} className='mt-2 text-accent'>
<i className="fa-solid fa-plus mt-3"></i>
</th>
</tr>
        </tbody>
    </table>




</div>
{/* custom option 1 */}
<div>
<div id='conprins' className='mt-5 flex'>
  
  <span className="-mt-1 ml-3 mr-3">custom options</span>
<input type="checkbox"className='bg-black checkbox checkbox-sm -mt-[0.087rem] -ml-1' onChange={(e)=>{
  if(cuops == 'hidden'){
    setcuops('')
  }else{
    setcuops('hidden')
  }
  }}   />

</div>

</div>
<div className={"grid place-items-center mt-3 max-w-xl overflow-x-auto  " + cuops}>
<table className="max-w-[100vw] text-center text-sm table">
  <thead>
    <tr>
      <th className="">Name</th>
      <th className="">img</th>
      <th className="">In stock</th>
      <th className="">Price</th>
      <th className="">Delete</th>
    </tr>
  </thead>
  
  <tbody>
      {op.map((gf,i)=>{
let color = gf.optionName
let enable = gf.enable
let img = gf.img
let instock = gf.instock
let price = gf.price
return (
  <>

  <tr className='hover'>

      <th className=" text-center">
      <span className="">{gf.optionName}</span>
      </th>
      <th>
      <span className="" >{gf.img}</span>
      </th>
      <th>
      <span className="" >{gf.price}</span>
      </th>
      <th>
      <span className="" >{gf.instock}</span>
      </th>
      <th onClick={()=>{
         setop((products) => products.filter((_, index) => index !== i));
         console.log(test)
      }}><i className="fa-solid fa-trash text-red-500"></i></th>
    </tr>
    

    </>
)
        console.log(gf)
      })}
<tr className='pt-6 active'>


<th className=" p-2">
<input type="text" value={opname} placeholder='Name' onChange={(e)=>{setopname(e.target.value)}} className="w-24 h-9 input input-accent input-bordered bg-base-300/[0.4] focus:ring-black mt-2" />
</th>
<th className=" p-3">
<input type="text" value={opimg} placeholder='img' onChange={(e)=>{setopimg(e.target.value)}} className="w-24 h-9 input input-accent input-bordered bg-base-300/[0.4] focus:ring-black mt-2" />
</th>
<th>
<input type="text" value={opstock} placeholder='in stock' onChange={(e)=>{setopstock(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-base-300/[0.4] focus:ring-black mt-2" />
</th>
<th>
<input type="text" value={opprice} placeholder='price' onChange={(e)=>{setopprice(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-base-300/[0.4] focus:ring-black mt-2" />
</th>
<th onClick={()=>{
if(opname === '' || opstock === '' || opimg === '' || opprice === ''){
  setnewalart('Fill all of the fields')
  setTimeout(() => {
    
  setnewalart('')
  }, 1200);
}else{
  setop([...op,{optionName:opname,enable:true,img:opimg,instock:opstock,price:opprice}])
  setopname('')
  setopprice('')
  setopstock('')
  setopimg('')
}

}} className='mt-2 text-accent'>
<i className="fa-solid fa-plus mt-3"></i>
</th>
</tr>
        </tbody>
    </table>
</div>

{/* future me don't forget to rename this in the coffee */}
{/* custom option 2 */}
{Alart.length > 0 && (
  <div className="alert alert-info mt-7">
  <div className="flex-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
    </svg> 
    <label>{Alart}!</label>
  </div>
</div>
)}


</div>
</div>
</div>



</div>
</div>
        </div>
</div>)}else if(tab == 'loading'){
return(
  <>
        
<div className="grid place-items-center  w-[100%] static">
    <div className="float-left text-left mt-0  w-[100%] sm:h-96 md:h-[40rem]">
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
    <div className="text-white sm:-mt-24  sm:-ml-10 md:ml-0    w-[100%] md:-mt-[40rem]">

<div>
<div className='grid place-items-center static h-52 sm:-mt-[10rem] '>
<div className="snippet static" data-title=".dot-pulse">
          <div className="stage">
            <div className="dot-pulse"></div>
          </div>
        </div>
</div>
</div>
        </div>
</div>
  </>
)
}else if(tab == 'password'){
  return(
    <>
</>
  )
}
}
export default OverView;