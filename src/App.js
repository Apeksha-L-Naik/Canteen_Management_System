import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import Home from './Components/Home';
import AdminLogin from './Admin/AdminLogin';
import MenuItem from './Components/MenuItem';
import AdminPage from './Admin/AdminPage';
import AdminComponent from './Admin/AdminComponent';

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
      </Routes>
    </Router>
    </>
  );
}

export default App;
