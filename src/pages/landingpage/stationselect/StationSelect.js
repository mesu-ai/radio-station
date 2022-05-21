import React from 'react';
import back from '../../../images/icons/back-arrow.png';
import radioSwitch from '../../../images/icons/switch.png';
import selectImg from '../../../images/icons/selectImg.png';
import plus from '../../../images/icons/plus.png';
import minus from '../../../images/icons/minus.png';


const StationSelect = ({stations,selectStation,preStation,nextStation}) => {
   

    return (
        <>
        <div className='radio-header'>
                    <img src={back} alt="" height={40}/>
                    <p>Station</p>
                    <img src={radioSwitch} alt="" height={40}/>

                </div>
                <div className='radio-body'>
                    
                      <li className='station-title'>
                        
                        <p className='station-gap'>{preStation?.name}</p>
                        <p className='station-gap'>{preStation?.harze}</p>
                        
                      </li>
                      
                      <hr className='divider-station'/>
                    
                    

                    <li className='select-station'>
                        <img src={minus} alt="" height={40} />
                        <img src={selectImg} alt="" height={150} />
                        <img src={plus} alt="" height={40} />

                    </li>
                    <li className='station-title'>
                        
                        <p className='station-gap'>{selectStation?.name}</p>
                        <p className='station-gap'>{selectStation?.harze}</p>
                        
                    </li>
                    <hr className='divider-station'/>
                

                    <li className='station-title'>
                        
                        <p className='station-gap'>{nextStation?.name}</p>
                        <p className='station-gap'>{nextStation?.harze}</p>
                        
                    </li>


                      
                    
                    
                    {/* {stations.slice(1-3).map(station=>
                      <ul className='station-container' key={Math.random()}>
                      <li className='station-title'>
                        
                        <p className='station-gap'>{station.name}</p>
                        <p className='station-gap'>{station.harze}</p>
                        
                      </li>
                      <hr className='divider-station'/>
                      </ul>
                        
                    )} */}
                    


                </div>

                <hr className='divider-station'/>

                <div className='radio-footer'>
                    <p className='current-station'>Currently Playing</p>
                    <p className='current-playing'>{selectStation.name}</p>

                </div>

        </>
    );
};

export default StationSelect;