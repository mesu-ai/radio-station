import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../scss/radio-style.scss';
import StationList from './stationlist/StationList';
import StationSelect from './stationselect/StationSelect';



const RadioHome = () => {


    const [selectStation,setSelectStation]= useState ([]);

    const [stations,setStations]=useState([]);
    useEffect(()=>{
        axios.get('https://immense-fjord-26417.herokuapp.com/stations')
        .then(res=>{
            setStations(res.data);
            // console.log(res.data);
        })
    },[])


    const handlePlay=(id)=>{
        
        // find current station
       const findStation=stations.find(station=>station._id===id);
       setSelectStation(findStation);   
    }
    

    return (

        <div className='container'>
            <div className='grid-Container'>
                <div className='grid-item'>
                    <StationList stations={stations} handlePlay={handlePlay}/>

                </div>

                <div className='grid-item'>
                    <StationSelect stations={stations} selectStation={selectStation}/>
                </div>
            </div>
        </div>
    );
};

export default RadioHome;