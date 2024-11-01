import React from 'react';
function LeftSide({src,head,para,tryDemo,learnMore,google,appStore}) {
    return (
        <div className='container p-5'>
            <div className='row p-4 mx-5'>
                <div className='col'>
                    <img src={src}></img>
                </div>
                <div style={{ margin:'0 0 0 150px'}} className='col mt-5'>
                   <div className='row '>
                   <h1 className='mb-4' style={{opacity:'0.85', fontSize:'35px'}}>{head}</h1>
                   <p style={{fontSize:"1rem",lineHeight:'1.9', fontWeight:'600', opacity:'0.85'}}>{para}</p>
                   <div className='linkesforsearch mb-4'>
                   <a style={{marginRight:'100px',textDecoration:'none', fontWeight:'600'}} href=''>{tryDemo}<i class="fa-solid fa-arrow-right-long"></i></a>
                   <a style={{textDecoration:'none',fontWeight:'600'}} href=''>{learnMore}<i class="fa-solid fa-arrow-right-long"></i></a>
                   </div>
                   <div className='social-handle-download'>
                    <img style={{marginRight:'1.2rem', width:'45%'}} src={google}/>
                    <img style={{width:'40%'}} src={appStore}/>
                   </div>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSide;