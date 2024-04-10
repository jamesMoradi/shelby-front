import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './layouts/Main'
import Dashboard from './pages/Dashboard'
import Welcome from './pages/Welcome'
import BreakFasts from './pages/BreakFasts'

const App = () => {
  return (
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/admin' element={<Dashboard />}/>
        <Route path='/caffe-menu' element={<Main />}/>
        <Route path='/breakfast' element={<BreakFasts />}/>
      </Routes>

      </BrowserRouter>
  )
}

export default App