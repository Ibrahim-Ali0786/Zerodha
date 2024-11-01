import React from 'react';
function RightSide({src,para,link,head}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div style={{margin:'100px 0 0 80px'}} className='col p-5'>
                    <h1  className='mb-4' style={{opacity:'0.85', fontSize:'35px',}}>{head}</h1>
                    <p style={{fontSize:"1rem",lineHeight:'1.9', fontWeight:'600', opacity:'0.85'}}>{para}</p>
                    <a href=''>{link}</a>
                </div>
                <div style={{margin:'0 90px 0 0'}} className='col'>
                    <img  src={src}/>
                </div>
            </div>
        </div>
    );
}

export default RightSide;