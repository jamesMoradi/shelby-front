import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from '../pages/AuthPage'
import HomePage from '../pages/HomePage'
import DashnoardPage from '../pages/DashnoardPage'
import AdminPage from '../pages/AdminPage'
import PageNotFound from '../pages/PageNotFoundPage'

const Router = () => {
  return (
    <Routes>
        <Route index element={<HomePage />}/>
        <Route path='/auth' element={<AuthPage />}/>
        <Route path='/dashboard' element={<DashnoardPage />}/>
        <Route path='/admin' element={<AdminPage />}/>
        <Route path='*' element={<PageNotFound />}/>
    </Routes>
  )
}

export default Router