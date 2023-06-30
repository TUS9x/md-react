import React from 'react';
const Logout = () => {
    const logout = () => {
        console.log('dangnhap');
        localStorage.removeItem('user','NTu');
        window.location='/';
    };
    return ( 
       <div>
        <button className='col-6' onClick={logout}>Logout</button>
       </div>

     );
}
 
export default Logout;