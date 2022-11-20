import {Link} from 'react-router-dom'
import axios from 'axios'
import { React,useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import NavBar from './NavBar'
import { RadioGroup } from '@headlessui/react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Cart from './cart'
import Cartsub from './cartsub'
import Darkfoot from './parts/foobar'
const countryListAllIsoData = {"code":200,"result":[{"name":"Andorra","code":"AD","states":null},{"name":"United Arab Emirates","code":"AE","states":null},{"name":"Afghanistan","code":"AF","states":null},{"name":"Antigua and Barbuda","code":"AG","states":null},{"name":"Anguilla","code":"AI","states":null},{"name":"Albania","code":"AL","states":null},{"name":"Armenia","code":"AM","states":null},{"name":"Netherlands Antilles","code":"AN","states":null},{"name":"Angola","code":"AO","states":null},{"name":"Antarctica","code":"AQ","states":null},{"name":"Argentina","code":"AR","states":null},{"name":"American Samoa","code":"AS","states":null},{"name":"Austria","code":"AT","states":null},{"name":"Australia","code":"AU","states":[{"code":"ACT","name":"Australian Capital Territory"},{"code":"NSW","name":"New South Wales"},{"code":"NT","name":"Northern Territory"},{"code":"QLD","name":"Queensland"},{"code":"SA","name":"South Australia"},{"code":"TAS","name":"Tasmania"},{"code":"VIC","name":"Victoria"},{"code":"WA","name":"Western Australia"}]},{"name":"Aruba","code":"AW","states":null},{"name":"Azerbaijan","code":"AZ","states":null},{"name":"Bosnia and Herzegovina","code":"BA","states":null},{"name":"Barbados","code":"BB","states":null},{"name":"Bangladesh","code":"BD","states":null},{"name":"Belgium","code":"BE","states":null},{"name":"Burkina Faso","code":"BF","states":null},{"name":"Bulgaria","code":"BG","states":null},{"name":"Bahrain","code":"BH","states":null},{"name":"Burundi","code":"BI","states":null},{"name":"Benin","code":"BJ","states":null},{"name":"Bermuda","code":"BM","states":null},{"name":"Brunei Darussalam","code":"BN","states":null},{"name":"Bolivia","code":"BO","states":null},{"name":"Brazil","code":"BR","states":[{"code":"AC","name":"Acre"},{"code":"AL","name":"Alagoas"},{"code":"AM","name":"Amazonas"},{"code":"AP","name":"Amapá"},{"code":"BA","name":"Bahia"},{"code":"CE","name":"Ceará"},{"code":"DF","name":"Distrito Federal"},{"code":"ES","name":"Espírito Santo"},{"code":"GO","name":"Goiás"},{"code":"MA","name":"Maranhão"},{"code":"MG","name":"Minas Gerais"},{"code":"MS","name":"Mato Grosso do Sul"},{"code":"MT","name":"Mato Grosso"},{"code":"PA","name":"Pará"},{"code":"PB","name":"Paraíba"},{"code":"PE","name":"Pernambuco"},{"code":"PI","name":"Piauí"},{"code":"PR","name":"Paraná"},{"code":"RJ","name":"Rio de Janeiro"},{"code":"RN","name":"Rio Grande do Norte"},{"code":"RO","name":"Rondônia"},{"code":"RR","name":"Roraima"},{"code":"RS","name":"Rio Grande do Sul"},{"code":"SC","name":"Santa Catarina"},{"code":"SE","name":"Sergipe"},{"code":"SP","name":"São Paulo"},{"code":"TO","name":"Tocantins"}]},{"name":"Bahamas","code":"BS","states":null},{"name":"Bhutan","code":"BT","states":null},{"name":"Bouvet Island","code":"BV","states":null},{"name":"Botswana","code":"BW","states":null},{"name":"Belize","code":"BZ","states":null},{"name":"Canada","code":"CA","states":[{"code":"AB","name":"Alberta"},{"code":"BC","name":"British Columbia"},{"code":"MB","name":"Manitoba"},{"code":"NB","name":"New Brunswick"},{"code":"NL","name":"Newfoundland and Labrador"},{"code":"NS","name":"Nova Scotia"},{"code":"NT","name":"Northwest Territories"},{"code":"NU","name":"Nunavut"},{"code":"ON","name":"Ontario"},{"code":"PE","name":"Prince Edward Island"},{"code":"QC","name":"Quebec"},{"code":"SK","name":"Saskatchewan"},{"code":"YT","name":"Yukon"}]},{"name":"Cocos (Keeling) Islands","code":"CC","states":null},{"name":"Congo, the Democratic Republic of the","code":"CD","states":null},{"name":"Central African Republic","code":"CF","states":null},{"name":"Congo","code":"CG","states":null},{"name":"Switzerland","code":"CH","states":null},{"name":"Cote D'Ivoire","code":"CI","states":null},{"name":"Cook Islands","code":"CK","states":null},{"name":"Chile","code":"CL","states":null},{"name":"Cameroon","code":"CM","states":null},{"name":"China","code":"CN","states":null},{"name":"Colombia","code":"CO","states":null},{"name":"Costa Rica","code":"CR","states":null},{"name":"Cuba, Republic of","code":"CU","states":null},{"name":"Cape Verde","code":"CV","states":null},{"name":"Curacao","code":"CW","states":null},{"name":"Christmas Island","code":"CX","states":null},{"name":"Cyprus","code":"CY","states":null},{"name":"Czech Republic","code":"CZ","states":null},{"name":"Germany","code":"DE","states":null},{"name":"Djibouti","code":"DJ","states":null},{"name":"Denmark","code":"DK","states":null},{"name":"Dominica","code":"DM","states":null},{"name":"Dominican Republic","code":"DO","states":null},{"name":"Algeria","code":"DZ","states":null},{"name":"Ecuador","code":"EC","states":null},{"name":"Estonia","code":"EE","states":null},{"name":"Egypt","code":"EG","states":null},{"name":"Western Sahara","code":"EH","states":null},{"name":"Eritrea","code":"ER","states":null},{"name":"Spain","code":"ES","states":null},{"name":"Ethiopia","code":"ET","states":null},{"name":"Finland","code":"FI","states":null},{"name":"Fiji","code":"FJ","states":null},{"name":"Falkland Islands (Malvinas)","code":"FK","states":null},{"name":"Micronesia, Federated States of","code":"FM","states":null},{"name":"Faroe Islands","code":"FO","states":null},{"name":"France","code":"FR","states":null},{"name":"Gabon","code":"GA","states":null},{"name":"United Kingdom","code":"GB","states":null},{"name":"Grenada","code":"GD","states":null},{"name":"Georgia","code":"GE","states":null},{"name":"French Guiana","code":"GF","states":null},{"name":"Guernsey","code":"GG","states":null},{"name":"Ghana","code":"GH","states":null},{"name":"Gibraltar","code":"GI","states":null},{"name":"Greenland","code":"GL","states":null},{"name":"Gambia","code":"GM","states":null},{"name":"Guinea","code":"GN","states":null},{"name":"Guadeloupe","code":"GP","states":null},{"name":"Equatorial Guinea","code":"GQ","states":null},{"name":"Greece","code":"GR","states":null},{"name":"South Georgia and the South Sandwich Islands","code":"GS","states":null},{"name":"Guatemala","code":"GT","states":null},{"name":"Guam","code":"GU","states":null},{"name":"Guinea-Bissau","code":"GW","states":null},{"name":"Guyana","code":"GY","states":null},{"name":"Hong Kong","code":"HK","states":null},{"name":"Heard Island and Mcdonald Islands","code":"HM","states":null},{"name":"Honduras","code":"HN","states":null},{"name":"Croatia","code":"HR","states":null},{"name":"Haiti","code":"HT","states":null},{"name":"Hungary","code":"HU","states":null},{"name":"Indonesia","code":"ID","states":null},{"name":"Ireland","code":"IE","states":null},{"name":"Israel","code":"IL","states":null},{"name":"Isle of Man","code":"IM","states":null},{"name":"India","code":"IN","states":null},{"name":"British Indian Ocean Territory","code":"IO","states":null},{"name":"Iraq","code":"IQ","states":null},{"name":"Iran, Islamic Republic of","code":"IR","states":null},{"name":"Iceland","code":"IS","states":null},{"name":"Italy","code":"IT","states":null},{"name":"Jersey","code":"JE","states":null},{"name":"Jamaica","code":"JM","states":null},{"name":"Jordan","code":"JO","states":null},{"name":"Japan","code":"JP","states":[{"code":"01","name":"Hokkaido"},{"code":"02","name":"Aomori"},{"code":"03","name":"Iwate"},{"code":"04","name":"Miyagi"},{"code":"05","name":"Akita"},{"code":"06","name":"Yamagata"},{"code":"07","name":"Fukushima"},{"code":"08","name":"Ibaraki"},{"code":"09","name":"Tochigi"},{"code":"10","name":"Gunma"},{"code":"11","name":"Saitama"},{"code":"12","name":"Chiba"},{"code":"13","name":"Tokyo"},{"code":"14","name":"Kanagawa"},{"code":"15","name":"Niigata"},{"code":"16","name":"Toyama"},{"code":"17","name":"Ishikawa"},{"code":"18","name":"Fukui"},{"code":"19","name":"Yamanashi"},{"code":"20","name":"Nagano"},{"code":"21","name":"Gifu"},{"code":"22","name":"Shizuoka"},{"code":"23","name":"Aichi"},{"code":"24","name":"Mie"},{"code":"25","name":"Shiga"},{"code":"26","name":"Kyoto"},{"code":"27","name":"Osaka"},{"code":"28","name":"Hyogo"},{"code":"29","name":"Nara"},{"code":"30","name":"Wakayama"},{"code":"31","name":"Tottori"},{"code":"32","name":"Shimane"},{"code":"33","name":"Okayama"},{"code":"34","name":"Hiroshima"},{"code":"35","name":"Yamaguchi"},{"code":"36","name":"Tokushima"},{"code":"37","name":"Kagawa"},{"code":"38","name":"Ehime"},{"code":"39","name":"Kochi"},{"code":"40","name":"Fukuoka"},{"code":"41","name":"Saga"},{"code":"42","name":"Nagasaki"},{"code":"43","name":"Kumamoto"},{"code":"44","name":"Oita"},{"code":"45","name":"Miyazaki"},{"code":"46","name":"Kagoshima"},{"code":"47","name":"Okinawa"}]},{"name":"Kenya","code":"KE","states":null},{"name":"Kyrgyzstan","code":"KG","states":null},{"name":"Cambodia","code":"KH","states":null},{"name":"Kiribati","code":"KI","states":null},{"name":"Comoros","code":"KM","states":null},{"name":"Saint Kitts and Nevis","code":"KN","states":null},{"name":"Korea, Democratic People's Republic of","code":"KP","states":null},{"name":"Korea, Republic of","code":"KR","states":null},{"name":"Kuwait","code":"KW","states":null},{"name":"Cayman Islands","code":"KY","states":null},{"name":"Kazakhstan","code":"KZ","states":null},{"name":"Lao People's Democratic Republic","code":"LA","states":null},{"name":"Lebanon","code":"LB","states":null},{"name":"Saint Lucia","code":"LC","states":null},{"name":"Liechtenstein","code":"LI","states":null},{"name":"Sri Lanka","code":"LK","states":null},{"name":"Liberia","code":"LR","states":null},{"name":"Lesotho","code":"LS","states":null},{"name":"Lithuania","code":"LT","states":null},{"name":"Luxembourg","code":"LU","states":null},{"name":"Latvia","code":"LV","states":null},{"name":"Libyan Arab Jamahiriya","code":"LY","states":null},{"name":"Morocco","code":"MA","states":null},{"name":"Monaco","code":"MC","states":null},{"name":"Moldova, Republic of","code":"MD","states":null},{"name":"Montenegro","code":"ME","states":null},{"name":"Saint Martin","code":"MF","states":null},{"name":"Madagascar","code":"MG","states":null},{"name":"Marshall Islands","code":"MH","states":null},{"name":"North Macedonia, Republic of","code":"MK","states":null},{"name":"Mali","code":"ML","states":null},{"name":"Myanmar","code":"MM","states":null},{"name":"Mongolia","code":"MN","states":null},{"name":"Macao","code":"MO","states":null},{"name":"Northern Mariana Islands","code":"MP","states":null},{"name":"Martinique","code":"MQ","states":null},{"name":"Mauritania","code":"MR","states":null},{"name":"Montserrat","code":"MS","states":null},{"name":"Malta","code":"MT","states":null},{"name":"Mauritius","code":"MU","states":null},{"name":"Maldives","code":"MV","states":null},{"name":"Malawi","code":"MW","states":null},{"name":"Mexico","code":"MX","states":null},{"name":"Malaysia","code":"MY","states":null},{"name":"Mozambique","code":"MZ","states":null},{"name":"Namibia","code":"NA","states":null},{"name":"New Caledonia","code":"NC","states":null},{"name":"Niger","code":"NE","states":null},{"name":"Norfolk Island","code":"NF","states":null},{"name":"Nigeria","code":"NG","states":null},{"name":"Nicaragua","code":"NI","states":null},{"name":"Netherlands","code":"NL","states":null},{"name":"Norway","code":"NO","states":null},{"name":"Nepal","code":"NP","states":null},{"name":"Nauru","code":"NR","states":null},{"name":"Niue","code":"NU","states":null},{"name":"New Zealand","code":"NZ","states":null},{"name":"Oman","code":"OM","states":null},{"name":"Panama","code":"PA","states":null},{"name":"Peru","code":"PE","states":null},{"name":"French Polynesia","code":"PF","states":null},{"name":"Papua New Guinea","code":"PG","states":null},{"name":"Philippines","code":"PH","states":null},{"name":"Pakistan","code":"PK","states":null},{"name":"Poland","code":"PL","states":null},{"name":"Saint Pierre and Miquelon","code":"PM","states":null},{"name":"Pitcairn","code":"PN","states":null},{"name":"Puerto Rico","code":"PR","states":null},{"name":"Palestinian Territory, Occupied","code":"PS","states":null},{"name":"Portugal","code":"PT","states":null},{"name":"Palau","code":"PW","states":null},{"name":"Paraguay","code":"PY","states":null},{"name":"Qatar","code":"QA","states":null},{"name":"Reunion","code":"RE","states":null},{"name":"Romania","code":"RO","states":null},{"name":"Serbia","code":"RS","states":null},{"name":"Rwanda","code":"RW","states":null},{"name":"Saudi Arabia","code":"SA","states":null},{"name":"Solomon Islands","code":"SB","states":null},{"name":"Seychelles","code":"SC","states":null},{"name":"Sudan","code":"SD","states":null},{"name":"Sweden","code":"SE","states":null},{"name":"Singapore","code":"SG","states":null},{"name":"Saint Helena","code":"SH","states":null},{"name":"Slovenia","code":"SI","states":null},{"name":"Svalbard and Jan Mayen","code":"SJ","states":null},{"name":"Slovakia","code":"SK","states":null},{"name":"Sierra Leone","code":"SL","states":null},{"name":"San Marino","code":"SM","states":null},{"name":"Senegal","code":"SN","states":null},{"name":"Somalia","code":"SO","states":null},{"name":"Suriname","code":"SR","states":null},{"name":"Sao Tome and Principe","code":"ST","states":null},{"name":"El Salvador","code":"SV","states":null},{"name":"Sint Maarten","code":"SX","states":null},{"name":"Syrian Arab Republic","code":"SY","states":null},{"name":"Eswatini","code":"SZ","states":null},{"name":"Turks and Caicos Islands","code":"TC","states":null},{"name":"Chad","code":"TD","states":null},{"name":"French Southern Territories","code":"TF","states":null},{"name":"Togo","code":"TG","states":null},{"name":"Thailand","code":"TH","states":null},{"name":"Tajikistan","code":"TJ","states":null},{"name":"Tokelau","code":"TK","states":null},{"name":"Timor-Leste","code":"TL","states":null},{"name":"Turkmenistan","code":"TM","states":null},{"name":"Tunisia","code":"TN","states":null},{"name":"Tonga","code":"TO","states":null},{"name":"Turkey","code":"TR","states":null},{"name":"Trinidad and Tobago","code":"TT","states":null},{"name":"Tuvalu","code":"TV","states":null},{"name":"Taiwan","code":"TW","states":null},{"name":"Tanzania","code":"TZ","states":null},{"name":"Ukraine","code":"UA","states":null},{"name":"Uganda","code":"UG","states":null},{"name":"United States Minor Outlying Islands","code":"UM","states":null},{"name":"United States","code":"US","states":[{"code":"AA","name":"Armed Forces Americas (except Canada)"},{"code":"AE","name":"Armed Forces"},{"code":"AK","name":"Alaska"},{"code":"AL","name":"Alabama"},{"code":"AP","name":"Armed Forces Pacific"},{"code":"AR","name":"Arkansas"},{"code":"AS","name":"American Samoa"},{"code":"AZ","name":"Arizona"},{"code":"CA","name":"California"},{"code":"CO","name":"Colorado"},{"code":"CT","name":"Connecticut"},{"code":"DC","name":"District of Columbia"},{"code":"DE","name":"Delaware"},{"code":"FL","name":"Florida"},{"code":"FM","name":"Federated States of Micronesia"},{"code":"GA","name":"Georgia"},{"code":"GU","name":"Guam"},{"code":"HI","name":"Hawaii"},{"code":"IA","name":"Iowa"},{"code":"ID","name":"Idaho"},{"code":"IL","name":"Illinois"},{"code":"IN","name":"Indiana"},{"code":"KS","name":"Kansas"},{"code":"KY","name":"Kentucky"},{"code":"LA","name":"Louisiana"},{"code":"MA","name":"Massachusetts"},{"code":"MD","name":"Maryland"},{"code":"ME","name":"Maine"},{"code":"MH","name":"Marshall Islands"},{"code":"MI","name":"Michigan"},{"code":"MN","name":"Minnesota"},{"code":"MO","name":"Missouri"},{"code":"MP","name":"Northern Mariana Islands"},{"code":"MS","name":"Mississippi"},{"code":"MT","name":"Montana"},{"code":"NC","name":"North Carolina"},{"code":"ND","name":"North Dakota"},{"code":"NE","name":"Nebraska"},{"code":"NH","name":"New Hampshire"},{"code":"NJ","name":"New Jersey"},{"code":"NM","name":"New Mexico"},{"code":"NV","name":"Nevada"},{"code":"NY","name":"New York"},{"code":"OH","name":"Ohio"},{"code":"OK","name":"Oklahoma"},{"code":"OR","name":"Oregon"},{"code":"PA","name":"Pennsylvania"},{"code":"PR","name":"Puerto Rico"},{"code":"PW","name":"Palau"},{"code":"RI","name":"Rhode Island"},{"code":"SC","name":"South Carolina"},{"code":"SD","name":"South Dakota"},{"code":"TN","name":"Tennessee"},{"code":"TX","name":"Texas"},{"code":"UT","name":"Utah"},{"code":"VA","name":"Virginia"},{"code":"VI","name":"Virgin Islands"},{"code":"VT","name":"Vermont"},{"code":"WA","name":"Washington"},{"code":"WI","name":"Wisconsin"},{"code":"WV","name":"West Virginia"},{"code":"WY","name":"Wyoming"}]},{"name":"Uruguay","code":"UY","states":null},{"name":"Uzbekistan","code":"UZ","states":null},{"name":"Vatican City","code":"VA","states":null},{"name":"Saint Vincent and the Grenadines","code":"VC","states":null},{"name":"Venezuela","code":"VE","states":null},{"name":"Virgin Islands, British","code":"VG","states":null},{"name":"Virgin Islands, U.S.","code":"VI","states":null},{"name":"Vietnam","code":"VN","states":null},{"name":"Vanuatu","code":"VU","states":null},{"name":"Wallis and Futuna","code":"WF","states":null},{"name":"Samoa","code":"WS","states":null},{"name":"Kosovo","code":"XK","states":null},{"name":"Yemen","code":"YE","states":null},{"name":"Mayotte","code":"YT","states":null},{"name":"South Africa","code":"ZA","states":null},{"name":"Zambia","code":"ZM","states":null},{"name":"Zimbabwe","code":"ZW","states":null}],"extra":[]}
// console.log(countryListAllIsoData)
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
 

const Checkout = ()=>{
    const cookies = new Cookies();
    const userToken = cookies.get('userToken')
    const navigate = useNavigate();
     const [show, setShow] = useState(false);
     const [cart, setcart] = useState([])
     const [s, sets] = useState([])
    const [gg2,setgg2] = useState()
    const [selecctedshippingmetod,setselecctedshippingmetod] = useState([])
// 
//payments
const [success, setSuccess] = useState('');
const [ErrorMessage, setErrorMessage] = useState("");
const [orderID, setOrderID] = useState(false);
const [paymentmethodslist, setpaymentmethodslist] = useState([])
const [selected, setSelected] = useState({id:0})
const [currency, setcurrency] = useState('USD')
const [client_id, setclient_id] = useState('')
const [tab, settab] = useState('loading')
const [total, settotal] = useState({})

const [paid, setpaid] = useState('')
const [shipping, setshipping] = useState([])
const [shippingw, setshippingw] = useState(0)
const [selectedcountry, setselectedcountry] = useState([])
const [up2, setup2] = useState(0)
const [needshipping,setneedshipping] = useState(1)


// line 2


// inputs for shipping
const [name, setname] = useState('')
const [email, setemail] = useState('')
const [address, setaddress] = useState('')
const [line2, setline2] = useState('')
const [zipcode, setzipcode] = useState('')
const [city, setcity] = useState('')
const [state, setstate] = useState('')
const [country, setcountry] = useState('')
const [phone,setphone] = useState('')
const [phoneh,setphoneh] = useState(1)
// checkout
const [totalprice, settotalprice] = useState(0)
const [shippingprice, setshippingprice] = useState(0)
const [subtotla, setsubtotla] = useState(0)
const [error, seterror] = useState([])
const [newalart,setnewalart] = useState([])
const [shippingmethods,setshippingmethods] = useState([])
useEffect(()=>{
  settotalprice(subtotla + shippingprice)
},[subtotla,shippingprice])
useEffect(()=>{
  if(tab == 'Purchase'){
    settab('loading2')
  }
  const gcart2 = JSON.parse(localStorage.getItem('cart'))

  if(gcart2){
    if(gcart2.length == 0 ){
      navigate('/cart', { replace: false })
    }
  }else{
    navigate('/cart', { replace: false })
  }
},[up2])

useEffect(()=>{
  if(tab == 'loading2'){
    //get subTotla
    const gcart2 = JSON.parse(localStorage.getItem('cart'))
    if(gcart2){
      console.log(gcart2)
      axios.post(window.$api + '/gettotal',{cart:gcart2,sh:selecctedshippingmetod,country:country.name,state:state}).then((Response)=>{
        settotal(Response.data)
        settab('Purchase')
        console.log(Response.data)
        let gf2 = JSON.parse(Response.data.ship)
        console.log(gf2)
        var sum = null;
        gf2.map((gf,i)=>{
          sum += parseFloat(gf.price)
                console.log(sum)
          if(i == gf2.length -1 ){
            console.log(sum)
           setshippingw(sum)
          }
        })
        
  
      })
    }

  }
},[tab,up2])

useEffect(()=>{
console.log(selectedcountry)
if(selectedcountry.length > 0){
  if(selectedcountry[0].array){
    sets(JSON.parse(selectedcountry[0].array))

    }else{
      sets([])
    }
}

},[selectedcountry])
    //get cart info
        useEffect(()=>{
          const gcart = JSON.parse(localStorage.getItem('cart'))
      if(tab == 'app'){
        axios.post(window.$api + '/shippingCountrys',{cart:gcart}).then((Response)=>{
          console.log(gcart)
          console.log(Response.data)
          if(Response.data.status == 1){
            // next step
            setneedshipping(0)
            settab('app')
          }else{
            settab('app')
            console.log(Response.data)

            // var r = profiles.filter(obj=>obj.id > 0);
            var newl = []


                    countryListAllIsoData.map((g,i)=>{
                      const newf = Response.data
                      var stagenum1 = ''
                      if(stagenum1.length == 0){

                        var stagenum2 = newf.filter(gf=> gf.name.toUpperCase() === g.name.toUpperCase())
                        if(stagenum2.length  === 1){
                          newf.map((gf,ii)=>{
                            if(gf.name.toUpperCase() == g.name.toUpperCase()){
                              newl.push(newf[ii])
                              console.log(newf[ii])
                              if(newl.length > 246){
                                setshipping(newl)
                              }
                            }
                          })
                        }else if(stagenum2.length > 1){
                          console.log(stagenum2)
                          // stage 3
                          const statestopush = []
                          let maincount = null
                          stagenum2.map((gff,iii)=>{
                           
                    
                             const f = JSON.parse(gff.array)
                             console.log(f)
                             let count = null
                             f.map((bf,id)=>{
                              var stage3 = statestopush.filter(gfff=> gfff.name.toUpperCase() === bf.name.toUpperCase())
                              if(stage3.length > 0){
                                count += 1
                                if(count === f.length){
                                  maincount += 1
                                  console.log(maincount)

                                  if(maincount === stagenum2.length){
                                    newl.push({name:gff.name,array:JSON.stringify(statestopush),price:0})
                                  }

                                }
                              }else{
                                statestopush.push(bf)
                                console.log(statestopush)
                                count += 1
                                if(count === f.length){
                                  maincount += 1
                                  console.log(maincount)
                                  if(maincount === stagenum2.length){
                                    newl.push({name:gff.name,array:JSON.stringify(statestopush),price:0})
                                  }
                                }
                              }
                             })
                            
                          
                          })
                        }else{
                      newl.push(countryListAllIsoData[i])
                      if(newl.length > 246){
                        setshipping(newl)
                      }
                      // console.log(countryListAllIsoData)
                        }
                      }else{
                        // next
                      }
           
                    })

          }
    

        })
      }
    },[gg2])
    useEffect(()=>{
axios.get(window.$api + '/phone').then((Response)=>{
  setphoneh(Response.data[0].logo)
})
    },[])
    useEffect(()=>{
      const gcart = JSON.parse(localStorage.getItem('cart'))
      if(gcart){
        setcart(gcart)
        axios.get(window.$api + '/currency').then((Response)=>{
          // setcurrency(Response.data.currency)
          axios.get(window.$api + '/payments').then((Response)=>{
            setpaymentmethodslist(Response.data)
            for(var i=0; i < Response.data.length; i++){
              if(Response.data[i].id == 1){
                setclient_id(Response.data[i].Client_id)
              }
            }         
            axios.post(window.$api + '/shippingCountrys',{cart:gcart}).then((Response)=>{
              console.log(gcart)
              console.log(Response.data)
              if(Response.data.status == 1){
                // next step
                setneedshipping(0)
                settab('app')
              }else{
                settab('app')
                console.log(Response.data)

                // var r = profiles.filter(obj=>obj.id > 0);
                var newl = []


                        countryListAllIsoData.map((g,i)=>{
                          const newf = Response.data
                          var stagenum1 = ''
                          if(stagenum1.length == 0){

                            var stagenum2 = newf.filter(gf=> gf.name.toUpperCase() === g.name.toUpperCase())
                            if(stagenum2.length  === 1){
                              newf.map((gf,ii)=>{
                                if(gf.name.toUpperCase() == g.name.toUpperCase()){
                                  newl.push(newf[ii])
                                  console.log(newf[ii])
                                  if(newl.length > 246){
                                    setshipping(newl)
                                  }
                                }
                              })
                            }else if(stagenum2.length > 1){
                              console.log(stagenum2)
                              // stage 3
                              const statestopush = []
                              let maincount = null
                              stagenum2.map((gff,iii)=>{
                               
                        
                                 const f = JSON.parse(gff.array)
                                 console.log(f)
                                 let count = null
                                 f.map((bf,id)=>{
                                  var stage3 = statestopush.filter(gfff=> gfff.name.toUpperCase() === bf.name.toUpperCase())
                                  if(stage3.length > 0){
                                    count += 1
                                    if(count === f.length){
                                      maincount += 1
                                      console.log(maincount)

                                      if(maincount === stagenum2.length){
                                        newl.push({name:gff.name,array:JSON.stringify(statestopush),price:0})
                                      }

                                    }
                                  }else{
                                    statestopush.push(bf)
                                    console.log(statestopush)
                                    count += 1
                                    if(count === f.length){
                                      maincount += 1
                                      console.log(maincount)
                                      if(maincount === stagenum2.length){
                                        newl.push({name:gff.name,array:JSON.stringify(statestopush),price:0})
                                      }
                                    }
                                  }
                                 })
                                
                              
                              })
                            }else{
                          newl.push(countryListAllIsoData[i])
                          if(newl.length > 246){
                            setshipping(newl)
                          }
                          // console.log(countryListAllIsoData)
                            }
                          }else{
                            // next
                          }
               
                        })

              }
        
  
            })
  
          })
        })
      }

     
    },[])

    const checkinfo = ()=>{
      const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
      let result = phone.match(re);
      if(needshipping == 0){
        if(name.length < 2){
          setnewalart([...newalart,{id:Math.floor(Math.random() * 900) ,name:"That name doesn't sound like a real one"}])
        }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false || email.length < 3){
          setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:"Hmm… that email doesn't look valid"}])
        }else{
          settab('loading3')
        }
      }else{
        if(name.length < 2){
          setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:"That name doesn't sound like a real one"}])
        }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false || email.length < 3){
          setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:"Hmm… that email doesn't look valid"}])
        }else if(country.length < 2){
          setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:"Please select a country"}])
        }else if (address.length < 6){
          setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:"Make sure your address is at least 6 characters"}])
        }else if (city.length < 3){
          setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:"I don't think that's a real city"}])
        }else if (phoneh == 1 && phone.length < 7 && result){
          setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:"The phone number doesn’t fit the rule."}])
          
        }else if (zipcode.length < 3){
          setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:"Hmm...Your ZIP code doesn't look vaild"}])
        }else if(state.length == 0){
          setnewalart([...newalart,{id:Math.floor(Math.random() * 900),name:"Please select a state"}])
        }else{
          settab('loading3')
        }
      }

    }
    useEffect(()=>{
      const gcart = JSON.parse(localStorage.getItem('cart'))
      if(tab == 'loading3'){
        axios.post(window.$api + '/shippingmethods',{cart:gcart,country:country.name,state:state}).then((Response)=>{
          console.log(Response.data)
          if(Response.data.status == 501){

          }else{
            setshippingmethods(Response.data)
          }
       settab('ship') 
        })
      }
    },[tab])
    if(tab == 'app'){
  
    const initialOptions = {
        "client-id": client_id,
        currency: currency,

    };

    const createOrder = (data, actions) => {
        return actions.order
          .create({
              
            purchase_units: [
              {
                description: "omar",
                amount: {
                  currency_code: currency,
                  value: 0.1,
                },
              },
            ],
          })

          .then((orderID) => {

            return orderID;
          });
      };
      const onApprove = (data, actions) => {

        return actions.order.capture().then(function (details) {
          const { payer } = details.purchase_units[0].amount;
          console.log(details.purchase_units[0].amount)
          setpaid(details.purchase_units[0].amount.value + ' ' + details.purchase_units[0].amount.currency_code)
          setSuccess("has been paid successfully");

        });
      };
      const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
      };
    return(
        <div className="bg-[#171718] text-white">
<NavBar dsa='hidden' settabs={settab} setgg={setgg2}/>
<div className='grid absolute max-w-xs -mt-6  float-right proalart text-left'>
{newalart.map((gf,i)=>{
  setTimeout(() => {
    // setnewalart()
    setnewalart((products) => products.filter((d, index) => d.id !== gf.id));
  }, 2000);
  return(
    <div className="alert  alert-warning shadow-lg max-w-xs mt-2 float-right proalt rounded-r-none text-left">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    <span className='min-w-[15rem] '>{gf.name}</span>
      
    </div>
  </div>
  )
})}
</div>

        <div className="text-sm mt-2 grid roboto place-items-center text-white breadcrumbs">
  <ul>
  <li onClick={()=>{settab('sum')}} className="font-[450] cursor-pointer ">Summary</li> 
    <li className="text-accent font-[450]">Account</li> 
    <li className='font-[450]'>Shipping</li> 
    <li className='font-[450]'>Payment</li>
  </ul>
</div>
<div className='grid place-items-center  max-w-[100vw]'>
  <div className='shodow-md w-screen max-w-md h-auto  px-6 '>
<div className=''>
  Account
</div>
<div className='grid'>
<label className="label  text-white">
    <span className="label-text text-white">Name:</span>
  </label>
  <input value={name} onChange={(e)=>{setname(e.target.value)}} type='text' className='w-full border-0 input  h-12   border-transparent focus:border-transparent focus:ring-0  bg-base-300' placeholder='Aida Bugg'/>
  <label className="label mt-2 text-white">
    <span className="label-text text-white">Email:</span>
  </label>
  <input value={email} onChange={(e)=>{setemail(e.target.value)}} type='email' className='w-full border-0 input  h-12 border-transparent focus:border-transparent focus:ring-0  bg-base-300' placeholder='Email'/>
</div>
  </div>
</div>
<div className='grid place-items-center max-w-[100vw]'>
  <div className='shodow-md w-screen max-w-md h-auto  px-6 '>
  {/* {needshipping == 1 && ( */}
    <div className='roboto text-xl mt-3'>
  Shipping address
</div>
  {/* // )} */}


  <div className='grid'>
{/* country select */}
      <select onChange={(g)=>{
      console.log(g.target.value)
      const v = JSON.parse(g.target.value)
      if(v.array){

        setselectedcountry([v])
      }else{
        setselectedcountry([v])
      }
      setcountry(v)

  // 

      }} className="select select-bordered w-full roboto font-[400] border-0 mt-2 h-12 border-transparent focus:border-transparent focus:ring-0  bg-base-300 ">
  <option disabled="disabled" selected="selected">Country/region</option> 
{countryListAllIsoData.result.map((g,i)=>{
  const t = JSON.stringify({id:g.id,type:g.type,name:g.name,array:g.array,ar:i})
  return (
  <>
  <option value={t}>{g.name}</option>
  </>)
})}
</select>

{/* state select */}
{s.length > 0 && (
<select onChange={(g)=>{

setstate(g.target.value)
    }} className="select select-bordered w-full roboto font-[400] border-0 mt-2 h-12 border-transparent focus:border-transparent focus:ring-0  bg-base-300  ">
<option disabled="disabled" selected="selected">State</option> 
{s.map((g,i)=>{
  console.log(s)
  
return(
  <option value={g.name} >{g.name}</option>
)
})}
</select>  
)}
{s.length == 0 && (

<input type="text" value={state} onChange={(e)=>{setstate(e.target.value)}} placeholder="State" className="w-full border-0 input  h-12   border-transparent focus:border-transparent focus:ring-0 mt-2 bg-base-300"/>
  )}
  
{/* address */}
<input type='text' value={address} onChange={(e)=>{setaddress(e.target.value)}} className='w-full border-0 input  h-12   border-transparent focus:border-transparent focus:ring-0 mt-2 bg-base-300' placeholder='Address'/>
<input type='text' value={line2} onChange={(e)=>{setline2(e.target.value)}} className='w-full border-0 input  h-12   border-transparent focus:border-transparent focus:ring-0 mt-2 bg-base-300' placeholder='Apartment, suite, etc. (optional)'/>
<input type='text' value={city} onChange={(e)=>{setcity(e.target.value)}} className='w-full border-0 input  h-12   border-transparent focus:border-transparent focus:ring-0 mt-2 bg-base-300' placeholder='City'/>
<input type='text' value={zipcode} onChange={(e)=>{setzipcode(e.target.value)}} className='w-full border-0 input  h-12   border-transparent focus:border-transparent focus:ring-0 mt-2 bg-base-300' placeholder='ZIP code'/>
{phoneh == 1 && (
  <input type='phone' value={phone} onChange={(e)=>{setphone(e.target.value)}} className='w-full border-0 input  h-12   border-transparent focus:border-transparent focus:ring-0 mt-2 bg-base-300' placeholder='Phone number'/>
)}

</div>


  </div>
  <div className="btn btn-active text-white mt-8 w-32" onClick={checkinfo} role="button" aria-pressed="true">Next</div> 
</div>
<Darkfoot />
        </div>
    )}else if (tab == 'sum'){
      return(
        <Cart settabs={settab} gg={gg2}/>
      )
    }else if (tab == 'loading'){
      return (
        <>
        <NavBar nup={setup2} cart={'hidden'}/>
      <div className="ml-[50%] mt-[30vh]">
        <div className="snippet" data-title=".dot-pulse">
          <div className="stage">
            <div className="dot-pulse"></div>
          </div>
        </div>
      </div>
        </>
      )
    }else if (tab == 'Purchase'){
      const cart = cookies.get('cart')
      const initialOptions = {
          "client-id": client_id,
          currency: currency,
  
      };
  
      const createOrder = (data, actions) => {
          return actions.order
            .create({
                
              purchase_units: [
                {
                  description: "omar",
                  amount: {
                    currency_code: currency,
                    value: totalprice,
                  },
                },
              ],
            })
  
            .then((orderID) => {
  
              return orderID;
            });
        };
        const onApprove = (data, actions) => {
  
          return actions.order.capture().then(function (details) {
            const { payer } = details.purchase_units[0].amount;
            console.log(details.purchase_units[0].amount)
            setpaid(details.purchase_units[0].amount.value + ' ' + details.purchase_units[0].amount.currency_code)
            setSuccess("has been paid successfully");
  
          });
        };
        const onError = (data, actions) => {
          setErrorMessage("An Error occured with your payment ");
        };
      return(
          <>
        <NavBar nup={setup2} cart={'hidden'}/>

        <center>
        <div className='h-[3.4rem] bg-base-200 shadow-xs w-screen'>
          <div className='h-[3.4rem] bg-base-200 shadow-xs w-screen max-w-2xl '>
          <div className='text-white pt-[0.9rem] ml-3'>
  <span onClick={()=>{settab('sum')}} className='float-left cursor-pointer roboto'><i className="fa-solid fa-cart-shopping mr-1 text-left"></i>  Show order summary</span>

<div className='text-right -mt-[1.5wdxewrem] mr-3'>
<Cartsub gg={gg2}/>
</div>
</div>

          </div>

        </div>

        </center>
        <div className="text-sm mt-2 grid roboto place-items-center breadcrumbs">
  <ul>
  <li onClick={()=>{settab('sum')}} className="font-[450] cursor-pointer ">Summary</li> 
    <li onClick={()=>{settab('app')}} className="font-[450] cursor-pointer ">Account</li> 
    <li onClick={()=>{settab('ship')}} className="font-[450] cursor-pointer ">Shipping</li> 
    <li className='text-cyan-800'>Payment</li>
  </ul>
</div>

          <div>
          <div className="leading-loose grid place-items-center">
          <div className="p-14 mt-8 card w-auto  bg-base-300">
  <div className="form-control grid place-items-center">
<span className='text-white'>SubTotal: {total.products} {currency}</span>
  </div>
  <div className="form-control grid place-items-center">
<span className='text-white'>Shipping: {shippingw}$</span>
  </div>
  <div className="form-control grid place-items-center">
<span className='text-white'>Total: {parseFloat(total.products) + shippingw}$</span>
  </div>
  <div className="form-control grid place-items-center">
  {paymentmethodslist.map((plan) => {
    if(selected.id == plan.id) {
      return (
        <div onClick={()=>{
          setSelected(plan)
        }} className='flex w-52 max-w-xl h-12 mt-4 rounded-lg ring ring-violet-200 shadow-md text-black min-w-sm bg-white'>
        <i className={'text-xl ml-2 mt-2.5 ' + plan.logo}></i>
        <span className='ml-2 mt-1.5'>
        {plan.name}
        </span>
   
     </div>
   
      )
    }else{
      return (
        <div onClick={()=>{
          setSelected(plan)
        }} className='flex w-52 max-w-xl h-12 mt-4 rounded-lg  shadow-md text-black min-w-sm bg-white'>
        <i className={'text-xl ml-2 mt-2.5 ' + plan.logo}></i>
        <span className='ml-2 mt-1.5'>
        {plan.name}
        </span>
   
     </div>
   
      )
    }
 
  })}

  </div>
  <div className="mt-5">
      <PayPalScriptProvider options={{ "client-id": client_id }}>
        {selected.id == 1 && (
        <>
            <PayPalButtons
             style={{ layout: "vertical" }}
             createOrder={createOrder}
             onApprove={onApprove}
           />
        </>
          )}
  
             
         </PayPalScriptProvider>
         <div className="text-black">
         {}
         {ErrorMessage}
         </div>
  {success.length > 0 && (
    <div className="alert text-white">
    <div className="flex-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#009688" className="flex-shrink-0 w-6 h-6 mx-2">     
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>                     
      </svg> 
      <label className='-mt-1'>
        <h4>{success}!</h4> 
        <p className="text-sm text-base-content text-opacity-60">
      You h've paid {paid}
            </p>
      </label>
    </div> 
    <div className="flex-none">
      <button className="btn btn-sm btn-ghost btn-square">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current">      
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>                    
        </svg>
      </button>
    </div>
  </div>
  
  )}
  
  
         {orderID}
         {selected.id == 2 && (
           <center>
        <div className= "btn btn-outline" >Place Order</div>

           </center>
         )}
               {paymentmethodslist.length == 0 && (
        <>
            
  <div className="alert text-white">
    <div className="flex-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 mx-2 mt-1">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
      </svg> 
      <label>This Store doesn't have any payment methods!</label>
    </div>
  </div>
  
        </>
          )}
  
      </div>
</div>

  </div>
  
          </div>
          </>
      )}else if (tab == 'loading'){
        return (
          <>
        <NavBar nup={setup2} cart={'hidden'}/>
        <div className="ml-[50%] mt-[30vh]">
          <div className="snippet" data-title=".dot-pulse">
            <div className="stage">
              <div className="dot-pulse"></div>
            </div>
          </div>
        </div>
          </>
        )
    }else if (tab == 'loading2'){
      return (
        <>
        <NavBar nup={setup2} cart={'hidden'} />
      <div className="ml-[50%] mt-[30vh]">
        <div className="snippet" data-title=".dot-pulse">
          <div className="stage">
            <div className="dot-pulse"></div>
          </div>
        </div>
      </div>
        </>
      )
  }else if (tab == 'ship'){
    return(
      <>
              <NavBar nup={setup2} cart={'hidden'}/>

<center>
<div className='h-[3.4rem] bg-base-200 shadow-xs w-screen'>
  <div className='h-[3.4rem] bg-base-200 shadow-xs w-screen max-w-2xl '>
  <div className='text-white pt-[0.9rem] ml-3'>
<span onClick={()=>{settab('sum')}} className='float-left cursor-pointer roboto'><i className="fa-solid fa-cart-shopping mr-1 text-left"></i>  Show order summary</span>

<div className='text-right -mt-[1.5wdxewrem] mr-3'>
<Cartsub gg={gg2}/>
</div>
</div>

  </div>

</div>

</center>
<div className="text-sm mt-2 grid roboto place-items-center breadcrumbs">
<ul>
<li onClick={()=>{settab('sum')}} className="font-[450] cursor-pointer ">Summary</li> 
<li onClick={()=>{settab('app')}} className="font-[450] cursor-pointer ">Account</li> 
<li  className="text-cyan-800 font-[450] ">Shipping</li> 
<li className=' font-[450] cursor-pointer'>Payment</li>
</ul>
</div>
<div className='grid place-items-center'>
<div className='rounded-lg pt-4 mt-6 bg-base-200 shadow-sm  grid  sm:min-w-[90vw] lg:min-w-[39rem] '>
<div className='text-white roboto p-3'>
  <div>
    Contact <span className='float-right pr-2 text-cyan-500 cursor-pointer' onClick={()=>{settab('app')}}>Edit</span>
  </div>
<div>{email}</div>
<div className='mt-4'>
  Ship to <span className='float-right pr-2 text-cyan-500 cursor-pointer' onClick={()=>{settab('app')}}>Edit</span>
</div>
<div>
{needshipping == 0 && ("No need for shipping")}{address}
</div>
</div>

</div>
</div>
<div className='grid place-items-center'>
  {shippingmethods.map((gf,i)=>{
    const gff = JSON.parse(gf.shippingmethods)
    console.log(gff)
return(
  <>
  <div className='sm:min-w-[95vw] lg:min-w-[40rem] '>
<div className='roboto text-xl mt-2 p-3 font-[400]'>
Shipping methods ({gf.id})
</div>
<div className='grid -pt-1 px-3'>
  {gff.map((gfff)=>{

if(gfff.en == 1){
  if(selecctedshippingmetod.filter(obj=>obj.id == gf.id && obj.idn == gfff.id).length > 0){
    return(
      <div onClick={()=>{
        var rr = selecctedshippingmetod.filter(obj=>obj.id !== gf.id);
        console.log(rr)
        setselecctedshippingmetod([...rr,{id:gf.id,idn:gfff.id}])
        }} className='w-full ring ring-cyan-800 mt-2 emo text-left rounded-lg shadow-lg py-3   btn text-white bg-base-300'>
      
      <div className='roboto w-full'>
            <i className={"mr-2 " + gfff.icon}></i>
              <span>{gfff.name}</span>
              <span className='float-right'>{gfff.esttime}</span>
              </div>
      </div>
          )
  }else{
    return(
      <div onClick={()=>{
        var rr = selecctedshippingmetod.filter(obj=>obj.id !== gf.id);
        console.log(rr)
        setselecctedshippingmetod([...rr,{id:gf.id,idn:gfff.id}])
        }} className='w-full mt-2 emo text-left rounded-lg shadow-lg py-3   btn text-white bg-base-300'>
      
      <div className='roboto w-full'>
            <i className={"mr-2 " + gfff.icon}></i>
              <span>{gfff.name}</span>
              <span className='float-right'>{gfff.esttime}</span>
              </div>
      </div>
          )
  }

}else{
  return(
    <div className='w-full mt-2 emo text-left rounded-lg shadow-lg py-3  px-4 text-white bg-base-300'>
    
    <div className='roboto rounded-full font-bold uppercase w-full'>
          <i className={"mr-2 " + gfff.icon}></i>
            <span>{gfff.name}</span>
            <span className='float-right'><i className="fa-solid fa-x text-red-500"></i></span>
            </div>
    </div>
        )
}
  })}

</div>
</div>
</>
)
  })}

</div>
<div className="grid mt-5 place-items-center" onClick={()=>{settab('loading2')}}>
  <button className="btn btn-active text-white mt-3 sm:min-w-[85vw] lg:min-w-[10rem]" >NEXT</button>
</div>

</>
    )
  }else if (tab == 'loading3'){
    return (
      <>
      <NavBar nup={setup2} cart={'hidden'} />
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
export default Checkout