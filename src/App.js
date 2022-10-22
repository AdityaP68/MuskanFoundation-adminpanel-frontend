import React from 'react'
import Home from './pages/home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import ProfileList from './pages/profile-list/ProfileList'
import TransactionList from './pages/transaction-list/TransactionList'

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
          <Route path = 'transactions' element={<TransactionList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App