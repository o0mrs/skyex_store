import react from "react";
import { BrowserRouter as router, Switch, Route , Link} from "react-router-dom";
import { useState } from "react";
import '../../css/dashboard.css'
import Account from "./account";


const DashBoard = ()=>{
return(
  
   <>
   <router>
     <Switch>
       
     </Switch>
   </router>
    
<div className='text-gray-900'>
<div class="flex min-h-screen text-left">
  <nav class="w-64 flex-shrink-0">
    <div class="flex-auto bg-gray-900 h-full">
      <div class="flex flex-col overflow-y-auto">
        <ul class="relative m-0 p-0 list-none h-full">
          <li class="text-white text-2xl p-4 w-full flex relative shadow-sm justify-start bg-gray-900 ">
            STORE
          </li>
          <li class="text-white p-4 w-full flex relative shadow-sm justify-start bg-gray-900 ">
            <div class="mr-4 flex-shrink-0 my-auto">
              <svg class="fill-current w-5 h-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
            </div>
            <div class="flex-auto my-1">
              <span>Store Overview</span>
            </div>
          </li>
          <li class="p-4 w-full flex relative shadow-sm">
            <div class="flex-auto my-1">
              <span class="text-white font-medium">Develop</span>
            </div>
          </li>

          <div class="text-blue-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
            <div class="mr-4 my-auto">
            <svg class="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></svg>
            </div>
            <div class="flex-auto my-1">
                <Link to='/admindashboardoqwsa/' />
              <span>Overview</span>
            </div>
          </div>

          <div class="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
            <div class="mr-4 my-auto">
              <svg class="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>
            </div>
            <div class="flex-auto my-1">
              <span>Realtime Database</span>
            </div>
          </div>

          <div class="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
            <div class="mr-4 my-auto">
              <svg class="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"></path></svg>            </div>
            <div class="flex-auto my-1">
              <span>Storage</span>
            </div>
          </div>

          <div class="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
            <div class="mr-4 my-auto">
              <svg class="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>            </div>
            <div class="flex-auto my-1">
              <span>Hosting</span>
            </div>
          </div>

          <div class="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
            <Link to='/account'><div class="mr-4 my-auto">
            <i class="far fa-user"></i>
            </div>
            </Link>
            <Link to='/account'>
            <div class="flex-auto my-1">
              <span>Account</span>
            </div>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  </nav>

<Account />
  {/*content*/}
</div>




</div>
    </>
)
}
export default DashBoard