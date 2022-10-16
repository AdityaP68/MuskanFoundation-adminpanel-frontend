import React from 'react'
import Home from './pages/home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import ProfileList from './pages/profile-list/ProfileList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element = {<Home/>}/>
          <Route path = 'login' element = {<Login/>}/>
          <Route path = 'users'>
            <Route index element = {<ProfileList/>}/>
            <Route path=':userId' element = {<Profile/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App