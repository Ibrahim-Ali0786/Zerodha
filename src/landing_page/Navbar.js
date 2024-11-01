import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='conatiner'>
          <nav style={{height:'75px', backgroundColor:'white',}} class="navbar navbar-expand-lg border-bottom ">
                <div className="container">
                  <div class="navbar-brand" >
                    <Link to='/'>
                    <img className='icons' style={{width:'20%'}} src='media/images/logo.svg' />
                    </Link>
                  </div>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                       <Link className='nav-link' to='/signup'>SignUp</Link>
                      </li>
                      <li class="nav-item">
                      <Link className='nav-link' to='/about'>About</Link>
                      </li>
                      <li class="nav-item">
                      <Link className='nav-link' to='/products'>Products</Link>
                      </li>
                      <li class="nav-item">
                      <Link className='nav-link' to='/pricing'>Pricing</Link>
                      </li>
                      <li class="nav-item">
                      <Link className='nav-link' to='/support'>Support</Link>
                      </li>
                      <li class="nav-item">
                      <i style={{fontSize:'20px',color:'black', fontWeight:'600'}} class="fa-solid fa-bars nav-link"></i>
                      </li>
                    </ul>
                  </div>
                </div>
          </nav>
        </div>
    );
}

export default Navbar;