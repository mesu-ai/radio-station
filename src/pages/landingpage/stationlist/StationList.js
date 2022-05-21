import React from 'react';
import back from '../../../images/icons/back-arrow.png';
import radioSwitch from '../../../images/icons/switch.png';

const StationList = () => {
    return (
        <>
                <div className='radio-header'>
                    <img src={back} alt="" height={40}/>
                    <p>Station</p>
                    <img src={radioSwitch} alt="" height={40}/>

                </div>
                <div className='radio-body'>
                    <li className='station-title'>
                        <p className='station-gap'>Putin FM</p>
                        <p className='station-gap'>66,6</p>
                        
                    </li>
                    <hr className='divider-station'/>
                    <li className='station-title'>
                        <p className='station-gap'>Putin FM</p>
                        <p className='station-gap'>66,6</p>
                    </li>
                    <hr className='divider-station'/>
                    <li className='station-title'>
                        <p className='station-gap'>Putin FM</p>
                        <p className='station-gap'>66,6</p>
                        
                    </li>
                    <hr className='divider-station'/>
                    <li className='station-title'>
                        <p className='station-gap'>Putin FM</p>
                        <p className='station-gap'>66,6</p>
                        
                    </li>
                    <hr className='divider-station'/>
                    <li className='station-title'>
                        <p className='station-gap'>Putin FM</p>
                        <p className='station-gap'>66,6</p>
                        
                    </li>
                    


                </div>
                <hr className='divider-station'/>

        </>
    );
};

export default StationList;