'use client'

import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import EmployeeForm from '../../component/EmployeeForm';

const Home = () => {
  const [showform , setShowForm ] = useState('false');

  // const dispatch = useDispatch();
  // const apiUserData = useSelector((data)=>data.userData.userAPIData);
  return (
    <div>
      {showform && <EmployeeForm />}
    </div>
  )
}

export default Home
