import React from 'react';
function Hero() {
    return (
        <div style={{backgroundColor:'#387ed1', height:'450px',margin:'0px',padding:'0px', border:'1px solid transparent'}}>
            <div style={{padding:"0 120px 0 120px"}} className='container'>
               <div style={{display:'flex', justifyContent:"space-between"}} className='upper'>
               <h5 style={{fontSize:'20.4px', fontWeight:'600', color:"#fff"}} className='mt-5'>Support Portal</h5>
               <a style={{color:'#fff',textDecoration:'none', lineHeight:'2', fontSize:'16px', padding:'0 0 1px'}} className='mt-5 border-bottom' href=''>Track tickets</a>
               </div>
               <div className='mt-5 d-flex'>
               <div style={{width:'580px'}}>
               <h4 style={{color:'#fff', fontSize:'22px', fontWeight:'490'}}>Search for an answer or browse help topics to create a ticket</h4>
               <div style={{width:'100%', height:'50px', backgroundColor:"rgba(255,255,255,0.9)",justifyContent:'space-between'}} className='searchIcon d-flex mt-5'>
               <input style={{height:'50px',border:'none', fontSize:'16px',width:'90%', padding:'0 0 0 15px',border:'none',outline:'none'}} type='text' placeholder='Eg: how do i activate F&O, why is my order getting rejected ... '></input>
               <i style={{padding:'18px 15px 0 0'}} class="fa-solid fa-magnifying-glass "></i>
               </div>
               <div style={{width:'580px'}} className='links mt-3'>
                <div className='row'>
                    <div className='col'><a style={{padding:'0 0 2px',color:'#fff', textDecoration:'none', fontSize:'16px'}} className='border-bottom' href=''>Track account opening</a></div>
                    <div className='col'><a style={{padding:'0 0 2px',color:'#fff', textDecoration:'none', fontSize:'16px'}} className='border-bottom' href=''>Track segment activation</a></div>
                    <div className='col'><a style={{padding:'0 0 2px',color:'#fff', textDecoration:'none', fontSize:'16px'}} className='border-bottom' href=''>Intraday margins</a></div>
                </div>
                <div className='row mt-3'>
                    <div className='col'><a style={{padding:'0 0 2px',color:'#fff', textDecoration:'none', fontSize:'16px'}} className='border-bottom' href=''>Kite user manual</a></div>
                </div>
               </div>
               </div>
               <div style={{padding:'0 0 0 50px'}} className='mt-5'>
                <h5 style={{color:'#fff'}}>Featured</h5>
                <ul>
                    <li style={{listStyle:'number', lineHeight:'4', textDecoration:'underline',color:"#fff"}}>Suspension of trading - IDFC Limited</li>
                    <li style={{listStyle:'number',lineHeight:'2', textDecoration:'underline',color:"#fff"}}>Rights Entitlements listing in October 2024</li>
                </ul>
               </div>
               </div>
            </div>
        </div>
    );
}

export default Hero;