import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '@/views/Login.tsx'
import Error404 from '@/views/Error404.tsx'
import NotFound from '@/views/NotFound.tsx'


const router = [
  {
    path: '/',
    element: <div>Welcome</div>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '/401',
    element: <Error404 />
  },
  {
    path: '/403',
    element: <Error404 />
  },
  {
    path: '/404',
    element: <NotFound />
  },
]

export default createBrowserRouter(router)
