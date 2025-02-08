import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import Login from './login'
import Community from './Community'
import { Routes, Route } from 'react-router-dom'
import Chat from './chat';
import GroupChats from './GroupChats';

const Routing = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Community />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/GroupChats" element={<GroupChats />} />
      </Routes>
    </div>
  )
}
export default Routing