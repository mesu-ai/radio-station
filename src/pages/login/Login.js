import React, { useEffect, useState } from 'react';
import LoginButton from '../../conponents/authenticate/UserLogin';
import LogoutButton from '../../conponents/authenticate/UserLogout';
import {gapi} from 'gapi-script';
import '../../scss/stationmanage-style.scss';
// const clientId="623187840357-b4qcpd81rddaibvc8h3kbfobabok7qp4.apps.googleusercontent.com";

const Login = () => {
    const [token,setToken]=useState('');
    useEffect(()=>{
        const accessToken=localStorage.getItem('accessToken');
        setToken(accessToken);

    },[token])


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
        <div className='login-container'>
           {token?<LogoutButton/>:<LoginButton/>}
             

        </div>

    );
};

export default Login;