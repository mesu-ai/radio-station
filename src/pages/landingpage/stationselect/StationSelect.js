import React from 'react';
import back from '../../../images/icons/back-arrow.png';
import radioSwitch from '../../../images/icons/switch.png';
import selectImg from '../../../images/icons/selectImg.png';
import plus from '../../../images/icons/plus.png';
import minus from '../../../images/icons/minus.png';


const StationSelect = ({stations,selectStation,preStation,nextStation}) => {
    // console.log('pp',preStation);
   

    return (
        <>
        <div className='radio-header'>
                    <img src={back} alt="" height={40}/>
                    <p>Station</p>
                    <img src={radioSwitch} alt="" height={40}/>

                </div>
                <div className='radio-body'>

                    {stations.map(station=>

                        station===selectStation?

                        <ul className='station-container'>
                          <li className='select-station'>
                              
                              <div className='btn-container'><img className='custom-button'  src={minus} alt="" height={40} /></div>
                              <div><img src={selectImg} alt="" height={150} /></div>
                              <div className='btn-container'><img className='custom-button'  src={plus} alt="" height={40} /></div>
                              

                        ` </li>

                          <li className='station-title'>
                            <p className='station-gap'>{selectStation?.name}</p>
                            <p className='station-gap'>{selectStation?.harze}</p>

                          </li>
                          <hr className='divider-station'/>
                        </ul>
                   
                        :
                         <>
                         <li className='station-title'>
                            <p className='station-gap'>{station?.name}</p>
                            <p className='station-gap'>{station?.harze}</p>
                            
                          </li>
                          <hr className='divider-station'/>
                          </>

                         )}
                
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