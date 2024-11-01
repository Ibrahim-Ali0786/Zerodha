import React from 'react';
function Education () {
    return ( 
        <div className='conatiner mx-5'>
            <div className='row mx-5 p-5'>
                <div className='col p-5'>
                    <img style={{width:'80%'}} src ="media/images/education.svg" />
                </div>
                <div className='col p-5'>
                    <div className='row mt-3'>
                        <h1 style={{fontSize:'32px', opacity:'0.85'}} >Free and open market education</h1>
                    </div>
                    <p style={{fontSize:"1rem", opacity:'0.85', lineHeight:'1.7'}} className='mt-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a  href='' style={{textDecoration:'none'}}>Varsity <i style={{fontSize:'13px'}} class="fa-solid fa-arrow-right-long"></i> </a>
                    <p style={{fontSize:"1rem", opacity:'0.85', lineHeight:'1.7'}} className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a  href='' style={{textDecoration:'none'}}>TradingQ&A  <i style={{fontSize:'13px'}} class="fa-solid fa-arrow-right-long"></i> </a>
                </div>
            </div>
        </div>
    );
}

export default Education ;