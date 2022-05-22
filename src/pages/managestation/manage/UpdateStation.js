import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const UpdateStation = () => {

    
    

    const {id}=useParams();
    const {station}=useLocation().state.updateSt;
    const [stationData,setStationData]=useState({_id:station._id,name:station.name,frequency:station.frequency});
    console.log(station);


    const handleBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;

        console.log(e);

        const newData={...stationData};
        newData[field]=value;
        setStationData(newData);


       
    }

    const handleSubmit=(e)=>{


        axios.put(`http://localhost:5000/stations/${id}`,stationData)
        .then(res=>{
            if(res.status===200){
                alert('Updated the Station !');
                document.getElementById('stationNameId').value='';
                document.getElementById('stationFreqId').value='';

            }
        })
        console.log(stationData);


        e.preventDefault();

    }

    return (
        <div className='form-center'>
            <form onSubmit={handleSubmit} className='form-container'>
                <div>
                    <label className='form-lebel'>Station Name</label>
                    <input onBlur={handleBlur} className='form-input' type="text" name='name' id='stationNameId' defaultValue={station?.name} required/>
                </div>

                <div style={{marginTop:5}}>
                    <label className='form-lebel'>Station Frequency</label>
                    <input onBlur={handleBlur} className='form-input' type="text" name='frequency' id='stationFreqId' defaultValue={station?.frequency} required/>

                </div>
            

                <input className='submit-btn' type='submit' value="Update"></input>
                


            </form>


        </div>
    );
};

export default UpdateStation;