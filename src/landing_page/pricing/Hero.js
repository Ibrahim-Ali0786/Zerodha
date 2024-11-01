import React from 'react';
function Hero() {
    return (
        <div className='container'>
            <div className='row text-center mt-5 p-5'>
                <h1 style={{fontSize:'45px'}} className='text-muted'>Charges</h1>
                <p style={{fontWeight:'500', opacity:'0.7'}} className='text-muted mt-2 fs-5'>List of all charges and taxes</p>
            </div>
            <div style={{padding:'100px'}} className='row mt-4 text-center'>
                <div className='col'>
                    <img style={{width:'70%'}} src='media/images/pricing0.svg' />
                    <h1 className='mt-4' style={{fontSize:'28px'}}>Free equity delivery</h1>
                    <p  style={{fontSize:"1rem",wordSpacing:'3px', opacity:'0.7', fontWeight:'500'}} className='mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col'>
                    <img style={{width:'70%'}} src='media/images/other-trades.svg' />
                    <h1 className='mt-4' style={{fontSize:'28px'}}>Intraday and F&O trades</h1>
                    <p style={{fontSize:"1rem",wordSpacing:'3px', opacity:'0.7', fontWeight:'500'}} className='mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col'>
                <img style={{width:'70%'}} src='media/images/pricing0.svg' />
                <h1 className='mt-4' style={{fontSize:'28px'}}>Free direct MF</h1>
                <p  style={{fontSize:"1rem",wordSpacing:'3px', opacity:'0.7', fontWeight:'500'}} className='mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;