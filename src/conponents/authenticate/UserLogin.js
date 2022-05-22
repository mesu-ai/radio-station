import React from 'react';
import { GoogleLogin } from 'react-google-login';
const clientId="623187840357-b4qcpd81rddaibvc8h3kbfobabok7qp4.apps.googleusercontent.com";

const UserLogin = () => {

    const onSuccess=(res)=>{
        console.log('login success',res.profileObj);
    }
    const onFailure=(res)=>{
        console.log('login failed',res);
    }
    return (
        <div id='signInButton'>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            >

            </GoogleLogin>
            
        </div>
    );
};

export default UserLogin;