import React from 'react';
import { Link } from 'react-router-dom';
function Universe() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row mt-5 text-center'>
                <h1 style={{opacity:'0.85', fontSize:'32px'}} className='mt-5'>The Zerodha Universe</h1>
                <p style={{fontWeight:'550'}} className='text-muted mt-3 fs-9'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row  text-center p-5 mx-5'>
                <div className='col'>
                    <img style={{width:'55%'}} src='media/images/zerodhaFundhouse.png' />
                    <p className='text-center text-muted' style={{fontSize:'12px', width:'220px', textAlign:'left',fontWeight:'550', margin:'13px 0 0 80px',opacity:'0.75'}}>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>
                <div className='col'>
                    <img style={{width:'70%'}} src='media/images/sensibull-logo.svg' />
                    <p className='mt-4 text-center text-muted' style={{fontSize:'12px', width:'260px', textAlign:'left',fontWeight:'550', margin:'0 0 0 60px',opacity:'0.75'}}>Options trading platform that lets you
                    create strategies, analyze positions, and examine
                    data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className='col'>
                    <img  style={{width:'45%'}} src='media/images/tijori.svg' />
                    <p className='mt-1 text-center text-muted' style={{fontSize:'12px', width:'250px', textAlign:'left',fontWeight:'550', margin:'0 0 0 60px',opacity:'0.75'}}>Investment research platform
                                        that offers detailed insights on stocks,
                                        sectors, supply chains, and more.
                                        </p>
                </div>
            </div>
            <div className='row text-center p-5 mx-5 mb-5'>
                <div className='col'>
                    <img style={{width:'45%'}} src='media/images/streakLogo.png' />
                    <p className='mt-3 text-center text-muted' style={{fontSize:'12px', width:'170px',wordSpacing:'0px', textAlign:'left',fontWeight:'550', margin:'0 0 0 90px',opacity:'0.75'}}>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>
                </div>
                <div className='col'>
                    <img src='media/images/smallcaseLogo.png'/>
                    <p  className='mt-3 text-center text-muted' style={{fontSize:'12px', width:'170px',wordSpacing:'0px', textAlign:'left',fontWeight:'550', margin:'0 0 0 90px',opacity:'0.75'}}>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>
                <div className='col'>
                    <img style={{width:'40%'}} src='media/images/dittoLogo.png' />
                    <p  className='mt-3 text-center text-muted' style={{fontSize:'12px', width:'170px',wordSpacing:'0px', textAlign:'left',fontWeight:'550', margin:'0 0 0 90px',opacity:'0.75'}}>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.</p>
                </div>
            </div>
            <div className='row'>
            <Link className='text-center' style={{color:"white",textDecoration:'none'}} to={'/signup'}> <button style={{backgroundColor:'#387DE1', color:'white', fontWeight:'550'}} className='col-2 text-center p-2 btn fs-5 btn'>Sign up for free</button></Link>
            </div>
        </div>
    );
}

export default Universe;