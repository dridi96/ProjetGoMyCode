import React, { useState } from 'react'
import {
    CDBSidebar,
    CDBSidebarFooter,
    CDBSidebarHeader,

  } from 'cdbreact';
import AvatarSidebar from './Avatars';

const Sidebar = () => {
  const [triggred,setTriggered]=useState(true)
  const triggers=()=>{
    setTriggered(!triggred)
  }
  return (
    <div >
        
    <div  style={{ display: 'flex', height: '90vh', overflow: 'scroll initial' }}>
    <CDBSidebar textColor="#FFC900" backgroundColor="#2B4F60">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" onClick={triggers}></i>} >
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Utilities
          </a>
          
        </CDBSidebarHeader>
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 5px',
            }}
          >
            <AvatarSidebar  triggred={triggred} />
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>

    </div>
  )
}

export default Sidebar