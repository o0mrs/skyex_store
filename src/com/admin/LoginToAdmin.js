
import { LockClosedIcon } from '@heroicons/react/solid'
import { useState ,useEffect} from 'react'
import NavBar from './../NavBar'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import Darkfoot from '../parts/foobar';
export default function Login() {
    const cookies = new Cookies();
    const current = new Date();
    const nextYear = new Date();
    // const navigate = useNavigate();
    const navigate = useNavigate();
    const userTokenc = cookies.get('userToken')
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [style, setstyle] = useState('hidden')
    const [textalert, settextalert] = useState('')
    const [tab, settab] = useState('loading')
    useEffect(()=>{
        if(userTokenc){
        axios.post(window.$api + 'verfy',{
          userToken: userTokenc,
          username: localStorage.getItem('username')
        }).then((Response)=>{
          console.log(Response.data.msg)
          if(Response.data.msg == 0){
            cookies.remove("userToken")
            navigate('/admin/login', { replace: true })
            settab('app')
          }else if(Response.data.msg == 1){
            navigate('/admin/dashboard', { replace: true })
          }else if(Response.data.msg == 22){
            navigate('/admin/dashboard/noperm', { replace: false })
          
          }
        })
      }else{
        settab('app')
      }
      },[])
    const handlesubmit = ()=>{
         const user = username
    axios.post(window.$api + 'login',{username: user, password: password}).then((Response)=>{
        console.log(Response.data.msg)
        if(Response.data.msg == 0){
            setstyle('')
            settextalert('Wrong username/password')
        }else if(Response.data.msg == 1){
            setstyle('hidden')
            settextalert('')
            nextYear.setFullYear(current.getFullYear() + 80);
            const userToken = Response.data.userToken
            cookies.set('userToken', userToken, {
                path: '/',
                expires: nextYear,
            });
            localStorage.setItem('username', user);
            navigate('/admin/dashboard', { replace: true })
        }else if(Response.data.status == 22){
            navigate('/admin/dashboard/noperm', { replace: false })
          
          }
    })
    }
if(tab == 'app'){
    return (
        <>
        <NavBar />
        <div className="roboto text-center text-3xl grid place-items-center">
          <img src='https://storeapi.skyex.me/logo' className='-mt-10 max-w-[16rem]'></img>
          <div className="text-4xl font-bold">
          Sign in to skyex
          </div>
          <div className="mt-12 grid">
              <label className="text-sm mb-3 text-left roboto">Email address</label>
              <input value={username} onChange={(e)=>{setusername(e.target.value)}} className='border-0 input focus:outline-none h-12 -mt-2 border-transparent focus:border-transparent focus:ring-0 sm:w-[87vw]  bg-gray-100 md:w-96' placeholder={'ex@skyex.me'}/>
          </div>
          <div className="mt-4 grid">
              <label className="text-sm mb-3 text-left roboto">Password</label>
              <input value={password} onChange={(e)=>{setpassword(e.target.value)}} className='border-0 input focus:outline-none h-12 -mt-2 border-transparent focus:border-transparent focus:ring-0 sm:w-[87vw]  bg-gray-100 md:w-96' placeholder={'*********'}/>
          </div>
          <div className='mt-6'>
  <button className='btn btn-active text-white sm:w-[87vw]   md:w-96' onClick={handlesubmit}>Sign In</button>
          </div>
        </div>
  <Darkfoot />
  </>
    )
}else if(tab == 'loading'){
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