import react from "react";
import NavBar from "./NavBar";
import Home from "./home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import DashBoard from "./admin/dashboard";
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
      <Route path='/product/:id' exact element={<Productsin />}/>
      <Route path='/catagory/:catagory' exact element={<Shopw />}/>
      </Route>

      
 
<Route path='/admin'>
      <Route path='login' element={<LoginToAdmin />}/>
      <Route path='editproduct/:id' element={<Edit_product />}/>
      <Route path='dashboard/:tab' exact element={<DashBoard />}/>
      <Route path='dashboard' exact element={<DashBoard />}/>
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
