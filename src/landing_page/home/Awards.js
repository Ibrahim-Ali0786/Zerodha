import React from 'react';
function Awards()
{
    return(
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-6'>
                <img style={{width:"70%"}} src="media/images/largestBroker.svg" />
                </div>
                <div className='col-6 mt-2'>
                    <h1 className='mt-2'>Largest Stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li className='mb-2'>Futures and Options</li>
                                <li className='mb-2'>Commodity derivatives</li>
                                <li className='mb-2'>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li className='mb-2'>Stocks & IPOS</li>
                                <li className='mb-2'>Direct mutual funds</li>
                                <li className='mb-2'>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                   <a href=''> <img style={{width:"90%"}} src='media/images/pressLogos.png' alt='press_image'/></a>
                </div>
                
            </div>
           
        </div>
    )
}
export default  Awards;