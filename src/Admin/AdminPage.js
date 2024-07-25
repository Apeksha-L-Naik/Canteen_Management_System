import React from 'react';
import NavBar from '../Components/NavBar';
import { useNavigate,Link } from 'react-router-dom';
import '../Styles/AdminPage.css'


const AdminPage = () => {
  const navigate = useNavigate();

  const HandleMenu = (event) => {
    event.preventDefault(); // Prevent default form submission
    navigate('/admincomp');
  };
  return (
    <>
    <NavBar/>
    <div style={{backgroundColor:'aliceblue',position:'relative',height:'100vh',width:'100vw'}}>
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
    </div>
    </div>
    </>
  );
};

export default AdminPage;
