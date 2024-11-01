import React from 'react';
function Hero() {
    return (
        <div className='container text-center mt-5 p-5 border-bottom'>
            <div className='row mb-5'>
                <h1 style={{opacity:'0.85', fontSize:'45px'}}>Zerodha Products</h1>
                <p className='mt-2' style={{fontSize:'20px', opacity:"0.9"}}>Sleek, modern, and intuitive trading platforms</p>
                <p className='mt-2' style={{fontSize:'16px', opacity:"0.85", fontWeight:'600'}}>Check out our <a style={{textDecoration:'none'}} href=''> investment offerings → </a></p>
            </div>    
        </div>
    );
}

export default Hero;