import React, { useEffect } from 'react';
import LoginButton from '../../conponents/authenticate/UserLogin';
import LogoutButton from '../../conponents/authenticate/UserLogout';
import {gapi} from 'gapi-script';
// const clientId="623187840357-b4qcpd81rddaibvc8h3kbfobabok7qp4.apps.googleusercontent.com";

const Login = () => {

    useEffect(()=>{
        function start(){
          gapi.client.init({
            clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            scope: ""
          })
        }
        gapi.load('client:auth2',start);
      },[])


    
    return (
        <div>
            <LoginButton/>
            <LogoutButton/>

        </div>

    );
};

export default Login;