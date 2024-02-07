import React from 'react'

//functions
import { Route, Routes } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useQueryForProfileOptions } from '../configs/reactQueryConfigs'

//pages
import AuthPage from '../pages/AuthPage'
import HomePage from '../pages/HomePage'
import DashnoardPage from '../pages/DashnoardPage'
import AdminPage from '../pages/AdminPage'
import PageNotFound from '../pages/PageNotFoundPage'

const Router = () => {
  const {data, isLoading, error } = useQuery(useQueryForProfileOptions)
  console.log(data,isLoading,error);
  
  if(isLoading) return <h1>loading...</h1>

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