import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { defaultOptions } from './configs/reactQueryConfigs'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const App = () => {
  const queryClient = new QueryClient({defaultOptions})

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />      
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App