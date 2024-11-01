import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <div style={{textAlign:'center', padding:"100px"}} className='mt-5'>
        <h1 style={{fontSize:'32px'}}>404 Not Found</h1>
        <p style={{fontSize:'16px', opacity:'0.85'}} className='mt-3'>The page you are looking for does not exits</p>
        <Link style={{textDecoration:'none'}} to='/dashboard'>Return to HomePage</Link>
        </div>
    );
}

export default NotFound;