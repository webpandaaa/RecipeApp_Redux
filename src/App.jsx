import React from 'react'
import Nav from '../src/Components/Nav'
import RouteComponent from './Routes/RouteComponent'
import { useSelector } from 'react-redux';

const App = () => {
  const state = useSelector((state) => state);
    console.log(state);
  return (
    <div className=''>
      <Nav/>
      <RouteComponent/>
    </div>
  )
}

export default App
