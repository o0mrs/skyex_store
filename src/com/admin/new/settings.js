import axios from 'axios'
import { React,useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
// import Settings from '../../unused/settings'
const Settings = ({tabname,av})=>{
    const [logo, setlogo] = useState(av)
    const cookies = new Cookies();
      const [tab, settab] = useState('loading')
      const userToken = cookies.get('userToken')
      const [newalart,setnewalart] = useState([])
      const [nametochange, setnametochange] = useState('')
      const [CURRENCY, setCURRENCY] = useState('JOD')
const [prog, setprog] = useState(0);
      const navigate = useNavigate();
      // length 164
var currency_list = [
  {"name":"Afghan Afghani","code":"AFA","id":1},
  {"name":"Albanian Lek","code":"ALL","id":2},
  {"name":"Algerian Dinar","code":"DZD","id":3},
  {"name":"Angolan Kwanza","code":"AOA","id":4},
  {"name":"Argentine Peso","code":"ARS","id":5},
  {"name":"Armenian Dram","code":"AMD","id":6},
  {"name":"Aruban Florin","code":"AWG","id":7},
  {"name":"Australian Dollar","code":"AUD","id":8},
  {"name":"Azerbaijani Manat","code":"AZN","id":9},
  {"name":"Bahamian Dollar","code":"BSD","id":10},
  {"name":"Bahraini Dinar","code":"BHD","id":11},
  {"name":"Bangladeshi Taka","code":"BDT","id":12},
  {"name":"Barbadian Dollar","code":"BBD","id":13},
  {"name":"Belarusian Ruble","code":"BYR","id":14},
  {"name":"Belgian Franc","code":"BEF","id":15},
  {"name":"Belize Dollar","code":"BZD","id":16},
  {"name":"Bermudan Dollar","code":"BMD","id":17},
  {"name":"Bhutanese Ngultrum","code":"BTN","id":18},
  {"name":"Bitcoin","code":"BTC","id":19},
  {"name":"Bolivian Boliviano","code":"BOB","id":20},
  {"name":"Bosnia-Herzegovina Convertible Mark","code":"BAM","id":21},
  {"name":"Botswanan Pula","code":"BWP","id":22},
  {"name":"Brazilian Real","code":"BRL","id":23},
  {"name":"British Pound Sterling","code":"GBP","id":24},
  {"name":"Brunei Dollar","code":"BND","id":25},
  {"name":"Bulgarian Lev","code":"BGN","id":26},
  {"name":"Burundian Franc","code":"BIF","id":27},
  {"name":"Cambodian Riel","code":"KHR","id":28},
  {"name":"Canadian Dollar","code":"CAD","id":29},
  {"name":"Cape Verdean Escudo","code":"CVE","id":30},
  {"name":"Cayman Islands Dollar","code":"KYD","id":31},
  {"name":"CFA Franc BCEAO","code":"XOF","id":32},
  {"name":"CFA Franc BEAC","code":"XAF","id":33},
  {"name":"CFP Franc","code":"XPF","id":34},
  {"name":"Chilean Peso","code":"CLP","id":35},
  {"name":"Chinese Yuan","code":"CNY","id":36},
  {"name":"Colombian Peso","code":"COP","id":37},
  {"name":"Comorian Franc","code":"KMF","id":38},
  {"name":"Congolese Franc","code":"CDF","id":39},
  {"name":"Costa Rican ColÃ³n","code":"CRC","id":40},
  {"name":"Croatian Kuna","code":"HRK","id":41},
  {"name":"Cuban Convertible Peso","code":"CUC","id":42},
  {"name":"Czech Republic Koruna","code":"CZK","id":43},
  {"name":"Danish Krone","code":"DKK","id":44},
  {"name":"Djiboutian Franc","code":"DJF","id":45},
  {"name":"Dominican Peso","code":"DOP","id":46},
  {"name":"East Caribbean Dollar","code":"XCD","id":47},
  {"name":"Egyptian Pound","code":"EGP","id":48},
  {"name":"Eritrean Nakfa","code":"ERN","id":49},
  {"name":"Estonian Kroon","code":"EEK","id":50},
  {"name":"Ethiopian Birr","code":"ETB","id":51},
  {"name":"Euro","code":"EUR","id":52},
  {"name":"Falkland Islands Pound","code":"FKP","id":53},
  {"name":"Fijian Dollar","code":"FJD","id":54},
  {"name":"Gambian Dalasi","code":"GMD","id":55},
  {"name":"Georgian Lari","code":"GEL","id":56},
  {"name":"German Mark","code":"DEM","id":57},
  {"name":"Ghanaian Cedi","code":"GHS","id":58},
  {"name":"Gibraltar Pound","code":"GIP","id":59},
  {"name":"Greek Drachma","code":"GRD","id":60},
  {"name":"Guatemalan Quetzal","code":"GTQ","id":61},
  {"name":"Guinean Franc","code":"GNF","id":62},
  {"name":"Guyanaese Dollar","code":"GYD","id":63},
  {"name":"Haitian Gourde","code":"HTG","id":64},
  {"name":"Honduran Lempira","code":"HNL","id":65},
  {"name":"Hong Kong Dollar","code":"HKD","id":66},
  {"name":"Hungarian Forint","code":"HUF","id":67},
  {"name":"Icelandic KrÃ³na","code":"ISK","id":68},
  {"name":"Indian Rupee","code":"INR","id":69},
  {"name":"Indonesian Rupiah","code":"IDR","id":70},
  {"name":"Iranian Rial","code":"IRR","id":71},
  {"name":"Iraqi Dinar","code":"IQD","id":72},
  {"name":"Israeli New Sheqel","code":"ILS","id":73},
  {"name":"Italian Lira","code":"ITL","id":74},
  {"name":"Jamaican Dollar","code":"JMD","id":75},
  {"name":"Japanese Yen","code":"JPY","id":76},
  {"name":"Jordanian Dinar","code":"JOD","id":77},
  {"name":"Kazakhstani Tenge","code":"KZT","id":78},
  {"name":"Kenyan Shilling","code":"KES","id":79},
  {"name":"Kuwaiti Dinar","code":"KWD","id":80},
  {"name":"Kyrgystani Som","code":"KGS","id":81},
  {"name":"Laotian Kip","code":"LAK","id":82},
  {"name":"Latvian Lats","code":"LVL","id":83},
  {"name":"Lebanese Pound","code":"LBP","id":84},
  {"name":"Lesotho Loti","code":"LSL","id":85},
  {"name":"Liberian Dollar","code":"LRD","id":86},
  {"name":"Libyan Dinar","code":"LYD","id":87},
  {"name":"Lithuanian Litas","code":"LTL","id":88},
  {"name":"Macanese Pataca","code":"MOP","id":89},
  {"name":"Macedonian Denar","code":"MKD","id":90},
  {"name":"Malagasy Ariary","code":"MGA","id":91},
  {"name":"Malawian Kwacha","code":"MWK","id":92},
  {"name":"Malaysian Ringgit","code":"MYR","id":93},
  {"name":"Maldivian Rufiyaa","code":"MVR","id":94},
  {"name":"Mauritanian Ouguiya","code":"MRO","id":95},
  {"name":"Mauritian Rupee","code":"MUR","id":96},
  {"name":"Mexican Peso","code":"MXN","id":97},
  {"name":"Moldovan Leu","code":"MDL","id":98},
  {"name":"Mongolian Tugrik","code":"MNT","id":99},
  {"name":"Moroccan Dirham","code":"MAD","id":100},
  {"name":"Mozambican Metical","code":"MZM","id":101},
  {"name":"Myanmar Kyat","code":"MMK","id":102},
  {"name":"Namibian Dollar","code":"NAD","id":103},
  {"name":"Nepalese Rupee","code":"NPR","id":104},
  {"name":"Netherlands Antillean Guilder","code":"ANG","id":105},
  {"name":"New Taiwan Dollar","code":"TWD","id":106},
  {"name":"New Zealand Dollar","code":"NZD","id":107},
  {"name":"Nicaraguan CÃ³rdoba","code":"NIO","id":108},
  {"name":"Nigerian Naira","code":"NGN","id":109},
  {"name":"North Korean Won","code":"KPW","id":110},
  {"name":"Norwegian Krone","code":"NOK","id":111},
  {"name":"Omani Rial","code":"OMR","id":112},
  {"name":"Pakistani Rupee","code":"PKR","id":113},
  {"name":"Panamanian Balboa","code":"PAB","id":114},
  {"name":"Papua New Guinean Kina","code":"PGK","id":115},
  {"name":"Paraguayan Guarani","code":"PYG","id":116},
  {"name":"Peruvian Nuevo Sol","code":"PEN","id":117},
  {"name":"Philippine Peso","code":"PHP","id":118},
  {"name":"Polish Zloty","code":"PLN","id":119},
  {"name":"Qatari Rial","code":"QAR","id":120},
  {"name":"Romanian Leu","code":"RON","id":121},
  {"name":"Russian Ruble","code":"RUB","id":122},
  {"name":"Rwandan Franc","code":"RWF","id":123},
  {"name":"Salvadoran ColÃ³n","code":"SVC","id":124},
  {"name":"Samoan Tala","code":"WST","id":125},
  {"name":"Saudi Riyal","code":"SAR","id":126},
  {"name":"Serbian Dinar","code":"RSD","id":127},
  {"name":"Seychellois Rupee","code":"SCR","id":128},
  {"name":"Sierra Leonean Leone","code":"SLL","id":129},
  {"name":"Singapore Dollar","code":"SGD","id":130},
  {"name":"Slovak Koruna","code":"SKK","id":131},
  {"name":"Solomon Islands Dollar","code":"SBD","id":132},
  {"name":"Somali Shilling","code":"SOS","id":133},
  {"name":"South African Rand","code":"ZAR","id":134},
  {"name":"South Korean Won","code":"KRW","id":135},
  {"name":"Special Drawing Rights","code":"XDR","id":136},
  {"name":"Sri Lankan Rupee","code":"LKR","id":137},
  {"name":"St. Helena Pound","code":"SHP","id":138},
  {"name":"Sudanese Pound","code":"SDG","id":139},
  {"name":"Surinamese Dollar","code":"SRD","id":140},
  {"name":"Swazi Lilangeni","code":"SZL","id":141},
  {"name":"Swedish Krona","code":"SEK","id":142},
  {"name":"Swiss Franc","code":"CHF","id":143},
  {"name":"Syrian Pound","code":"SYP","id":144},
  {"name":"São Tomé and Príncipe Dobra","code":"STD","id":145},
  {"name":"Tajikistani Somoni","code":"TJS","id":146},
  {"name":"Tanzanian Shilling","code":"TZS","id":147},
  {"name":"Thai Baht","code":"THB","id":148},
  {"name":"Tongan Pa'anga","code":"TOP","id":149},
  {"name":"Trinidad & Tobago Dollar","code":"TTD","id":150},
  {"name":"Tunisian Dinar","code":"TND","id":151},
  {"name":"Turkish Lira","code":"TRY","id":152},
  {"name":"Turkmenistani Manat","code":"TMT","id":153},
  {"name":"Ugandan Shilling","code":"UGX","id":154},
  {"name":"Ukrainian Hryvnia","code":"UAH","id":155},
  {"name":"United Arab Emirates Dirham","code":"AED","id":156},
  {"name":"Uruguayan Peso","code":"UYU","id":157},
  {"name":"US Dollar","code":"USD","id":158},
  {"name":"Uzbekistan Som","code":"UZS","id":159},
  {"name":"Vanuatu Vatu","code":"VUV","id":160},
  {"name":"Venezuelan BolÃvar","code":"VEF","id":161},
  {"name":"Vietnamese Dong","code":"VND","id":162},
  {"name":"Yemeni Rial","code":"YER","id":163},
  {"name":"Zambian Kwacha","code":"ZMK","id":164}
];
const imageChange = (e) => {
  if (e.target.files && e.target.files.length > 0) {
    settab('loading')
    // setimgs(e.target.files[0]);
    // console.log(URL.createObjectURL(e.target.files[0]))
    // console.log(e.target.files[0])
    console.log('ff' + e.target.files.length)
    var imgsss = []
    // var id = imgid
    var imgTo = []
    for (var i = 0; i < e.target.files.length; i++) {
      const data = new FormData();
      imgsss.push({image:URL.createObjectURL(e.target.files[i])})
      // console.log('f'+imgsss.length)

      const ii = e.target.files[i]
      data.append('file',ii)
      data.append('userToken',userToken)
      // var idd = id + i + 1
      data.append('id',2)
      data.append('username',localStorage.getItem('username'))
      // console.log(data)
      setTimeout(()=>{
        axios.post(window.$api + 'change_store_logo',data).then((Response)=>{
          if(Response.data.image){
            window.location.reload();
            
          }
          // imgTo.push(Response.data)
          if (imgsss.length ==  e.target.files.length){
            // console.log(imgTo)
            // console.log(imgsss)
            // setpreview_image([...preview_image,...imgsss])
            // setimgs([...imgs,...imgTo])
            // setimgid(imgid + e.target.files.length)
          }
      })
      }, 500);

      // console.log(id)
    }


  }
};
useEffect(()=>{
  axios.post(window.$api + 'getstoreinfo',{userToken: userToken,username: localStorage.getItem('username'),}).then((Response)=>{
	setnametochange(Response.data.name)
	settab('project')
	setCURRENCY(Response.data.currency)
  })
},[])
const handlesubmit = ()=>{
	if(prog == 0){
		setprog(1)
		axios.post(window.$api + 'changesettings',{      userToken: userToken,
      username: localStorage.getItem('username'),name:nametochange,currency:CURRENCY}).then((Response)=>{
			console.log(Response)
		setprog(0)

			if(Response.data.status == 0){
			  cookies.remove("userToken")
			  navigate('/admin/login', { replace: true })
			}else if(Response.data.status == 22){
        navigate('/admin/dashboard/noperm', { replace: false })
      
      }else{
				console.log(Response)
			}
		  })
	}else{

	}

}
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

<div>
<div className='grid place-items-center'>


<div className='w-[100%] grid'>
  <div className='w-[100%]'>
  {prog == 0 && (
<div className='float-right mr-3 text-cyan-700 ' onClick={handlesubmit}>

<a>Save</a>
</div>
		)}

	{prog == 1 && (
<div className='float-right text-cyan-700 -mt-6  -mb-8' onClick={handlesubmit}>
		
					<button className="btn btn-sm btn-outline border-black loading"></button> 
					</div>
		)}
  </div>

{/* 
store icon check
store name check
curncy
catargy
*/}

<div className='grid place-items-center mt-5'>
<img className='rounded-full w-32 h-32 ' src='https://storeapi.skyex.me/logo'/>
<div className="mt-5" >
  <div className=" rounded-btn  ">
  <label id='imageu' className="inline-block  w-full  ">
<span className='text-cyan-800 cursor-pointer'>Change logo</span>
  <input type="file" className="w-full hidden " multiple placeholder=""  ondrop={imageChange} onChange={imageChange}/>
  </label>

  </div> 
</div>
<div className='mt-5'>
  <div className='grid mb-3'>
  <label className='ml-2 text-gray-400 mb-1'>Store Name:</label>
  <input type='text' onChange={(e)=>{

	  setnametochange(e.target.value)
  }} value={nametochange} className='input bg-base-300'/>
  </div>

  <div className='grid mb-3 text-gray-400'>
  <label className='ml-2  mb-1'>Currency<span className='text-green-600'> ({CURRENCY})</span></label>
  <select name="" v className='select select-bordered w-full max-w-xs bg-base-300' onChange={(e)=>{setCURRENCY(e.target.value)}}>
	  {currency_list.map((gf,i)=>{
		  
		  if(gf.code == CURRENCY){
			console.log(gf.code)
			  return (
				//   enabled
				<option selected='selected' value={gf.code}>{gf.name}</option>
			  )
		  }else{
			  return(
				<option value={gf.code} >{gf.name}</option>
			  )
		  }
	  })}
</select>
  </div>


</div>
<div className='mt-3' onClick={()=>{navigate('/admin/dashboard/Catagorys',{replace: false})}}>
	<span className="btn text-white">Edit catagory</span>
	
</div>
{/* <div className="alert m-4 mt-7">
  <div className="flex-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 mx-2">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
    </svg> 
    <label>If you want to use PayPal check <a href='https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/' target='_blank' className="underline underline-offset-4 cursor-pointer	decoration-sky-500">PayPal supported Currencys</a>!</label>
  </div>
</div> */}

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
export default Settings;