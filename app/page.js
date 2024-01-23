import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();
  const apiUserData = useSelector((data)=>data.userData.userAPIData);
  return (
    <div>
      
    </div>
  )
}

export default App
