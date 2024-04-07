import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './layouts/Main'
import Dashboard from './pages/Dashboard'
import Welcome from './pages/Welcome'
import BreakFasts from './pages/BreakFasts'
import {store} from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
      <BrowserRouter>
      <Provider store={store}>
      <Routes>
        <Route index element={<Welcome />}/>
        <Route path='/admin' element={<Dashboard />}/>
        <Route path='/caffe-menu' element={<Main />}/>
        <Route path='/breakfast' element={<BreakFasts />}/>
      </Routes>
      </Provider>
      </BrowserRouter>
  )
}

export default App