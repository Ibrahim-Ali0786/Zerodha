import React from 'react';
import { Link } from 'react-router-dom';
function OpenAccount() {
    return (
        <div className='container mt-5 text-center mb-5'>
                <h1 style={{fontSize:'32px', opacity:'0.85'}}>Open a Zerodha account</h1>
                <p style={{fontSize:'16px',textAlign:'center', opacity:'0.85'}} className='mt-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades..</p>
               <div className='text-center'><Link className='text-center' style={{color:"white",textDecoration:'none'}} to={'/signup'}> <button style={{backgroundColor:'#387DE1', color:'white', fontWeight:'550'}} className='col-2 text-center p-2 btn fs-5 btn'>Sign up for free</button></Link></div>
        </div>
    );
}

export default OpenAccount;