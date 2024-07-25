import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Components/LoginForm';

import Home from './Components/Home';
import AdminLogin from './Admin/AdminLogin';
import MenuItem from './Components/MenuItem';
import AdminPage from './Admin/AdminPage';
import AdminComponent from './Admin/AdminComponent';
import Menu from './Components/Menu';
import Breakfast from './Components/Breakfast';
import FastFood from './Components/FastFood';
import Dessert from './Components/Dessert';
import Beverages from './Components/Beverages';
import Nonveg from './Components/Nonveg';
import Cart from './Components/Cart';
import Chats from './Components/Chats';
import OrderSummary from './Components/OrderSummary';
import OrderSuccessful from './Components/OrderSuccessful';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import FeedBack from './Components/FeedBack';

function App() {
  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path="/MenuItem" element={<MenuItem/>}/>
        <Route path='/feedback' element={<FeedBack/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/adminpage' element={<AdminPage/>}/>
        <Route path='/admincomp' element={<AdminComponent/>}/>
        <Route path='/breakfast' element={<Breakfast/>}/>
        <Route path='/fastfood' element={<FastFood/>}/>
        <Route path='/dessert' element={<Dessert/>}/>
        <Route path='/beverage' element={<Beverages/>}/>
        <Route path='/nonveg' element={<Nonveg/>}/>
        <Route path='/chats' element={<Chats/>}/>
        <Route path='/ordersummary' element={<OrderSummary/>}/>
        <Route path='/order-successful' element={<OrderSuccessful/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
