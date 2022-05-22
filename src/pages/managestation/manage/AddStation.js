import React, { useState } from 'react';
import '../../../scss/stationmanage-style.scss';
import axios from 'axios';

const AddStation = () => {

    const [stationData,setStationData]=useState({})


    const handleBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;

        console.log(e);

        const newData={...stationData};
        newData[field]=value;
        setStationData(newData);

    }

    const handleSubmit=(e)=>{
        console.log(stationData);

         axios.post('https://immense-fjord-26417.herokuapp.com/stations',stationData)
        .then(res=>{
            if(res.status===200){
                alert('Added a station !');
                document.getElementById('stationNameId').value='';
                document.getElementById('stationFreqId').value='';

            }
        })





        e.preventDefault();

    }


    return (
        <div className='form-center'>
            <form onSubmit={handleSubmit} className='form-container'>
                <div>
                    <label className='form-lebel'>Station Name</label>
                    <input onBlur={handleBlur} id='stationNameId' className='form-input' type="text" name='name' required/>
                </div>

                <div style={{marginTop:5}}>
                    <label className='form-lebel'>Station Frequency</label>
                    <input onBlur={handleBlur} id='stationFreqId' className='form-input' type="text" name='frequency' required/>

                </div>
            

                <input className='submit-btn' type='submit' value="Submit"></input>
                


            </form>


        </div>


    );
};

export default AddStation;