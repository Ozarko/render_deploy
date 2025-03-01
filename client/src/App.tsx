import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Main from './pages/main'

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  )
}

export default App
