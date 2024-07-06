import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Caurosal from './Caurosal';
import '../Styles/MenuItem.css' // Import your CSS file for styles

const MenuItem = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleViewMenu = (menu) => {
    setSelectedMenu(menu);
  };

  const handleBack = () => {
    setSelectedMenu(null);
  };

  return (
    <div>
      <NavBar />
      <Caurosal />
      <div className="container-menu mt-5" style={{ height: '100px', width: '80rem', paddingLeft: '230px', paddingRight: '10px' }}>
      <h1>Popular Items</h1>
        <div className="row">
          <div className="col-md-4 mb-3 mx-auto" style={{ paddingRight: '40px' }}>
            <div className="card custom-card">
              <img
                src="https://images.alphacoders.com/862/thumb-1920-862639.jpg"
                className="card-img-top"
                alt="Breakfast"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Breakfast</h5>
              </div>
              <div className="card-footer text-center">
                <button
                  className="btn btn-view"
                  onClick={() => handleViewMenu('Breakfast')}
                >
                  View Menu
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mx-auto" style={{ paddingRight: '40px' }}>
            <div className="card h-100 custom-card">
              <img
                src="https://cheapandcheerfulcooking.com/wp-content/uploads/2021/01/chinese-fried-noodles-basic-recipe-2.jpg"
                className="card-img-top"
                alt="Fast Food"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Fast Food</h5>
              </div>
              <div className="card-footer text-center">
                <button
                  className="btn btn-view"
                  onClick={() => handleViewMenu('Fast Food')}
                >
                  View Menu
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mx-auto" style={{ paddingRight: '40px' }}>
            <div className="card h-100 custom-card">
              <img
                src="https://th.bing.com/th/id/OIP.AkxnpRO4rDrh2Uli8iQcrAHaHa?rs=1&pid=ImgDetMain"
                className="card-img-top"
                alt="Dessert"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Dessert</h5>
              </div>
              <div className="card-footer text-center">
                <button
                  className="btn btn-view"
                  onClick={() => handleViewMenu('Dessert')}
                >
                  View Menu
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mx-auto" style={{ paddingRight: '40px', paddingTop: '30px' }}>
            <div className="card h-100 custom-card">
              <img
                src="https://th.bing.com/th?id=OIP.MkmdcW0GA4qxZ8f_hKzXWQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                className="card-img-top"
                alt="Beverages"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Beverages</h5>
              </div>
              <div className="card-footer text-center">
                <button
                  className="btn btn-view"
                  onClick={() => handleViewMenu('Beverages')}
                >
                  View Menu
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mx-auto" style={{ paddingRight: '40px', paddingTop: '30px' }}>
            <div className="card h-100 custom-card">
              <img
                src="https://i.ytimg.com/vi/NeQxq3UGhLc/maxresdefault.jpg"
                className="card-img-top"
                alt="NonVeg"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">NonVeg</h5>
              </div>
              <div className="card-footer text-center">
                <button
                  className="btn btn-view"
                  onClick={() => handleViewMenu('NonVeg')}
                >
                  View Menu
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mx-auto" style={{ paddingRight: '40px', paddingTop: '30px' }}>
            <div className="card h-100 custom-card">
              <img
                src="https://th.bing.com/th?id=OIP.lsE17OVe-elD1hd5GVCfdAHaFc&w=291&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                className="card-img-top"
                alt="Chats"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Chats</h5>
              </div>
              <div className="card-footer text-center">
                <button
                  className="btn btn-view"
                  onClick={() => handleViewMenu('Chats')}
                >
                  View Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
