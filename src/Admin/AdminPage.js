import React from 'react';
import NavBar from '../Components/NavBar';
import { useNavigate,Link } from 'react-router-dom';
import '../Styles/AdminPage.css'
import { Card } from 'react-bootstrap';

const AdminPage = () => {
  const navigate = useNavigate();

  const HandleMenu = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Handle login logic here
    // For demo purposes, navigate to the home page on submit
    navigate('/admincomp');
  };
  return (
    <>
    <NavBar/>
    <div style={{paddingTop:'100px'}}>
      <h2 style={{marginLeft:'200px'}}>Admin Dashboard</h2>
    </div>
    <div className='admindash' style={{marginLeft:'80px'}}>
        <div className='style'>
        <div className='card' style={{height:'100px',width:'20rem'}}>
        <div className="card-body text-center justify-content-center ">
                <h5 className="card-title" onClick={HandleMenu}>Food Categories</h5>
        </div>
        </div>
        </div>
        <div className='card' style={{height:'100px',width:'20rem'}}>
        <div className="card-body text-center justify-content-center ">
                <h5 className="card-title">Today's Menu</h5>
              </div>
        </div>
        <div className='card' style={{height:'100px',width:'20rem'}}>
        <div className="card-body text-center justify-content-center ">
                <h5 className="card-title">Total Order</h5>
              </div>
        </div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/adminCategories">Manage Food Categories</Link>
          </li>
          <li>
            <Link to="/adminMenu">Manage Today's Menu</Link>
          </li>
        </ul>
      </nav>

      {/* Additional content or dashboard overview can be added here */}
    </div>
    </>
  );
};

export default AdminPage;
