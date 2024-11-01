import React from 'react';
function Footer() {
    return (
     <footer style={{cursor:'default'}} className='border-top bg-light'>
          <div style={{marginTop:'30px'}} className='container'>
        <div className='row mb-5'>
            <div className='col'>
                <div className='text-center mb-3'>
                <img style={{width:'50%'}} src='media/images/logo.svg' />
                <p style={{fontSize:'12.8px', opacity:'0.8', marginLeft:'70px', fontWeight:'700',opacity:'0.6'}} className='mt-3 mb-1'>© 2010 - 2024, Zerodha Broking Ltd.</p>
                <p style={{fontSize:'12.8px', opacity:'0.8', marginLeft:'-32px ', fontWeight:'700',opacity:'0.6'}}>All rights reserved.</p>
                </div>
                <div className='text-center mb-3' style={{marginLeft:'-32px'}}>
                    <a style={{textDecoration:'none', color:'black'}} href=''><i style={{fontSize:"20px", opacity:'0.5'}} class="social-icons fa-brands fa-square-x-twitter"></i></a>
                    <a style={{textDecoration:'none', color:'black'}} href=''><i style={{fontSize:"20px", opacity:"0.5"}} class="social-icons fa-brands fa-facebook"></i></a>
                    <a style={{textDecoration:'none', color:'black'}} href=''><i style={{fontSize:"20px", opacity:"0.5"}} class="social-icons fa-brands fa-instagram"></i></a>
                    <a style={{textDecoration:'none', color:'black'}} href=''><i style={{fontSize:"20px", opacity:"0.5"}} class="social-icons fa-brands fa-linkedin-in"></i></a>
                </div>
                <div style={{width:'200px', marginLeft:'80px'}} className='border-bottom mb-3'></div>
                <div style={{padding:"0 0 0 60px"}} className='social-media'>
                    <a style={{textDecoration:'none',color:'black'}} href=''><i style={{fontSize:'20px', opacity:'0.5'}} class="social-media-icons fa-brands fa-youtube"></i></a>
                    <a style={{textDecoration:'none',color:'black'}} href=''><i style={{fontSize:'20px', opacity:'0.5'}} class="social-media-icons fa-brands fa-whatsapp"></i></a>
                    <a style={{textDecoration:'none',color:'black'}} href=''><i style={{fontSize:'20px', opacity:'0.5'}} class="social-media-icons fa-brands fa-telegram"></i></a>
                </div>
            </div>
            <div className='col'>
                <h5 className='mb-4'>Company</h5>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>About</p>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>Products</p>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>Pricing</p>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>Referral programme</p>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>Careers</p>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>Zerodha.tech</p>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>Press & media</p>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>Zerodha Cares (CSR)</p>
            </div>
            <div className='col'>
                <h5 className='mb-4'>Support</h5>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>Contact us</p>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>Support portal</p>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>Z-Connect blog</p>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>List of charges</p>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>Downloads & resources</p>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>Videos</p>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>Market overview</p>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>How to file a complaint?</p>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>Status of your complaints</p>
            </div>
            <div className='col'>
                <h5>Account</h5>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>Open an account</p>
                <p style={{marginBottom:"5px",fontWeight:'bold' ,fontSize:'16px', opacity:'0.7', fontFamily:"sans-serif"}}>Fund transfer</p>
            </div>
        </div>
            <p className=' text-muted' style={{fontSize:'10px', fontWeight:'700', opacity:'0.5',wordSpacing:'4px'}}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a style={{textDecoration:'none'}} href=''>complaints@zerodha.com</a>, for DP related to <a style={{textDecoration:'none'}} href=''>dp@zerodha.com.</a> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
            <p className=' text-muted' style={{fontSize:'10px', fontWeight:'700', opacity:'0.5',wordSpacing:'4px'}}>Procedure to file a complaint on <a style={{textDecoration:'none'}} href=''>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
            <p className=' text-muted' style={{fontSize:'10px', fontWeight:'700', opacity:'0.5',wordSpacing:'4px'}}><a style={{textDecoration:'none'}} href=''>Smart Online Dispute Resolution</a> | <a style={{textDecoration:'none'}} href=''>Grievances Redressal Mechanism</a></p>
            <p className=' text-muted' style={{fontSize:'10px', fontWeight:'700', opacity:'0.5',wordSpacing:'4px'}}>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
            <p className=' text-muted' style={{fontSize:'10px', fontWeight:'700', opacity:'0.5',wordSpacing:'4px'}}>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
            <p className=' text-muted' style={{fontSize:'10px', fontWeight:'700', opacity:'0.5',wordSpacing:'4px'}}>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a style={{textDecoration:'none'}} href=''>create a ticket here</a>.</p>
            <div style={{padding:'0 0 0 150px'}} className='links'>
                <a style={{textDecoration:'none',color:'black', opacity:'0.5'}} className='icons-link' href=''>NSE</a>
                <a style={{textDecoration:'none',color:'black', opacity:'0.5'}} className='icons-link' href=''>BSE</a>
                <a style={{textDecoration:'none',color:'black', opacity:'0.5'}} className='icons-link' href=''>MCX</a>
                <a style={{textDecoration:'none',color:'black', opacity:'0.5'}} className='icons-link' href=''>Terms & conditions</a>
                <a style={{textDecoration:'none',color:'black', opacity:'0.5'}} className='icons-link' href=''>Policies & procedures</a>
                <a style={{textDecoration:'none',color:'black', opacity:'0.5'}} className='icons-link' href=''>Privacy policy</a>
                <a style={{textDecoration:'none',color:'black', opacity:'0.5'}} className='icons-link' href=''>Disclosure</a>
                <a style={{textDecoration:'none',color:'black', opacity:'0.5'}} className='icons-link' href=''>For investor's attention</a>
                <a style={{textDecoration:'none',color:'black', opacity:'0.5'}} className='icons-link' href=''>Investor charter</a>
            </div>
            <div style={{height:'30px'}}></div>
       </div>
     </footer>
    );
}

export default Footer;