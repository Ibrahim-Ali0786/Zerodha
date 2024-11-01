import React from 'react';
function AoCharges() {
    return (
        <div style={{margin:'70px 200px 0 200px'}} className='container-AO mb-5'>
            <div className='row'>
                <h2 className='mb-4' style={{fontSize:'24px',color:'rgba(0,0,0,0.7)'}} >Charges for account opening</h2>
            </div>
            <div className='AO-Charges-Table'>
                <table style={{border:'1px solid rgba(0,0,0,0.2)',width:'100%'}} className='Ao-Table'>
                    <thead>
                        <tr style={{border:'1px solid rgba(0,0,0,0.2)'}}>
                            <th  style={{padding:'12px 10px', width:'90%'}} >Type of account</th>
                            <th  style={{padding:'12px 100px 0 0 '}} >Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{padding:'12px 15px 5px 15px'}}>Online account</td>
                        <td style={{padding:'10px 0 2px 0'}}>
                            <div style={{backgroundColor:'#4CAF50', borderRadius:'3px', width:'47px', height:'20px'}}>
                                <p style={{fontSize:'13px',textAlign:'center', color:'whitesmoke', fontWeight:'500',}}>FREE</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding:'12px 15px 5px 15px'}}>Offline account</td>
                        <td style={{padding:'10px 0 2px 0'}}><div style={{backgroundColor:'#4CAF50', width:'47px', height:'20px', borderRadius:'3px'}}>
                                <p style={{fontSize:'13px',textAlign:'center', color:'whitesmoke', fontWeight:'500',}}>FREE</p>
                            </div></td>
                    </tr>
                    <tr>
                        <td style={{padding:'12px 15px 5px 15px'}}>NRI account (offline only)</td>
                        <td style={{padding:'10px 0 2px 0'}}>₹ 500</td>
                    </tr>
                    <tr>
                        <td style={{padding:'12px 15px 5px 15px'}}>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                        <td style={{padding:'10px 0 2px 0'}}>₹ 500</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AoCharges;