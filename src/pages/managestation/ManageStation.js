import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../scss/stationmanage-style.scss';



const ManageStation = () => {
    const [stations,setStations]=useState([]);
    useEffect(()=>{
        axios.get('https://immense-fjord-26417.herokuapp.com/stations')
        .then(res=>{
            setStations(res.data);
            // console.log(res.data);
        })
    },[])

    const navigate=useNavigate();

    const handleAdd=()=>{
        navigate('/add')

        
    }
    const handleUpdate=(station,id)=>{

        navigate(`/update/${id}`,{state:{updateSt:{station}}});

    }

    const handleDelete=(id)=>{
        console.log(id);
        axios.delete(`https://immense-fjord-26417.herokuapp.com/stations/${id}`)
        .then(res=>{
            console.log(res);
            if(res.status===200){
                alert('deleted');
                const remainSt=stations.filter(station=>station._id !== id);
                setStations(remainSt);
            }
        })



    }
    return (
        <div className='manage-station'>
        <div>
            <h2>Add New Station</h2>
            <button onClick={handleAdd}>Add New Station</button>
        </div>
        <div className=''>
        <h2>Manage Existing Station</h2>
        <div className='table-container'>
            <table>
            <thead>
                <tr>
                    <th>Radio Station</th>
                    <th>Frequency</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            {stations.map(station=>
            <tbody key={Math.random()}>
                <tr>
                    <td>{station.name}</td>
                    <td>{station.frequency}</td>
                    <td><button onClick={()=>handleUpdate(station,station._id)}>Update</button></td>
                    <td><button onClick={()=>handleDelete(station._id)}>Delete</button></td>
                </tr>
            </tbody>
                
                )}
            </table>
                        
        </div>
        </div>
        </div>
    );
};

export default ManageStation;