
import { LockClosedIcon } from '@heroicons/react/solid'
import { useState ,useEffect} from 'react'
import NavBar from './../NavBar'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
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
          }else if(Response.data.msg == 1){
            navigate('/admin/dashboard', { replace: true })
          }else if(Response.data.msg == 22){
            navigate('/admin/dashboard/noperm', { replace: false })
          
          }
        })
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

  return (
      <><NavBar /><div className="min-h-screen -mt-32 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

          <div className="max-w-md w-full space-y-8">
              <div>
                  <img
                    //   className="mx-auto h-12 w-auto"
                      src="https://skyex.me/%E2%80%94Pngtree%E2%80%94cat%20default%20avatar_5416936.png"
                    // src="https://94.127.214.150:2000/%E2%80%94Pngtree%E2%80%94cat%20default%20avatar_5416936.png"

                      alt="Workflow" />
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                  <p className="mt-2 text-center text-sm text-gray-600">
                      Or{' '}
                      <div className="g-signin2" data-onsuccess="onSignIn"></div>
                  </p>
              </div>
              <div className="mt-8 space-y-6">
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="rounded-md shadow-sm -space-y-px">
                      <div>
                          <label htmlFor="email-address" className="sr-only">
                              username
                          </label>
                          <input
                              id="email-address"
                              name="username"
                              type="name"
                              autoComplete="email"
                              required
                              className='h-96'
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                              placeholder="UserName"
                              onChange={(event)=>{
                                  setusername(event.target.value)
                              }} />
                      </div>
                      <div>
                          <label htmlFor="password" className="sr-only">
                              Password
                          </label>
                          <input
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="current-password"
                              required
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                              placeholder="Password"
                              onChange={(event)=>{
                                setpassword(event.target.value)
                            }} />

                      </div>
                  </div>

                  <div className="flex items-center justify-between">
                      <div className="flex items-center">
                          <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                              Remember me
                          </label>
                      </div>

                      <div className="text-sm">
                          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                              Forgot your password?
                          </a>
                      </div>
                  </div>

                  <div className='text-black'>
                      <button
                          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={handlesubmit}
                      >
                          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                              <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                          </span>
                          Sign in
                      </button>
                      <div className={style}>
                      <div className='grid place-items-center w-auto rounded-xl border mt-12 border-red-200 bg-red-600 text-gray-300'>
                            <div className='grid place-items-left'>
                            <span>Wrong username/password</span>
                            </div>
                      </div>  
                      </div> 
                      <div className='text-left mt-2 ml-2'>This page only for Admins  <Link to='/'><span className="font-medium text-indigo-600 hover:text-indigo-500">Return to Home</span></Link> </div>
                  </div>
              </div>
          </div>
      </div></>
  )
}
