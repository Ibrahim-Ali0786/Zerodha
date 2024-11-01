import React from 'react';
import { useEffect} from 'react';
import { useState } from 'react';
function Equity() {
    const [isClicked, setIsClicked] = useState(false);
    const [equity, setEquity] = useState(false); 
    const [commodity, setCommodity] = useState(false); 
      const handleClick = () => {
        let table = document.getElementsByClassName('equityTable');
        document.getElementsByClassName('CommodityTable')[0].style.display='none'
        table[0].style.display='none';
        document.getElementsByClassName('CurrencyTable')[0].style.display='block'
        document.getElementsByClassName('currency')[0].style.borderBottom="2px solid #387DE1";
        document.getElementsByClassName('equity')[0].style.borderBottom='none';
        document.getElementsByClassName('commodity')[0].style.borderBottom='none';
        setIsClicked(true);
        setEquity(false);
        setCommodity(false);
      };
      const EquityClick = () => {
        console.log('Element clicked');
        let table = document.getElementsByClassName('CurrencyTable');
        table[0].style.display='none'
        document.getElementsByClassName('CommodityTable')[0].style.display='none'
        table[0].style.display='none';
        document.getElementsByClassName('equityTable')[0].style.display='block'
        document.getElementsByClassName('equity')[0].style.borderBottom="2px solid #387DE1";
        document.getElementsByClassName('currency')[0].style.borderBottom='none';
        document.getElementsByClassName('commodity')[0].style.borderBottom='none';
        setIsClicked(false);
        setEquity(true);
        setCommodity(false);
      };
      const CommodityClick = () => {
        console.log('Element clicked');
        let table = document.getElementsByClassName('CurrencyTable');
        table[0].style.display='none'
        document.getElementsByClassName('equityTable')[0].style.display='none'
        table[0].style.display='none';
        document.getElementsByClassName('CommodityTable')[0].style.display='block'
        document.getElementsByClassName('commodity')[0].style.borderBottom="2px solid #387DE1";
        document.getElementsByClassName('currency')[0].style.borderBottom='none';
        document.getElementsByClassName('equity')[0].style.borderBottom='none';
        setIsClicked(false);
        setEquity(false);
        setCommodity(true);
      };
    return (
       <section className='important section-equity'>
        <div style={{margin:'0 220px 0 220px'}} className='nav-container'>
            <nav style={{padding:'0 0 10px 0'}} className='tinytab-link border-bottom'>
                <a style={{textDecoration:'none', color:'rgba(0,0,0,0.6)',fontSize:'24px', fontWeight:'550',padding:'14px 40px',}} href='/pricing#tab-equity' onClick={EquityClick} className='equity' >Equity</a>
                <a style={{textDecoration:'none', color:'rgba(0,0,0,0.6)',fontSize:'24px', fontWeight:'550',padding:'14px 40px'}} href='/pricing#tab-currency'className='currency' onClick={handleClick}>Currency</a>
                <a style={{textDecoration:'none', color:'rgba(0,0,0,0.6)',fontSize:'24px', fontWeight:'550',padding:'14px 40px'}} href='/pricing#tab-commodity' onClick={CommodityClick} className='commodity'>Commodity
                </a>
            </nav>
            <div className='equityTable'>
            <table style={{width:'100%', display:'block'}} className='table-equity mt-4'>
                <thead style={{border:'1px solid rgba(0,0,0,0.2)'}}>
                   <tr>
                    <th style={{padding:'12px 0px'}}>&nbsp;</th>
                    <th style={{padding:'12px 0px'}}>Equity delivery</th>
                    <th style={{padding:'12px 0px'}}>Equity intraday</th>
                    <th style={{padding:'12px 0px'}}>F&O - Futures</th>
                    <th style={{padding:'12px 0px'}}>F&O - Options</th>
                   </tr>
                </thead>
                <tbody style={{border:'1px solid rgba(0,0,0,0.2)'}}>
                    <tr>
                        <td style={{width:"15%",padding:'12px 15px'}}>Brokerage</td>
                        <td style={{width:"20%",padding:'12px 0px'}}>Zero Brokerage</td>
                        <td style={{width:"20%",padding:'12px 0px'}}>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td style={{width:"20%",padding:'12px 0px'}}>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td style={{width:"25%",padding:'12px 0px'}}>Flat Rs. 20 per executed order</td>
                    </tr>
                    <tr>
                    <td style={{width:"15%",padding:'12px 15px'}}>STT/CTT</td>
                        <td style={{width:"20%",padding:'12px 0px'}}>0.1% on buy & sell</td>
                        <td style={{width:"20%",padding:'12px 0px'}}>0.025% on the sell side</td>
                        <td style={{width:"20%",padding:'12px 0px'}}>0.02% on the sell side</td>
                        <td style={{width:"25%",padding:'12px 0px'}}>
                            <ul>
                                <li>
                                0.0125% of the intrinsic value on options that are bought and exercised
                                </li>
                                <li>
                                0.1% on sell side (on premium)
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                    <td style={{width:"15%",padding:'12px 15px'}}>Transaction charges</td>
                        <td style={{width:"20%",padding:'12px 0px'}}>NSE: 0.00297% <br/> BSE: 0.00375%</td>
                        <td style={{width:"20%",padding:'12px 0px'}}>NSE: 0.00297% <br/> BSE: 0.00375%</td>
                        <td style={{width:"20%",padding:'12px 0px'}}>NSE: 0.00173%
                        <br/>BSE: 0</td>
                        <td style={{width:"25%",padding:'12px 0px'}}>NSE: 0.03503% (on premium)
                       <br/> BSE: 0.0325% (on premium)</td>
                    </tr>
                    <tr>
                    <td style={{width:"15%",padding:'12px 15px'}}>GST</td>
                        <td style={{width:"20%",padding:'12px 0px'}}>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td style={{width:"20%",padding:'12px 0px'}}>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td style={{width:"20%",padding:'12px 0px'}}>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td style={{width:"25%",padding:'12px 0px'}}>18% on (brokerage + SEBI charges + transaction charges)</td>
                    </tr>
                    <tr>
                    <td style={{width:"15%",padding:'12px 15px'}}>SEBI charges</td>
                        <td style={{width:"20%",padding:'12px 0px'}}>₹10 / crore</td>
                        <td style={{width:"20%",padding:'12px 0px'}}>₹10 / crore</td>
                        <td style={{width:"20%",padding:'12px 0px'}}>₹10 / crore</td>
                        <td style={{width:"25%",padding:'12px 0px'}}>₹10 / crore</td>
                    </tr>
                    <tr>
                    <td style={{width:"15%",padding:'12px 15px'}}>Stamp charges</td>
                        <td style={{width:"20%",padding:'12px 0px'}}>0.015% or ₹1500 / crore on buy side</td>
                        <td style={{width:"20%",padding:'12px 4px'}}>0.003% or ₹300 / crore on buy side</td>
                        <td style={{width:"20%",padding:'12px 4px'}}>0.002% or ₹200 / crore on buy side</td>
                        <td style={{width:"25%",padding:'12px 0px'}}>0.003% or ₹300 / crore on buy side</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div style={{ display:'none'}} className='CurrencyTable'>
            <table style={{width:'100%'}} className='table-currency mt-4'>
                <thead style={{border:'1px solid rgba(0,0,0,0.2)'}}>
                   <tr>
                    <th>&nbsp;</th>
                    <th style={{padding:'12px 0px'}}>Currency futures</th>
                    <th style={{padding:'12px 0px'}}>Currency options</th>
                   </tr>
                </thead>
                <tbody style={{border:'1px solid rgba(0,0,0,0.2)'}}>
                    <tr>
                        <td style={{width:"20%",padding:'12px 15px'}}>Brokerage</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>0.03% or ₹ 20/executed order whichever is lower</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>₹ 20/executed order</td>
                    </tr>
                    <tr>
                        <td style={{width:"20%",padding:'12px 15px'}}>STT/CTT</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>No STT</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>No STT</td>
                    </tr>
                    <tr>
                        <td style={{width:"20%",padding:'12px 15px'}}>Transaction charges</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>
                            <h6>NSE:</h6>
                            <p>Exchange txn charge: 0.00035%</p>
                            <h6>BSE:</h6>
                            <p>Exchange txn charge: 0.00045%</p>
                            </td>
                            <td style={{width:"40%",padding:'12px 0px'}}>
                            <h6>NSE:</h6>
                            <p>Exchange txn charge: 0.0311%</p>
                            <h6>BSE:</h6>
                            <p>Exchange txn charge: 0.001%</p>
                            </td>
                    </tr>
                    <tr>
                        <td style={{width:"20%",padding:'12px 15px'}}>GST</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>18% on (brokerage + SEBI charges + transaction charges)</td>
                    </tr>
                    <tr>
                        <td style={{width:"20%",padding:'12px 15px'}}>SEBI charges</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>₹10 / crore</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>₹10 / crore</td>
                    </tr>
                    <tr>
                        <td style={{width:"20%",padding:'12px 15px'}}>Stamp charges</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>0.0001% or ₹10 / crore on buy side</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>0.0001% or ₹10 / crore on buy side</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div style={{display:'none'}} className='CommodityTable'>
            <table style={{width:'100%'}} className='table-commodity mt-4'>
                <thead style={{border:'1px solid rgba(0,0,0,0.2)'}}>
                   <tr>
                    <th>&nbsp;</th>
                    <th style={{padding:'12px 0px'}}>Commodity futures</th>
                    <th style={{padding:'12px 0px'}}>Commodity options</th>
                   </tr>
                </thead>
                <tbody style={{border:'1px solid rgba(0,0,0,0.2)'}}>
                    <tr>
                        <td style={{width:"20%",padding:'12px 15px'}}>Brokerage</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>0.03% or ₹ 20/executed order whichever is lower</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>₹ 20/executed order</td>
                    </tr>
                    <tr>
                        <td style={{width:"20%",padding:'12px 15px'}}>STT/CTT</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>0.01% on sell side (Non-Agri)</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>0.05% on sell side</td>
                    </tr>
                    <tr>
                        <td style={{width:"20%",padding:'12px 15px'}}>Transaction charges</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>
                            <h6>Group A</h6>
                            <p>Exchange txn charge: 0.0021%</p>
                            <h6>Group B</h6>
                            <p>Exchange txn charge:
                                <br/>
                                CASTORSEED - 0.0005%
                                <br/>
                                KAPAS - 0.0026%
                                <br/>
                                PEPPER - 0.00005%
                                <br/>
                                RBDPMOLEIN - 0.001%
                            </p>
                            </td>
                            <td style={{width:"40%",padding:'12px 0px'}}>
                            <p>Exchange txn charge: 0.0418%</p>
                            </td>
                    </tr>
                    <tr>
                        <td style={{width:"20%",padding:'12px 15px'}}>GST</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>18% on (brokerage + SEBI charges + transaction charges)</td>
                    </tr>
                    <tr>
                        <td style={{width:"20%",padding:'12px 15px'}}>SEBI charges</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>
                            <h6>Agri:</h6>
                            <p>₹1 / crore</p>
                            <h6>Non-agri:</h6>
                            <p>₹10 / crore</p>
                        </td>
                        <td style={{width:"40%",padding:'12px 0px'}}>₹10 / crore</td>
                    </tr>
                    <tr>
                        <td style={{width:"20%",padding:'12px 15px'}}>Stamp charges</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>0.002% or ₹200 / crore on buy side</td>
                        <td style={{width:"40%",padding:'12px 0px'}}>0.003% or ₹300 / crore on buy side</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
       </section>
    );
}

export default Equity;