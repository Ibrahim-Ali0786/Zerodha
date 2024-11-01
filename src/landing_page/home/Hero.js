import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <div className='container p-5'>
            <div className='row '>
                    <img src="media/images/homeHero.png" />
                <h1 style={{opacity:'0.85',textAlign:'center', fontSize:'45px',fontWeight:'light'}}className='mb-3 mt-5'>Invest in everything</h1>
                <p style={{fontSize:'20px', wordSpacing:'4px',textAlign:'center' }}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link className='text-center' style={{color:"white",textDecoration:'none'}} to={'/signup'}> <button style={{backgroundColor:'#387DE1', color:'white', fontWeight:'550'}} className='col-2 text-center p-2 btn fs-5 btn'>Sign up for free</button></Link>
            </div>
        </div>
    );
}

export default Hero;