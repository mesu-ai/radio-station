import React from 'react';
import { GoogleLogout } from 'react-google-login';
// const clientId="623187840357-b4qcpd81rddaibvc8h3kbfobabok7qp4.apps.googleusercontent.com";

const UserLogout = () => {
    const logout=()=>{
        console.log('logout successfully');
        localStorage.removeItem('accessToken');
    }
    return (
        <div id='signOutButton'>
            <GoogleLogout
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Logout With Google"
                onLogoutSuccess={logout}
                >
            </GoogleLogout>
            
        </div>

    );
};

export default UserLogout;