import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Main from './layouts/Main'
import Dashboard from './pages/Dashboard'
import Welcome from './pages/Welcome'

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />}/>
        <Route path='/admin' element={<Dashboard />}/>
        <Route path='/caffe-menu' element={<Main />}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App