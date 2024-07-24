import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
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

function App() {
  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path="/MenuItem" element={<MenuItem/>}/>
        <Route path='/adminpage' element={<AdminPage/>}/>
        <Route path='/admincomp' element={<AdminComponent/>}/>
        <Route path='/breakfast' element={<Breakfast/>}/>
        <Route path='/fastfood' element={<FastFood/>}/>
        <Route path='/dessert' element={<Dessert/>}/>
        <Route path='/beverage' element={<Beverages/>}/>
        <Route path='/nonveg' element={<Nonveg/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
