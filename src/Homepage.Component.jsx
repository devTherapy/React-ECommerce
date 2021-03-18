import React from 'react';
import './Homepage.styles.scss';

const HomePage = () => (
<div className="Homepage"> 
<h1>Welcome to home page</h1>
<div className="directory-menu">
    <div className="menu-item">
        <div className="content">  
        <h1 className="title">HATS</h1>
        <p className="subtitle">SHOP NOW</p>
        </div>
    </div>
    <div className="menu-item">
        <div className="content">  
        <h1 className="title">JACKETS</h1>
        <p className="subtitle">SHOP NOW</p>
        </div>
    </div> <div className="menu-item">
        <div className="content">  
        <h1 className="title">SHOES</h1>
        <p className="subtitle">SHOP NOW</p>
        </div>
    </div> <div className="menu-item">
        <div className="content">  
        <h1 className="title">WOMEN</h1>
        <p className="subtitle">SHOP NOW</p>
        </div>
    </div> <div className="menu-item">
        <div className="content">  
        <h1 className="title">MEN</h1>
        <p className="subtitle">SHOP NOW</p>
        </div>
    </div>
</div>
</div>
)
export default HomePage;