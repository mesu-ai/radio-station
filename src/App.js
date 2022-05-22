import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './conponents/Navbar';
import RadioHome from './pages/landingpage/RadioHome';
import Login from './pages/login/Login';
import AddStation from './pages/managestation/manage/AddStation';
import UpdateStation from './pages/managestation/manage/UpdateStation';
import ManageStation from './pages/managestation/ManageStation';



function App() {


  return (
    <div className="App">
     
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/manage' element={<ManageStation/>}/>
        <Route path='/add' element={<AddStation/>}/>
        <Route path='/update/:id' element={<UpdateStation/>}/>
        <Route path='/login' element={<Login/>}/>
        
        <Route path='/' element={<RadioHome/>}/>
        <Route path='/home' element={<RadioHome/>}/>


      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
