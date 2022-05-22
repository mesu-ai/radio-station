import React from 'react';
import back from '../../../images/icons/back-arrow.png';
import radioSwitch from '../../../images/icons/switch.png';

const StationList = ({stations,handlePlay}) => {
    return (
        <>
                <div className='radio-header'>
                    <img src={back} alt="" height={40}/>
                    <p>Station</p>
                    <img src={radioSwitch} alt="" height={40}/>

                </div>
                <div className='radio-body'>
                    {stations.map(station=>
                      <ul className='station-container' key={Math.random()}>
                        
                     <li className='station-title' onClick={()=>handlePlay(station._id)}>
                         
                        
                        <p className='station-gap'>{station.name}</p>
                        <p className='station-gap'>{station.frequency}</p>
                        
                      </li>
                      <hr className='divider-station'/>
                      
                      
                      
                      
                      </ul>
                        
                    )}
                    


                </div>
                <hr className='divider-station'/>

        </>
    );
};

export default StationList;