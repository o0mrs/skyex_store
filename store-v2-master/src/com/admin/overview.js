import {BrowserRouter as Router, Switch, Route ,Link} from 'react-router-dom'

import { React } from "react"
import { useState } from "react"

const Account = ()=>{
    return(
        <>
        <div class="flex flex-col w-full">
  <header class="text-white bg-gray-900 sticky left-auto top-0 right-0">
    <div class="h-12 px-6 flex relative items-center justify-end">
      <button class="flex mx-4 text-white hover:text-gray-200 focus:outline-none">
       <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          </path>
       </svg>
      </button>

      <button class="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
        <img class="h-full w-full object-cover" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
      </button>
    </div>
  </header>
  
  <div class="text-white bg-gray-900 flex flex-shrink-0 flex-col">
    <div class="flex relative items-center pl-8 h-12">
      <span class="text-2xl tracking-wide">Account</span>
    </div>
  </div>

  <div class="text-white bg-gray-900 flex w-full">
    <div class="flex overflow-hidden h-12 ml-2">
          <button class="mx-3 border-b-2 border-white">
       <Link to=''> <span>info</span></Link>
      </button>

      <button class="mx-3 hover:border-b-2 border-white">
       <Link to='d/account/'> <span>Securty</span></Link>
      </button>

      <button onClick class="mx-3 hover:border-b-2 border-white">
       <Link to='d/account/'> <span>Sign-in method</span></Link>
      </button>

      <button class="mx-3 hover:border-b-2 border-white">
       <Link to='d/account/'> <span>Usage</span></Link>
      </button>
    </div>
  </div>

</div>


        </>
    )
} 
export default Account

