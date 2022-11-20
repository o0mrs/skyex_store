import { Fragment, useEffect, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import { useNavigate,useParams } from 'react-router-dom'
import Cookies from 'universal-cookie';
import axios from 'axios'
const Currency = 'JOD'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({up,dsa,setgg}) {
  const navigate = useNavigate();
const [catagorysA, setcatagorysA] = useState([])
const [productsnum, setproductsnum] = useState(0)
const [cart, setcart] = useState([])
const [price, setprice] = useState(0)
const [currency, setcurrency] = useState('')
const [up2, setup2] = useState(0)


useEffect(()=>{

  // console.log(up)
  const gcart = JSON.parse(localStorage.getItem('cart'))
  var priceC = 0
  if(gcart){
    setproductsnum(gcart.length)
    setcart(gcart)
  //  console.log(gcart)
   if(gcart.length > 0){

    var sum = null;
    let counter = 0
    gcart.forEach(function(value, index, arry){
     sum += parseFloat(value.price);
     counter++
     if(counter == gcart.length ){
       setprice(sum)
      }
    });
   }else{
    setproductsnum(0)
    setprice(0)
  }

 

  
  }else{
    setproductsnum(0)
    setprice(0)
  }

},[up,up2])
useEffect(()=>{     
  axios.get(window.$api + 'currency').then((Response)=>{
    var currency_list = [
      {"code":"AFA","symbol":"؋","id":1},
      {"code":"ALL","symbol":"Lek","id":2},
      {"code":"DZD","symbol":"دج","id":3},
      {"code":"AOA","symbol":"Kz","id":4},
      {"code":"ARS","symbol":"$","id":5},
      {"code":"AMD","symbol":"֏","id":6},
      {"code":"AWG","symbol":"ƒ","id":7},
      {"code":"AUD","symbol":"$","id":8},
      {"code":"AZN","symbol":"m","id":9},
      {"code":"BSD","symbol":"B$","id":10},
      {"code":"BHD","symbol":".د.ب","id":11},
      {"code":"BDT","symbol":"৳","id":12},
      {"code":"BBD","symbol":"Bds$","id":13},
      {"code":"BYR","symbol":"Br","id":14},
      {"code":"BEF","symbol":"fr","id":15},
      {"code":"BZD","symbol":"$","id":16},
      {"code":"BMD","symbol":"$","id":17},
      {"code":"BTN","symbol":"Nu.","id":18},
      {"code":"BTC","symbol":"฿","id":19},
      {"code":"BOB","symbol":"Bs.","id":20},
      {"code":"BAM","symbol":"KM","id":21},
      {"code":"BWP","symbol":"P","id":22},
      {"code":"BRL","symbol":"R$","id":23},
      {"code":"GBP","symbol":"£","id":24},
      {"code":"BND","symbol":"B$","id":25},
      {"code":"BGN","symbol":"Лв.","id":26},
      {"code":"BIF","symbol":"FBu","id":27},
      {"code":"KHR","symbol":"KHR","id":28},
      {"code":"CAD","symbol":"$","id":29},
      {"code":"CVE","symbol":"$","id":30},
      {"code":"KYD","symbol":"$","id":31},
      {"code":"XOF","symbol":"CFA","id":32},
      {"code":"XAF","symbol":"FCFA","id":33},
      {"code":"XPF","symbol":"₣","id":34},
      {"code":"CLP","symbol":"$","id":35},
      {"code":"CNY","symbol":"¥","id":36},
      {"code":"COP","symbol":"$","id":37},
      {"code":"KMF","symbol":"CF","id":38},
      {"code":"CDF","symbol":"FC","id":39},
      {"code":"CRC","symbol":"₡","id":40},
      {"code":"HRK","symbol":"kn","id":41},
      {"code":"CUC","symbol":"$, CUC","id":42},
      {"code":"CZK","symbol":"Kč","id":43},
      {"code":"DKK","symbol":"Kr.","id":44},
      {"code":"DJF","symbol":"Fdj","id":45},
      {"code":"DOP","symbol":"$","id":46},
      {"code":"XCD","symbol":"$","id":47},
      {"code":"EGP","symbol":"ج.م","id":48},
      {"code":"ERN","symbol":"Nfk","id":49},
      {"code":"EEK","symbol":"kr","id":50},
      {"code":"ETB","symbol":"Nkf","id":51},
      {"code":"EUR","symbol":"€","id":52},
      {"code":"FKP","symbol":"£","id":53},
      {"code":"FJD","symbol":"FJ$","id":54},
      {"code":"GMD","symbol":"D","id":55},
      {"code":"GEL","symbol":"ლ","id":56},
      {"code":"DEM","symbol":"DM","id":57},
      {"code":"GHS","symbol":"GH₵","id":58},
      {"code":"GIP","symbol":"£","id":59},
      {"code":"GRD","symbol":"₯, Δρχ, Δρ","id":60},
      {"code":"GTQ","symbol":"Q","id":61},
      {"code":"GNF","symbol":"FG","id":62},
      {"code":"GYD","symbol":"$","id":63},
      {"code":"HTG","symbol":"G","id":64},
      {"code":"HNL","symbol":"L","id":65},
      {"code":"HKD","symbol":"$","id":66},
      {"code":"HUF","symbol":"Ft","id":67},
      {"code":"ISK","symbol":"kr","id":68},
      {"code":"INR","symbol":"₹","id":69},
      {"code":"IDR","symbol":"Rp","id":70},
      {"code":"IRR","symbol":"﷼","id":71},
      {"code":"IQD","symbol":"د.ع","id":72},
      {"code":"ILS","symbol":"₪","id":73},
      {"code":"ITL","symbol":"L,£","id":74},
      {"code":"JMD","symbol":"J$","id":75},
      {"code":"JPY","symbol":"¥","id":76},
      {"code":"JOD","symbol":"ا.د","id":77},
      {"code":"KZT","symbol":"лв","id":78},
      {"code":"KES","symbol":"KSh","id":79},
      {"code":"KWD","symbol":"ك.د","id":80},
      {"code":"KGS","symbol":"лв","id":81},
      {"code":"LAK","symbol":"₭","id":82},
      {"code":"LVL","symbol":"Ls","id":83},
      {"code":"LBP","symbol":"£","id":84},
      {"code":"LSL","symbol":"L","id":85},
      {"code":"LRD","symbol":"$","id":86},
      {"code":"LYD","symbol":"د.ل","id":87},
      {"code":"LTL","symbol":"Lt","id":88},
      {"code":"MOP","symbol":"$","id":89},
      {"code":"MKD","symbol":"ден","id":90},
      {"code":"MGA","symbol":"Ar","id":91},
      {"code":"MWK","symbol":"MK","id":92},
      {"code":"MYR","symbol":"RM","id":93},
      {"code":"MVR","symbol":"Rf","id":94},
      {"code":"MRO","symbol":"MRU","id":95},
      {"code":"MUR","symbol":"₨","id":96},
      {"code":"MXN","symbol":"$","id":97},
      {"code":"MDL","symbol":"L","id":98},
      {"code":"MNT","symbol":"₮","id":99},
      {"code":"MAD","symbol":"MAD","id":100},
      {"code":"MZM","symbol":"MT","id":101},
      {"code":"MMK","symbol":"K","id":102},
      {"code":"NAD","symbol":"$","id":103},
      {"code":"NPR","symbol":"₨","id":104},
      {"code":"ANG","symbol":"ƒ","id":105},
      {"code":"TWD","symbol":"$","id":106},
      {"code":"NZD","symbol":"$","id":107},
      {"code":"NIO","symbol":"C$","id":108},
      {"code":"NGN","symbol":"₦","id":109},
      {"code":"KPW","symbol":"₩","id":110},
      {"code":"NOK","symbol":"kr","id":111},
      {"code":"OMR","symbol":".ع.ر","id":112},
      {"code":"PKR","symbol":"₨","id":113},
      {"code":"PAB","symbol":"B/.","id":114},
      {"code":"PGK","symbol":"K","id":115},
      {"code":"PYG","symbol":"₲","id":116},
      {"code":"PEN","symbol":"S/.","id":117},
      {"code":"PHP","symbol":"₱","id":118},
      {"code":"PLN","symbol":"zł","id":119},
      {"code":"QAR","symbol":"ق.ر","id":120},
      {"code":"RON","symbol":"lei","id":121},
      {"code":"RUB","symbol":"₽","id":122},
      {"code":"RWF","symbol":"FRw","id":123},
      {"code":"SVC","symbol":"₡","id":124},
      {"code":"WST","symbol":"SAT","id":125},
      {"code":"SAR","symbol":"﷼","id":126},
      {"code":"RSD","symbol":"din","id":127},
      {"code":"SCR","symbol":"SRe","id":128},
      {"code":"SLL","symbol":"Le","id":129},
      {"code":"SGD","symbol":"$","id":130},
      {"code":"SKK","symbol":"Sk","id":131},
      {"code":"SBD","symbol":"Si$","id":132},
      {"code":"SOS","symbol":"Sh.so.","id":133},
      {"code":"ZAR","symbol":"R","id":134},
      {"code":"KRW","symbol":"₩","id":135},
      {"code":"XDR","symbol":"SDR","id":136},
      {"code":"LKR","symbol":"Rs","id":137},
      {"code":"SHP","symbol":"£","id":138},
      {"code":"SDG","symbol":".س.ج","id":139},
      {"code":"SRD","symbol":"$","id":140},
      {"code":"SZL","symbol":"E","id":141},
      {"code":"SEK","symbol":"kr","id":142},
      {"code":"CHF","symbol":"CHf","id":143},
      {"code":"SYP","symbol":"LS","id":144},
      {"code":"STD","symbol":"Db","id":145},
      {"code":"TJS","symbol":"SM","id":146},
      {"code":"TZS","symbol":"TSh","id":147},
      {"code":"THB","symbol":"฿","id":148},
      {"code":"TOP","symbol":"$","id":149},
      {"code":"TTD","symbol":"$","id":150},
      {"code":"TND","symbol":"ت.د","id":151},
      {"code":"TRY","symbol":"₺","id":152},
      {"code":"TMT","symbol":"T","id":153},
      {"code":"UGX","symbol":"USh","id":154},
      {"code":"UAH","symbol":"₴","id":155},
      {"code":"AED","symbol":"إ.د","id":156},
      {"code":"UYU","symbol":"$","id":157},
      {"code":"USD","symbol":"$","id":158},
      {"code":"UZS","symbol":"лв","id":159},
      {"code":"VUV","symbol":"VT","id":160},
      {"code":"VEF","symbol":"Bs","id":161},
      {"code":"VND","symbol":"₫","id":162},
      {"code":"YER","symbol":"﷼","id":163},
      {"code":"ZMK","symbol":"ZK","id":164}
  ];
    setcurrency(Response.data[0].currency)
    currency_list.map((gf,i)=>{
      if(gf.code == Response.data[0].currency){
        sessionStorage.setItem('symbol',JSON.stringify({name:Response.data[0].currency,symbol:gf.symbol}));
      }
    })
    
  })

},[])
  useEffect(()=>{

  axios.get(window.$api + '/getnavigationinfo').then((Response)=>{
setcatagorysA(Response.data)
  })
  },[])
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  return (
    <header className="bg-gray-300"><Transition.Root show={open1} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 w-screen overflow-hidden" onClose={setOpen1}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-100"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-[#171718] shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-white">Shopping cart</Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setOpen1(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6">
                          {cart.map((product,i) => (
                            <li key={product.id} className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24  rounded-md overflow-hidden">
                                <img
                                  src={product.img}
                                  className="w-full h-full object-center object-cover" />
                              </div>

                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-white">
                                    <h3>
                                     <span>{product.name}</span>
                                    </h3>
                                    <p className="ml-4">{product.price} {currency}</p>



                                  </div>
<div style={{backgroundColor: product.color.color}} className="h-4 w-4 rounded-full m-1"></div>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                  <p className="text-gray-500"></p>

                                  <div className="flex">
                                    <button type="button" onClick={()=>{
                                      var a = cart
                                      a.splice(i, 1);
                                      setcart([...a])
                                      const item_set = JSON.stringify([...a])
                                      localStorage.setItem('cart',item_set)
                                      setup2(up2 + 1)
                                      setgg(Math.floor(Math.random() * 1133))
                                    }} className="font-medium text-cyan-800 hover:text-cyan-500">
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className=" py-6 px-4 sm:px-6">
                   <div className="flex justify-between text-base font-medium text-white">
                      <p>Subtotal</p>
                      <p>{price} {currency}</p>
                    </div>
                    <div className="mt-6">
                      <span
                        onClick={()=>{
                          navigate('/checkout', { replace: false })
                          setOpen1(false)
                        }}
                        className="flex btn justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm font-medium text-white"
                      >
                        Checkout
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root><div className="bg-[#171718]">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 overflow-visible " onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className=" absolute max-w-[16rem] w-full rounded-xl bg-[#171718] max-h-[100vh] shadow-xl pb-12 flex flex-col ">
                <div className="px-4 pt-5 pb-2 ">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md  float-right text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <i className="fa-solid float-right text-white  fa-x"></i>
                  </button>
                </div>

                {/* Links */}
 

                <div className=" py-6   text-white h-screen px-10 space-y-6">

{/* <div className="collapse w-[95%] border rounded-box border-base-300 collapse-arrow">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
    I open/close with click
  </div> 
  <div className="collapse-content"> 
    <p>Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using 
      <span className="badge badge-outline">collapse-open</span> and 
      <span className="badge badge-outline">collapse-close</span> classes.
    </p>
  </div>
</div>  */}



<div>

<span className='text-lg' onClick={()=>{
       navigate('/', { replace: false })
       window.scrollBy(0,-90000000);}}>
<i class="fa-solid fa-house mr-2 -ml-3"></i> Home
</span>
</div>
<div>

<span className='text-lg' onClick={()=>{
       navigate('/', { replace: false })
       window.scrollBy(0,-90000000);}}>
Home
</span>
</div>
{/* 
                  {catagorysA.map((git) => {
                    if(git.type == 1){
                      return(
                      <div className="collapse w-[95%] border rounded-box border-base-300 collapse-arrow">
                      <input type="checkbox" /> 
                      <div className="collapse-title text-xl font-medium">
                        {git.name}
                      </div> 
                      <div className="collapse-content"> 
   
                      </div>
                    </div> 
                      )
                    }
                  })} */}
                </div>
         
{/* create account + login */}
                {/* <div className="border-t  border-gray-200 py-6 px-4 space-y-6">
                  <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-white">
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-white">
                      Create account
                    </a>
                  </div>
                </div> */}

              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <header className=" bg-[#171718]">
          {/* <p className="bg-indigo-800 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
            This is an beta version | <a className="ml-1 underline underline-offset-1" href="https://store.skyex.me/admin/login"> Admin</a>
          </p> */}

          <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" border-gray-200">
              <div className="h-16 flex items-center">
                <button
                  type="button"
                  className="bg-[#171718] p-2 rounded-md text-gray-400 "
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <i className="fa-solid text-white text-xl fa-bars-staggered"></i>
                </button>

                {/* Logo */}
                <div className=" text-xl Poppins font-medium text-white  w-full text-center lg:ml-0" onClick={()=>{navigate('/', { replace: false })}}>
RUNWAY

                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block  lg:self-stretch">
                  <div className="h-full flex space-x-8">

{/* pccc */}
                    {/* {navigation.pages.map((page) => (
                                          <div key={page.name} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                                          <Link to={page.href}>
                                        <span>{page.name}</span>
                                            </Link>
                                        </div>
                    ))} */}
                  </div>
                </Popover.Group>

                <div className="ml-auto flex text-center items-center">
                  
                  {/* login + create account */}
                  {/* <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Sign in
                    </a>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Create account
                    </a>
                  </div> */}
{/* 
                  <div className="hidden lg:ml-8 lg:flex">
                    <a href="#" className="text-gray-700 hover:text-gray-800 flex items-center">
                      <img
                        src="https://kingabdullah.jo/sites/default/files/08resflag.jpg"
                        alt=""
                        className="w-7 mt-1 h-auto block flex-shrink-0" />
                      <span className="ml-3 block text-sm font-medium">{Currency}</span>
                      <span className="sr-only">, change currency</span>
                    </a>
                  </div> */}

                  {/* Search */}
                  {/* <div className="flex lg:ml-6">
                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <SearchIcon className="w-6 h-6" aria-hidden="true" />
                    </a>
                  </div> */}

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-6">

                      <a href="#" onClick={() => {
                      setOpen1(true)
                    } } className="group -m-2 p-2 flex  items-center">
                      {/* <img src='/cart.png' className="h-[22px] w-[35px]"/> */}
                      <ShoppingBagIcon
                        className="flex-shrink-0 h-6 w-6 text-gray-200 group-hover:text-[#393737]"
                        aria-hidden="true" />
{/* {productsnum > 0 && (
                          <span class="sm:flex md:hidden absolute h-4 w-4 -mt-[0.8rem] p-[0.01rem] bg-[#171718] rounded-full ml-[1rem]">
                          <span class="relative inline-flex rounded-full mt-[0.1rem] ml-[0.1rem] h-3 w-3 bg-primary"></span>
                        </span>
)} */}
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800 sm:hidden md:inline">{productsnum}</span>
                      <span className="sr-only">items in cart, view bag</span>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div></header>
  )
}
