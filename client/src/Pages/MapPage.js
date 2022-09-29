import React from 'react'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import Mappy from './Map'


const MapPage = () => {
  return (
    <div>
        <Header/>
        <div className='mapgri'>
        <Sidebar/>
        <Mappy></Mappy>
        </div>
    </div>
  )
}

export default MapPage