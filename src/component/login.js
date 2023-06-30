import React from 'react';
const Login = () => {
    const dangnhap = () => {
        console.log('dangnhap');
        localStorage.setItem('user','NTu');
        window.location='/';
    };
    return ( 
       <div>
        <button className='col-6' onClick={dangnhap}>Login</button>
       </div>

     );
}
 
export default Login;