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
    const [preStation,setPreStation]= useState ([]);
    const [nextStation,setNextStation]= useState ([]);


    const handlePlay=(id)=>{
        
        // find current station
       const findStation=stations.find(station=>station._id===id);
       setSelectStation(findStation);

        // find previous station
       const preStationId= parseInt(id-1);
       const findPreStation=stations.find(station=>station._id===preStationId);
       
       if(findPreStation){
        setPreStation(findPreStation);

       }

       // find next station
       const nextStationId= parseInt(id+1);
       const findNextStation=stations.find(station=>station._id===nextStationId);
       if(findNextStation){
        setNextStation(findNextStation);


       }
       

        
    }
    console.log(selectStation);

    return (
        <div className='grid-Container'>
            <div className='grid-item'>
                <StationList stations={stations} handlePlay={handlePlay}/>

            </div>

            <div className='grid-item'>
                <StationSelect stations={stations} selectStation={selectStation} preStation={preStation} nextStation={nextStation}/>
            </div>
           
            
        </div>
    );
};

export default RadioHome;