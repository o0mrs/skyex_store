import react from "react";
import NavBar from "./NavBar";
import Home from "./home";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import DashBoard from "./admin/new/dashboard";
import Front from './Front'
import LoginToAdmin from './admin/LoginToAdmin.js'
import Shopw from "./shopw";
import '../index.css'
import Productsin from "./productin";
import Checkout from "./checkout";
import Edit_product from "./admin/editproducts";
import Cart from "./cart";
import Loading from "./parts/loading";
import CatagoryView from "./catacgoryview";
import NotFound from "./admin/404";
import {Helmet} from "react-helmet";
import Ai from "./ai";
function App() {
  return (
    <>


    <Routes>
      <Route>
        {/*  */}
      {/* <Route path="/" exact element={
        <>
        <Front />
        </>
      
      }>     </Route> */}
            <Route path='/' exact element={
              <>
              <Shopw />
              </>
            }/>
      <Route path='/shop' exact element={
              <>
              <Shopw />
              </>
            }/>
                  <Route path='/shop/category/:name' exact element={
              <>
              <CatagoryView />
              </>
            }/>
            
      <Route path='/checkout' exact element={<Checkout />}/>
      <Route path='/lo' exact element={<Loading />}/>
      <Route path='/cart' exact element={<Cart />}/>
      <Route path='/ai' exact element={<Ai />}/>
      <Route path='/product/:id' exact element={<Productsin />}/>
      <Route path='/catagory/:catagory' exact element={<Shopw />}/>
      <Route path="/404" element={<NotFound />}></Route>
      <Route path="*" element={<Navigate replace to="/404" />} />
      </Route>

      
 
<Route path='/admin'>
      <Route path='login' element={<LoginToAdmin />}/>
      <Route path='editproduct/:id' element={
      <>
                        <Helmet>
                  <link rel="stylesheet" href="/dashboard.css" data-react-helmet="true"></link>
            </Helmet>
      <Edit_product />
      </>
      }/>
      <Route path='dashboard/:tab' exact element={
      <>
                  <Helmet>
                  <link rel="stylesheet" href="/dashboard.css" data-react-helmet="true"></link>
            </Helmet>
      <DashBoard />
      </>
      }/>
      <Route path='dashboard' exact element={
      <>
                        <Helmet>
                  <link rel="stylesheet" href="/dashboard.css" data-react-helmet="true"></link>
            </Helmet>
      <DashBoard />
      </>
      }/>
</Route>


      
    </Routes>

{/* <Router>

  <Routes>


  </Routes>
</Router> */}

</>
  )
}

export default App;
