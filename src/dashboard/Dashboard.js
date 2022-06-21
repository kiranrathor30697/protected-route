import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className='text-light mt-5 text-center'>
      <h1>My Dashbord Page</h1>
      <Link to='/home' className='fs-1 text-light text-decoration-none' >Home</Link>
    </div>
  );
}
