import React from 'react';
function Stats () {
    return (
        <div className='container p-5'>
            <div className='row p-5'>
            <div  className='col-5 p-5'>
                <h1 style={{fontSize:'35px', opacity:'0.9'}} className='mb-5'>Trust with confidence</h1>
                <h2 style={{fontSize:'21px', opacity:'0.85'}} >Customer-first always</h2>
                <p className='text-muted' style={{wordSpacing:'4px'}}>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                <h2 style={{fontSize:'21px', opacity:'0.85'}}>No spam or gimmicks</h2>
                <p className='text-muted' style={{wordSpacing:'4px'}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                <h2 style={{fontSize:'21px', opacity:'0.85'}}>The Zerodha universe</h2>
                <p className='text-muted' style={{wordSpacing:'4px'}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs..</p>
                <h2 style={{fontSize:'21px', opacity:'0.85'}}>Do better with money</h2>
                <p className='text-muted' style={{wordSpacing:'4px'}}>With initiatives like <span ><a style={{textDecoration:'none', color:'#387ED1', fontWeight:'500'}} href=''>Nudge </a>and <a style={{textDecoration:'none', color:'#387ED1', fontWeight:'500'}} href=''>Kill Switch</a></span>, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-7'>
                <img style={{width:'100%'}} src="media/images/ecosystem.png" />
                <div className='text-center'>
                    <a className='mx-4' href='' style={{textDecoration:'none'}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i> </a>
                    <a href='' style={{textDecoration:'none'}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i> </a>
                </div>
            </div>
           <a href=''><img className='offset-2' style={{width:"65%"}} src="media/images/pressLogos.png" /></a>
        </div>
        </div>
    );
}

export default Stats ;