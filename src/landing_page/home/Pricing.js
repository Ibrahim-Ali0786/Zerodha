import React from 'react';
function Pricing () {
    return (
        <div className='container mt-4 mb-4'>
            <div className='row mx-5'>
                <div className='col-5'>
                    <h1 style={{fontSize:'32px', opacity:"1", fontFamily:'sans-serif', fontWeight:"549"}} className='mb-4'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:'none'}}>See Pricing <i class="fa-solid fa-arrow-right-long"></i> </a>
                </div>
                <div className='col-7 mt-5'>
                    <div className='row'>
                        <div  className='col d-flex'>
                            <img style={{width:'60%'}} src="media/images/pricing-eq.svg.svg" />
                            <p style={{fontSize:'10px',height:'61%',position:'relative',top:"35px",left:'-25px'}} className='p-1'>Free account opening</p>
                        </div>
                        <div className='col d-flex'>
                        <div className='col d-flex'>
                            <img style={{width:'60%'}} src="media/images/pricing-eq.svg.svg" />
                            <p style={{fontSize:'10px',height:'61%',position:'relative',top:"35px",left:'-25px'}}>Free equity delivery
                            and direct mutual funds</p>
                        </div>
                        </div>
                        <div className='col d-flex'>
                        <div  className='col d-flex'>
                            <img style={{width:'60%'}} src="media/images/pricing-eq.svg.svg" />
                            <p style={{fontSize:'10px',height:'61%',position:'relative',top:"35px",left:'-25px'}} className='p-1'>Intraday and
                            F&O</p>
                        </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    );
}

export default Pricing ;