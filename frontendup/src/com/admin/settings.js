import axios from 'axios'
import { React,useEffect,useState } from "react"
import Loading from '../loading'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'

const cookies = new Cookies();
const Settings = ({setbar, bar,setTabo})=>{ 
const [tab, settab] = useState('loading')
const [username, setusername] = useState('')
const [password, setpassword] = useState('')
const [ordersnum, setordersnum] = useState('')
const [productsCount, setproductsCount] = useState('')
const [earn, setearn] = useState(0)
const [CURRENCY, setCURRENCY] = useState('JOD')
const [CURRENCYcu, setCURRENCYcu] = useState('JOD')
const userToken = cookies.get('userToken')
const [nametochange, setnametochange] = useState('')
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
        <>
        {/* sm: md: lg: xl: */}

        <div id='d99' className="text-gray-900">
<div id='c3' className="bg-gray-900  h-16 w-screen pl-5 text-gray-200 py-5 text-xl">Settings <span onClick={()=>{
 
if(bar == 'hidden'){
 setbar('')
 }else{
  setbar('hidden')
 }
  
  
  }}>
<i  className="fa-solid fa-bars float-right pr-3 pt-1"></i>

</span></div>

<div className=''>
		{prog == 0 && (
<div className='float-right text-cyan-700 -mt-6 mr-4 -mb-8' onClick={handlesubmit}>

<a>Save</a>
</div>
		)}

	{prog == 1 && (
<div className='float-right text-cyan-700 -mt-6  -mb-8' onClick={handlesubmit}>
		
					<button className="btn btn-sm btn-outline border-black loading"></button> 
					</div>
		)}
{/* 
store icon check
store name check
curncy
catargy
*/}

<div className='grid place-items-center mt-5'>
<img className='rounded-full w-24 h-24 ' src='/logo512.png'/>
<span className='text-blue-600'>Change logo</span>
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
<div className='mt-3'>
	<span className="btn" onClick={()=>{setTabo('catagory')}}>Edit catagory</span>
	
</div>
{/* <div className="alert m-4 mt-7">
  <div className="flex-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 mx-2">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
    </svg> 
    <label>If you want to use PayPal check <a href='https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/' target='_blank' className="underline underline-offset-4 cursor-pointer	decoration-sky-500">PayPal supported Currencys</a>!</label>
  </div>
</div> */}

</div>
</div>
        </div>

        </>
    )}else if(tab == 'loading'){
		return(
			<div id='d99' className="grid place-items-center w-screen">
			<div className="snippet" data-title=".dot-pulse">
			  <div className="stage">
				<div className="dot-pulse"></div>
			  </div>
			</div>
		  </div>
		)
	}
}
export default Settings

