import React from 'react'
import Auth from './pages/AuthPage'

const App = () => {
  console.log(process.env.REACT_APP_BASE_URL);
  
  return (
    <Auth />
  )
}

export default App