import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './components/error_route/Error';
import GetDataList from './components/rcc/Get_Api/GetDataList';
import Get_Api2 from './components/rcc/Get_Api/Get_Api2';
import Get_User_Data from './components/rcc/Get_Api/Get_User_Data';
import Login from './components/rcc/Get_Api/Login';
import View2 from './components/rcc/Get_Api/View2';
import Get_api from './components/rfc/Get_Api/Get_api';
import Register from './components/rfc/Get_Api/Register';
import { View } from './components/rfc/Get_Api/View';
import Dashboard from './dashboard/Dashboard';
import Home from './dashboard/Home';
import CreateEmployees from './pages/CreateEmployees';
import CurdOperation from './pages/CurdOperation';
import Delete from './pages/Delete';
import Edit from './pages/Edit';
import Login2 from './pages/Login2';
import Logout from './pages/Logout';
import Register2 from './pages/Register2';
import Protected from './protected/Protected';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login2" element={<Login2 />} />
          <Route path="/get_api" element={<Protected Component={Get_api} />} />
          <Route path="/:id" element={<Protected Component={View} />} />
          <Route path="/getdatalist" element={<GetDataList />} />
          <Route path="/rcc/get_api2" element={<Get_Api2 />} />
          <Route path="/rcc/get_api2/:id" element={<View2 />} />
          <Route path="/register" element={<Protected Component={Register} />} />
          <Route path="/register2" element={<Protected Component={Register2} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getuserdata" element={<Get_User_Data />} />
          <Route path="/create_employees" element={<Protected Component={CreateEmployees} />} />
          <Route path="/curdoperation" element={<Protected Component={CurdOperation} />} />
          <Route path="/curdoperation/:id" element={<Delete />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/***" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
