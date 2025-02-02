import ReactDOM from 'react-dom/client'
import router from './router.tsx'
import { RouterProvider } from 'react-router-dom'
import './i18next/i18n';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
