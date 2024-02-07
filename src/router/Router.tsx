import React from 'react'

//functions
import { Navigate, Route, Routes } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useQueryForProfileOptions } from '../configs/reactQueryConfigs'

//pages
import AuthPage from '../pages/AuthPage'
import HomePage from '../pages/HomePage'
import DashnoardPage from '../pages/DashnoardPage'
import AdminPage from '../pages/AdminPage'
import PageNotFound from '../pages/PageNotFoundPage'
import Loader from '../components/modules/Loader'

const Router = () => {
  const {data, isLoading, error } = useQuery(useQueryForProfileOptions)
  
  if(isLoading) return <Loader />

  return (
    <Routes>
        <Route index element={<HomePage />}/>
        <Route path='/auth' element={!data?.data ? <AuthPage /> : <DashnoardPage />}/>
        <Route path='/dashboard' element={data?.data ? <DashnoardPage /> : <Navigate to={'/auth'}/>}/>
        <Route path='/admin' element={data?.data.role === 'ADMIN' ? <AdminPage /> : <Navigate to={'/dashboard'}/>}/>
        <Route path='*' element={<PageNotFound />}/>
    </Routes>
  )
}

export default Router