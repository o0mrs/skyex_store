import axios from 'axios'
import { HexColorPicker } from "react-colorful";
import { React,useEffect,useState } from "react"
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'
const Add_product = ({setbar, bar,setTab})=>{  
const cookies = new Cookies();
const navigate = useNavigate();
const userToken = cookies.get('userToken')
const [price, setprice] = useState(0)
//sizes
const [sizcheck, setsizcheck] = useState('hidden')
const [option1, setoption1] = useState(false)
const [option2, setoption2] = useState(false)
const [option3, setoption3] = useState(false)
const [option4, setoption4] = useState(false)
const [option5, setoption5] = useState(false)
const [option6, setoption6] = useState(false)
const [option10, setoption10] = useState(false)
const [option11, setoption11] = useState(false)

const [option1p, setoption1p] = useState(0)
const [option2p, setoption2p] = useState(0)
const [option3p, setoption3p] = useState(0)
const [option4p, setoption4p] = useState(0)
const [option5p, setoption5p] = useState(0)
const [option6p, setoption6p] = useState(0)
const [option10p, setoption10p] = useState(0)
const [option11p, setoption11p] = useState(0)

const [option1s, setoption1s] = useState(0)
const [option2s, setoption2s] = useState(0)
const [option3s, setoption3s] = useState(0)
const [option4s, setoption4s] = useState(0)
const [option5s, setoption5s] = useState(0)
const [option6s, setoption6s] = useState(0)
const [option10s, setoption10s] = useState(0)
const [option11s, setoption11s] = useState(0)



const [sizes, setsizes] = useState([])
//inputs
const [name, setname] = useState('')
const [details, setdetails] = useState('')
const [tags, settags] = useState('')
//colors
const [colorcheck, setcolorcheck] = useState('hidden')
const [color1, setColor1] = useState("#003257");
const [color1s, setColor1s] = useState("hidden");
const [color2, setColor2] = useState("#ff003e");
const [color2s, setColor2s] = useState("hidden");
const [color3, setColor3] = useState("#00FFC1");
const [color3s, setColor3s] = useState("hidden");
const [color4, setColor4] = useState("#00BEFF");
const [color4s, setColor4s] = useState("hidden");
const [color5, setColor5] = useState("#B530CF");
const [color5s, setColor5s] = useState("hidden");
const [color6, setColor6] = useState("#aabbcc");
const [color6s, setColor6s] = useState("hidden");
const [color7, setColor7] = useState("#B530CF");
const [color7s, setColor7s] = useState("hidden");
const [color8, setColor8] = useState("#aabbcc");
const [color8s, setColor8s] = useState("hidden");
const [cooption1, setcooption1] = useState(false)
const [cooption2, setcooption2] = useState(false)
const [cooption3, setcooption3] = useState(false)
const [cooption4, setcooption4] = useState(false)
const [cooption5, setcooption5] = useState(false)
const [cooption6, setcooption6] = useState(false)
const [cooption7, setcooption7] = useState(false)
const [cooption8, setcooption8] = useState(false)
const [cooption1s, setcooption1s] = useState(0)
const [cooption2s, setcooption2s] = useState(0)
const [cooption3s, setcooption3s] = useState(0)
const [cooption4s, setcooption4s] = useState(0)
const [cooption5s, setcooption5s] = useState(0)
const [cooption6s, setcooption6s] = useState(0)
const [cooption7s, setcooption7s] = useState(0)
const [cooption8s, setcooption8s] = useState(0)
const [colors, setcolors] = useState([])
//custom Options 1
const [cuopsN, setcuopsN] = useState('')
const [cuops, setcuops] = useState('hidden')
const [cuopsT1, setcuopsT1] = useState(false)
const [cuopsT2, setcuopsT2] = useState(false)
const [cuopsT3, setcuopsT3] = useState(false)
const [cuopsT4, setcuopsT4] = useState(false)
const [cuopsT5, setcuopsT5] = useState(false)
const [cuopsT6, setcuopsT6] = useState(false)
const [cuopsvT1, setcuopsvT1] = useState('')
const [cuopsvT2, setcuopsvT2] = useState('')
const [cuopsvT3, setcuopsvT3] = useState('')
const [cuopsvT4, setcuopsvT4] = useState('')
const [cuopsvT5, setcuopsvT5] = useState('')
const [cuopsvT6, setcuopsvT6] = useState('')
const [cuopsvT1p, setcuopsvT1p] = useState(0)
const [cuopsvT2p, setcuopsvT2p] = useState(0)
const [cuopsvT3p, setcuopsvT3p] = useState(0)
const [cuopsvT4p, setcuopsvT4p] = useState(0)
const [cuopsvT5p, setcuopsvT5p] = useState(0)
const [cuopsvT6p, setcuopsvT6p] = useState(0)
const [cuopsvT1i, setcuopsvT1i] = useState(0)
const [cuopsvT2i, setcuopsvT2i] = useState(0)
const [cuopsvT3i, setcuopsvT3i] = useState(0)
const [cuopsvT4i, setcuopsvT4i] = useState(0)
const [cuopsvT5i, setcuopsvT5i] = useState(0)
const [cuopsvT6i, setcuopsvT6i] = useState(0)
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
//sale
//useEffect
//get someinputs value
useEffect(()=>{
  var someArray = [{d:'1'},{d:'2'},{d:'3'},{d:'4'}]
  someArray.splice(0, 1);
  console.log(someArray)
},[])
 
useEffect(()=>{
  axios.post(window.$api + 'getaddproductpageinfoifurreadingthisstopreadingcuzitisgonnabeareallylongurlmadebyomar',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
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

  axios.post(window.$api + 'getprofileshippingforproducts',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
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
setsizes([{name:'XS', enable:option10,price:option10p,instock:option10s},{name:'S', enable:option1,price:option1p,instock:option1s},{name:'M', enable:option2,price:option2p,instock:option2s},{name:'L', enable:option3,price:option3p,instock:option3s},{name:'XL', enable:option4,price:option4p,instock:option4s},{name:'2XL', enable:option5,price:option5p,instock:option5s},{name:'3XL', enable:option6,price:option6p,instock:option6s},{name:'4XL', enable:option11,price:option11p,instock:option11s}])
}
},[option1,option2,option3,option4,option5,option6,sizcheck,option1p,option2p,option3p,option4p,option5p,option6p,option1s,option2s,option3s,option4s,option5s,option6s,option10,option10p,option10s,option11s,option11p,option11])


//custom options
useEffect(()=>{
if(cuops == 'hidden'){
  setcustomoptionsFEnd([])
}else{
  setcustomoptionsFEnd([{optionName:cuopsvT1,enable:cuopsT1,price:cuopsvT1p,instock:cuopsvT1i},{optionName:cuopsvT2,enable:cuopsT2,price:cuopsvT2p,instock:cuopsvT2i},{optionName:cuopsvT3,enable:cuopsT3,price:cuopsvT3p,instock:cuopsvT3i},{optionName:cuopsvT4,enable:cuopsT4,price:cuopsvT4p,instock:cuopsvT4i},{optionName:cuopsvT5,enable:cuopsT5,price:cuopsvT5p,instock:cuopsvT5i},{optionName:cuopsvT6,enable:cuopsT6,price:cuopsvT6p,instock:cuopsvT6i},{n:cuopsN}])
}
},[cuopsT1,cuopsT2,cuopsT3,cuopsT4,cuopsT5,cuopsT6,cuopsvT1,cuopsvT2,cuopsvT3,cuopsvT4,cuopsvT5,cuopsvT6,cuops,cuopsvT1p,cuopsvT2p,cuopsvT3p,cuopsvT4p,cuopsvT5p,cuopsvT6p,cuopsvT1i,cuopsvT2i,cuopsvT3i,cuopsvT4i,cuopsvT5i,cuopsvT6i])
//change colors
useEffect(()=>{
  if(colorcheck == 'hidden'){
    setcolors([])
  }else{
    setcolors([{color:color1, enable:cooption1,instock:cooption1s},{color:color2, enable:cooption2,instock:cooption2s},{color:color3, enable:cooption3,instock:cooption3s},{color:color4, enable:cooption4,instock:cooption4s},{color:color5, enable:cooption5,instock:cooption5s},{color:color6, enable:cooption6,instock:cooption6s},{color:color7, enable:cooption7,instock:cooption7s},{color:color8, enable:cooption8,instock:cooption8s}])
  }
},[cooption6,cooption5,cooption4,cooption3,cooption2,cooption1,color6,color5,color4,color3,color2,color1,colorcheck,cooption1s,cooption2s,cooption3s,cooption4s,cooption5s,cooption6s,color7,color8,,cooption7,cooption8,cooption7s,cooption8s])
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
    shipping:selected_shipping_id
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
        setTab('products')
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



    return(
        <div className='bg-gray-900' id='d99'>
        {/* sm: md: lg: xl: */}
        <div id='d9c9' className="text-base-900 mb-96">
<div className="bg-black h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Add Product <span onClick={()=>{
if(bar == 'hidden'){
 setbar('')
 }else{
  setbar('hidden')
 }
  
  
  }}>
<i  className="fa-solid fa-bars float-right pr-3 pt-1"></i>

</span></div>

<div className="grid ">
    <div className="m-3">
      <span onClick={(()=>{
        setTab('products')
  navigate('/admin/dashboard/products', { replace: true })
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
<div className={'grid place-items-center ' + sizcheck}>

<table className=" max-w-screen w-auto text-center  ...">
  <thead>
    <tr>
      <th className=" p-2">Enable</th>
      <th className=" p-2">Name</th>
      <th className=" p-2">Price</th>
      <th className=" p-2">In stock</th>
    </tr>
  </thead>
  
  <tbody>
  <tr>
    <th className=" p-2">
      <input type="checkbox" className="checkbox checkbox-primary bg-black ring-black" onChange={(e)=>{
  if(option10 == false){
    setoption10(true)
  }else{
    setoption10(false)
  }
  }}   />
      </th>
      <th className=" p-2">
      <span className="">XS</span>
      </th>
      <th className=" p-2">
      <input type="text" value={option10p} onChange={(e)=>{setoption10p(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
      </th>
      <th>
      <input type="text" value={option10s} onChange={(e)=>{setoption10s(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
      </th>
    </tr>

    <tr>
    <th className=" p-2">
      <input type="checkbox" className="checkbox checkbox-primary bg-black ring-black" onChange={(e)=>{
  if(option1 == false){
    setoption1(true)
  }else{
    setoption1(false)
  }
  }}   />
      </th>
      <th className=" p-2">
      <span className="">S</span>
      </th>
      <th className=" p-2">
      <input type="text" value={option1p} onChange={(e)=>{setoption1p(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
      </th>
      <th>
      <input type="text" value={option1s} onChange={(e)=>{setoption1s(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
      </th>
    </tr>
    {/* 2 */}
    <tr>
    <th className=" p-2">
    <input type="checkbox" className="checkbox checkbox-primary bg-black ring-black" onChange={(e)=>{
  if(option2 == false){
    setoption2(true)
  }else{
    setoption2(false)
  }
  }}   />
      </th>
      <th className=" p-2">
      <span className="">M</span>
      </th>
      <th className=" p-2">
      <input type="text" value={option2p} onChange={(e)=>{setoption2p(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
      </th>
      <th>
      <input type="text" value={option2s} onChange={(e)=>{setoption2s(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />

      </th>
    </tr>
{/* 3 */}
    <tr>
<th className=" p-2">
<input type="checkbox" className="checkbox checkbox-primary bg-black ring-black" onChange={(e)=>{
  if(option3 == false){
    setoption3(true)
  }else{
    setoption3(false)
  }
  }}   />
  </th>
  <th className=" p-2">
  <span className="">L</span>
  </th>
  <th className=" p-2">
  <input type="text" value={option3p} onChange={(e)=>{setoption3p(e.target.value.replace(/[A-z]/g, ''))}} className="w-24  h-9  input input-accent input-bordered bg-black focus:ring-black mt-2" />
  </th>
  <th>
  <input type="text" value={option3s} onChange={(e)=>{setoption3s(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />

      </th>
</tr>
{/* 4 */}
<tr>
<th className=" p-2">
<input type="checkbox" className="checkbox checkbox-primary bg-black ring-black" onChange={(e)=>{
  if(option4 == false){
    setoption4(true)
  }else{
    setoption4(false)
  }
  }}   />
  </th>
  <th className=" p-2">
  <span className="">XL</span>
  </th>
  <th className=" p-2">
  <input type="text" value={option4p} onChange={(e)=>{setoption4p(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
  </th>
  <th>
  <input type="text" value={option4s} onChange={(e)=>{setoption4s(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />

      </th>
</tr>
{/* 5 */}
<tr>
<th className=" p-2">
<input type="checkbox" className="checkbox checkbox-primary bg-black ring-black" onChange={(e)=>{
  if(option5 == false){
    setoption5(true)
  }else{
    setoption5(false)
  }
  }}   />
  </th>
  <th className=" p-2">
  <span className="">2XL</span>
  </th>
  <th className=" p-2">
  <input type="text" value={option5p} onChange={(e)=>{setoption5p(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
  </th>
  <th>
  <input type="text" value={option5s} onChange={(e)=>{setoption5s(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />

      </th>
</tr>
{/* 6 */}
<tr>
<th className=" p-2">
<input type="checkbox" className="checkbox checkbox-primary bg-black ring-black" onChange={(e)=>{
  if(option6 == false){
    setoption6(true)
  }else{
    setoption6(false)
  }
  }}   />
  </th>
  <th className=" p-2">
  <span className="">3XL</span>
  </th>
  <th className=" p-2">
  <input type="text" value={option6p} onChange={(e)=>{setoption6p(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
  </th>
  <th>
  <input type="text" value={option6s} onChange={(e)=>{setoption6s(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
      </th>
</tr>
<tr>
    <th className=" p-2">
      <input type="checkbox" className="checkbox checkbox-primary bg-black ring-black" onChange={(e)=>{
  if(option11 == false){
    setoption11(true)
  }else{
    setoption11(false)
  }
  }}   />
      </th>
      <th className=" p-2">
      <span className="">4XL</span>
      </th>
      <th className=" p-2">
      <input type="text" value={option11p} onChange={(e)=>{setoption11p(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
      </th>
      <th>
      <input type="text" value={option11s} onChange={(e)=>{setoption11s(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
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
<div className={'grid mt-12 ml-6  sm:grid-cols-1 ' + colorcheck}>
<table className=" max-w-screen w-auto text-center p-12  ...">
  <thead>
    <tr cl>
      {/* cuopsvT1i */}
      <th className=" p-2">Enable</th>
      <div data-tip="Click on the color to chenge it" className="tooltip tooltip-open">
      <th className=" p-2">Color</th>
      </div>
      <th className=" p-2">In stock</th>
    </tr>
  </thead>
  <tbody>
<tr className=''>
  <th className="">
  <input className="checkbox checkbox-primary bg-black ring-black" type="checkbox" onChange={(e)=>{
  if(cooption1 == false){
    setcooption1(true)
  }else{
    setcooption1(false)
  }
  }}   /> 
  </th>
  <th>
  <div className="grid place-items-center " onClick={()=>{
  if (color1s == 'hidden') {
    setColor1s('')
  }else{
    setColor1s('hidden')
  }
}}>
<div style={{backgroundColor: color1}} className="w-6 h-6 text-center rounded-full"></div>
</div>
<div className={"my-2 grid place-items-center " + color1s}>
  <HexColorPicker color={color1} onChange={setColor1} />
  </div>
  </th>
  <th>
  <input type="text" value={cooption1s} onChange={(e)=>{setcooption1s(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
  </th>
</tr>
{/* 2 */}
<tr className="h-16">
  <th className="">
  <input className="checkbox checkbox-primary bg-black ring-black" type="checkbox" onChange={(e)=>{
  if(cooption2 == false){
    setcooption2(true)
  }else{
    setcooption2(false)
  }
  }}   /> 
  </th>
  <th>
  <div className="grid place-items-center" onClick={()=>{
  if (color2s == 'hidden') {
    setColor2s('')
  }else{
    setColor2s('hidden')
  }
}}>
<div style={{backgroundColor: color2}} className="w-6 h-6 rounded-full"></div>
</div>


  <div className={"grid mt-4 place-items-center " + color2s}>
  <HexColorPicker color={color2} onChange={setColor2} />
  </div>

  </th>
  <th>
  <input type="text" value={cooption2s} onChange={(e)=>{setcooption2s(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />

  </th>
</tr>
<tr>
  {/* 3 */}
  <th className="h-16">
  <input className="checkbox checkbox-primary bg-black ring-black" type="checkbox" onChange={(e)=>{
  if(cooption3 == false){
    setcooption3(true)
  }else{
    setcooption3(false)
  }
  }}   /> 
  </th>
  <th>
  <div className="grid place-items-center" onClick={()=>{
  if (color3s == 'hidden') {
    setColor3s('')
  }else{
    setColor3s('hidden')
  }
}}>
<div style={{backgroundColor: color3}} className="w-6 h-6 rounded-full"></div>
</div>


  <div className={"grid place-items-center mt-4 " + color3s}>
  <HexColorPicker color={color3} onChange={setColor3} />
  </div>

  </th>
  <th>
  <input type="text" value={cooption3s} onChange={(e)=>{setcooption3s(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />

  </th>
</tr>
<tr>
  {/* 4 */}
  <th className="h-16">
  <input className="checkbox checkbox-primary bg-black ring-black" type="checkbox" onChange={(e)=>{
  if(cooption4 == false){
    setcooption4(true)
  }else{
    setcooption4(false)
  }
  }}   /> 
  </th>
  <th>
  <div className="grid place-items-center" onClick={()=>{
  if (color4s == 'hidden') {
    setColor4s('')
  }else{
    setColor4s('hidden')
  }
}}>
<div style={{backgroundColor: color4}} className="w-6 h-6 rounded-full"></div>
</div>


  <div className={"mt-4 grid place-items-center " + color4s}>
  <HexColorPicker color={color4} onChange={setColor4} />
  </div>

  </th>
  <th>
  <input type="text" value={cooption4s} onChange={(e)=>{setcooption4s(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />

  </th>
</tr>
<tr>
  {/* 5 */}
  <th className="h-16">
  <input className="checkbox checkbox-primary bg-black ring-black" type="checkbox" onChange={(e)=>{
  if(cooption5 == false){
    setcooption5(true)
  }else{
    setcooption5(false)
  }
  }}   /> 
  </th>
  <th>
  <div className="grid place-items-center" onClick={()=>{
  if (color5s == 'hidden') {
    setColor5s('')
  }else{
    setColor5s('hidden')
  }
}}>
<div style={{backgroundColor: color5}} className="w-6 h-6 rounded-full"></div>
</div>


  <div className={"mt-4 grid place-items-center " + color5s}>
  <HexColorPicker color={color5} onChange={setColor5} />
  </div>

  </th>
  <th>
  <input type="text" value={cooption5s} onChange={(e)=>{setcooption5s(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />

  </th>
</tr>
<tr>
  <th className="h-16">
  <input className="checkbox checkbox-primary bg-black ring-black" type="checkbox" onChange={(e)=>{
  if(cooption6 == false){
    setcooption6(true)
  }else{
    setcooption6(false)
  }
  }}   /> 
  </th>
  <th>
  <div className="grid place-items-center" onClick={()=>{
  if (color6s == 'hidden') {
    setColor6s('')
  }else{
    setColor6s('hidden')
  }
}}>
<div style={{backgroundColor: color6}} className="w-6 h-6 rounded-full"></div>
</div>


  <div className={"mt-4 grid place-items-center " + color6s}>
  <HexColorPicker color={color6} onChange={setColor6} />
  </div>

  </th>
  <th>
  <input type="text" value={cooption6s} onChange={(e)=>{setcooption6s(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />

  </th>
</tr>
{/* 7 */}
<tr>
  <th className="h-16">
  <input className="checkbox checkbox-primary bg-black ring-black" type="checkbox" onChange={(e)=>{
  if(cooption7 == false){
    setcooption7(true)
  }else{
    setcooption7(false)
  }
  }}   /> 
  </th>
  <th>
  <div className="grid place-items-center" onClick={()=>{
  if (color7s == 'hidden') {
    setColor7s('')
  }else{
    setColor7s('hidden')
  }
}}>
<div style={{backgroundColor: color7}} className="w-6 h-6 rounded-full"></div>
</div>


  <div className={"mt-4 grid place-items-center " + color7s}>
  <HexColorPicker color={color7} onChange={setColor7} />
  </div>

  </th>
  <th>
  <input type="text" value={cooption7s} onChange={(e)=>{setcooption7s(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />

  </th>
</tr>
{/* 8 */}
<tr>
  <th className="h-16">
  <input className="checkbox checkbox-primary bg-black ring-black" type="checkbox" onChange={(e)=>{
  if(cooption8 == false){
    setcooption8(true)
  }else{
    setcooption8(false)
  }
  }}   /> 
  </th>
  <th>
  <div className="grid place-items-center" onClick={()=>{
  if (color8s == 'hidden') {
    setColor8s('')
  }else{
    setColor8s('hidden')
  }
}}>
<div style={{backgroundColor: color8}} className="w-6 h-6 rounded-full"></div>
</div>


  <div className={"mt-4 grid place-items-center " + color8s}>
  <HexColorPicker color={color8} onChange={setColor8} />
  </div>

  </th>
  <th>
  <input type="text" value={cooption8s} onChange={(e)=>{setcooption8s(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />

  </th>
</tr>
  </tbody>
    </table>

{/* 1 */}
  <div className=' mb-4 flex'>





  </div>
{/* 2 */}
<div className=' mb-4 flex'>


  </div>
{/* 3 */}
<div className=' mb-4 flex'>


  </div>
{/* 4 */}
<div className=' mb-4 flex'>


  </div>
{/* 5 */}
<div className=' mb-4 flex'>


  </div>
{/* 6 */}
<div className=' mb-4 flex'>


  </div>



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

<div className={"mt-4 ml-4 " + cuops}>
<div>
<label className="-ml-1 mb-2">Option name:</label>
      <input type="text" value={cuopsN} onChange={(e)=>{setcuopsN(e.target.value)}} autoComplete='false' className="w-full h-8 mt-2 rounded-xl mb-6 input input-accent input-bordered bg-black focus:ring-black"></input>
  </div>
<table className=" max-w-screen w-auto text-center  ...">
  <thead>
    <tr>
      {/* cuopsvT1i */}
      <th className=" p-2">Enable</th>
      <th className=" p-2">Name</th>
      <th className=" p-2">Price</th>
      <th className=" p-2">In stock</th>
    </tr>
  </thead>
  
  <tbody>
    {/* 1 */}
  <tr>
<th className=" p-2">
<input className="checkbox checkbox-primary bg-black ring-black" type="checkbox" onChange={(e)=>{
  if(cuopsT1 == false){
    setcuopsT1(true)
  }else{
    setcuopsT1(false)
  }
  }}   />
  </th>
  <th className=" p-2">
  <input type="text" value={cuopsvT1} onChange={(e)=>{setcuopsvT1(e.target.value)}} autoComplete='false' className="w-52 h-9 input input-accent input-bordered bg-black focus:ring-black"></input>
  </th>
  <th className=" p-2">
  <input type="text" value={cuopsvT1p} onChange={(e)=>{setcuopsvT1p(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
  </th>
  <th>
  <input type="text" value={cuopsvT1i} onChange={(e)=>{setcuopsvT1i(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />

  </th>
</tr>
{/* 2 */}
<tr>
<th className=" p-2">
<input className="checkbox checkbox-primary bg-black ring-black" type="checkbox" onChange={(e)=>{
  if(cuopsT2 == false){
    setcuopsT2(true)
  }else{
    setcuopsT2(false)
  }
  }}   /> 
  </th>
  <th className=" p-2">
  <input type="text" value={cuopsvT2} onChange={(e)=>{setcuopsvT2(e.target.value)}} autoComplete='false' className="w-52 h-9 input input-accent input-bordered bg-black focus:ring-black"></input>
  </th>
  <th className=" p-2">
  <input type="text" value={cuopsvT2p} onChange={(e)=>{setcuopsvT2p(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
  </th>
  <th>
  <input type="text" value={cuopsvT2i} onChange={(e)=>{setcuopsvT2i(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />

  </th>
</tr>
{/* 3 */}
<tr>
<th className=" p-2">
<input className="checkbox checkbox-primary bg-black ring-black" type="checkbox" onChange={(e)=>{
  if(cuopsT3 == false){
    setcuopsT3(true)
  }else{
    setcuopsT3(false)
  }
  }}   />
  </th>
  <th className=" p-2">
  <input type="text" value={cuopsvT3} onChange={(e)=>{setcuopsvT3(e.target.value)}} autoComplete='false' className="w-52 h-9 input input-accent input-bordered bg-black focus:ring-black"></input>

  </th>
  <th className=" p-2">
  <input type="text" value={cuopsvT3p} onChange={(e)=>{setcuopsvT3p(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
  </th>
  <th>
  <input type="text" value={cuopsvT3i} onChange={(e)=>{setcuopsvT3i(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />

  </th>
</tr>
{/* 4 */}
<tr>
<th className=" p-2">
<input className="checkbox checkbox-primary bg-black ring-black" type="checkbox" onChange={(e)=>{
  if(cuopsT4 == false){
    setcuopsT4(true)
  }else{
    setcuopsT4(false)
  }
  }}   />
  </th>
  <th className=" p-2">
  <input type="text" value={cuopsvT4} onChange={(e)=>{setcuopsvT4(e.target.value)}} autoComplete='false' className="w-52 h-9 input input-accent input-bordered bg-black focus:ring-black"></input>

  </th>
  <th className=" p-2">
  <input type="text" value={cuopsvT4p} onChange={(e)=>{setcuopsvT4p(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
  </th>
  <th>
  <input type="text" value={cuopsvT4i} onChange={(e)=>{setcuopsvT4i(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />

  </th>
</tr>
{/* 5 */}
<tr>
<th className=" p-2">
<input className="checkbox checkbox-primary bg-black ring-black" type="checkbox" onChange={(e)=>{
  if(cuopsT5 == false){
    setcuopsT5(true)
  }else{
    setcuopsT5(false)
  }
  }}   />
  </th>
  <th className=" p-2">
  <input type="text" value={cuopsvT5} onChange={(e)=>{setcuopsvT5(e.target.value)}} autoComplete='false' className="w-52 h-9 input input-accent input-bordered bg-black focus:ring-black"></input>

  </th>
  <th className=" p-2">
  <input type="text" value={cuopsvT5p} onChange={(e)=>{setcuopsvT5p(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
  </th>
  <th>
  <input type="text" value={cuopsvT5i} onChange={(e)=>{setcuopsvT5i(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />

  </th>
</tr>
{/* 6 */}
<tr>
<th className=" p-2">
<input className="checkbox checkbox-primary bg-black ring-black" type="checkbox" onChange={(e)=>{
  if(cuopsT6 == false){
    setcuopsT6(true)
  }else{
    setcuopsT6(false)
  }
  }}   />
  </th>
  <th className=" p-2">
  <input type="text" value={cuopsvT6} onChange={(e)=>{setcuopsvT6(e.target.value)}} autoComplete='false' className="w-52 h-9 input input-accent input-bordered bg-black focus:ring-black"></input>

  </th>
  <th className=" p-2">
  <input type="text" value={cuopsvT6p} onChange={(e)=>{setcuopsvT6p(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
  </th>
  <th>
  <input type="text" value={cuopsvT6i} onChange={(e)=>{setcuopsvT6i(e.target.value.replace(/[A-z]/g, ''))}} className="w-24 h-9 input input-accent input-bordered bg-black focus:ring-black mt-2" />
  </th>
</tr>
  </tbody>
    </table>
</div>

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
    )
} 
export default Add_product

