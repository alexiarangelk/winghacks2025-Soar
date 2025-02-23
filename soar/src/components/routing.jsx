import { useState } from 'react'
import Navbar from './Navbar'
import Community from './Community'
import { Routes, Route, useLocation } from 'react-router-dom'
import Chat from './chat';
import Registration from './Registration';

import GroupChats from './GroupChats';

import PublicPosts from './PublicPosts'


const Routing = () => {
  const location = useLocation(); // Get current route location

  return (
    <div className="container">
      {location.pathname !== "/Registration" && <Navbar />}
      <Routes>
        <Route path="/Community" element={<Community />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Registration" element={<Registration />}/>
        <Route path="/PublicPosts" element={<PublicPosts />} />
        <Route path="/GroupChats" element={<GroupChats />} />
      </Routes>
    </div>
  )
}
export default Routing