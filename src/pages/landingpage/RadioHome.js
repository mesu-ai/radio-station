import React from 'react';
import './radio.scss';
import StationList from './stationlist/StationList';
import StationSelect from './stationselect/StationSelect';


const radiohome = () => {
    return (
        <div className='grid-Container'>
            <div className='grid-item'>
                <StationList/>

            </div>

            <div className='grid-item'>
                <StationSelect/>
            </div>
           
            
        </div>
    );
};

export default radiohome;