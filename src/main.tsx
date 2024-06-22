import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './presentation/router/Router'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './presentation/auth'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    {/* <React.StrictMode> */}
      <RouterProvider router={ router } />
    {/* </React.StrictMode> */}
  </AuthProvider>
)
