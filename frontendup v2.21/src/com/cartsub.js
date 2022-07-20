import axios from 'axios'
import { React,useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import Darkfoot from './parts/foobar'
const Cartsub = ({up,settabs,gg})=>{
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
      setcurrency(JSON.parse(sessionStorage.getItem('symbol')).symbol)

                }
            }, 1500);
        }else{
            setcurrency(JSON.parse(sessionStorage.getItem('symbol')).symbol)
        }
  
  
  
      
     
    },[])
    useEffect(()=>{
  
        //get subTotla
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
          setprice(0)
        }
  
    },[up,up2,gg])
    if(tab == 'loading'){
return(
    <i className="fa-solid fa-spinner animate-spin"></i>
)
    }else{
        return(
            <span>{currency}{price}</span>
        )
    }

  }
  export default Cartsub