import React  from 'react';
import { GoogleLogin } from 'react-google-login';
const clientId="623187840357-b4qcpd81rddaibvc8h3kbfobabok7qp4.apps.googleusercontent.com";


const UserLogin = () => {
    

    const onSuccess=(googleData)=>{
        console.log('login success',googleData);
        if ( googleData.accessToken){
            console.log(googleData.accessToken);
            localStorage.setItem('accessToken',googleData.accessToken);
        }
    }
    const onFailure=(res)=>{
        console.log('login failed',res);
    }


    return (

        <div id='signInButton'>
           {/* process.env.REACT_APP_GOOGLE_CLIENT_ID  */}
        <GoogleLogin
        clientId={clientId}
        buttonText="Login With Google"
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