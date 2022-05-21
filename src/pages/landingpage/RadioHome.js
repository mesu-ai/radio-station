import React, { useState } from 'react';
import './radio.scss';
import StationList from './stationlist/StationList';
import StationSelect from './stationselect/StationSelect';

const stations=[
    {   
        _id:1,
        name:'Putin FM',
        harze:'66,6'
    
    },
    {   
        _id:2,
        name:'aaa FM',
        harze:'66,6'
    
    },
    {   
        _id:3,
        name:'vvv FM',
        harze:'66,6'
    
    },
    {   
        _id:4,
        name:'ttt FM',
        harze:'66,6'
    
    },
    {   
        _id:5,
        name:'jjj FM',
        harze:'66,6'
    
    }
]


const RadioHome = () => {

    const [selectStation,setSelectStation]= useState ([]);


    const handlePlay=(id)=>{
       const findStation=stations.find(station=>station._id===id);
       setSelectStation(findStation);
        
    }
    console.log(selectStation);

    return (
        <div className='grid-Container'>
            <div className='grid-item'>
                <StationList stations={stations} handlePlay={handlePlay}/>

            </div>

            <div className='grid-item'>
                <StationSelect stations={stations} selectStation={selectStation}/>
            </div>
           
            
        </div>
    );
};

export default RadioHome;