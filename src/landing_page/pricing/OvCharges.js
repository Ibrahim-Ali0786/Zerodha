import React from 'react';
function OvCharges() {
    return (
        <div style={{margin:'70px 200px 0 200px',marginBottom:'90px'}} className='container-Ov'>
            <div className='row'>
            <h2 className='mb-4' style={{fontSize:'24px', color:'rgba(0,0,0,0.7)'}}>Charges for optional value added services</h2>
            </div>
             <div className='AO-Charges-Table'>
                <table style={{border:'1px solid rgba(0,0,0,0.2)',borderSpacing:'0',width:'100%'}} className='Ao-Table'>
                    <thead style={{display:'table-header-group', verticalAlign:'middle',unicodeBidi:'isolate'}}>
                        <tr style={{border:'1px solid rgba(0,0,0,0.2)'}}>
                            <th   style={{padding:'12px 10px'}} >Service</th>
                            <th style={{padding:'12px 100px 0 0 '}} >Billing Frquency</th>
                            <th  style={{padding:'12px 100px 0 0 '}} >Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{padding:'12px 10px'}}>Tickertape</td>
                        <td style={{padding:'12px 0px'}}>Monthly / Annual</td>
                        <td style={{padding:'12px 0px'}}>Free: 0 | Pro: 249/2399</td>
                    </tr>
                    <tr>
                        <td style={{padding:'12px 10px'}}>Smallcase</td>
                        <td style={{padding:'12px 0px'}}>Per transaction</td>
                        <td style={{padding:'12px 0px'}}>Buy & Invest More: 100 | SIP: 10</td>
                    </tr>
                    <tr>
                        <td style={{padding:'12px 10px'}}>Kite Connect</td>
                        <td style={{padding:'12px 0px'}}>	Monthly</td>
                        <td style={{padding:'12px 0px'}}>Connect: 2000 | Historical: 2000</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OvCharges;