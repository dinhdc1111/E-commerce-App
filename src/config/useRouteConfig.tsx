import { useRoutes } from 'react-router-dom'
import AuthLayout from 'src/layouts/AuthLayout'
import Signin from 'src/pages/auth/Signin'
import Signup from 'src/pages/auth/Signup'
import ProductList from 'src/pages/ProductList'

// https://api.reactrouter.com/v7/functions/react_router.useRoutes.html
export default function useRouteConfig() {
  const routes = [
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/signin',
      element: (
        <AuthLayout>
          <Signin />
        </AuthLayout>
      )
    },
    {
      path: '/signup',
      element: (
        <AuthLayout>
          <Signup />
        </AuthLayout>
      )
    }
  ]

  const element = useRoutes(routes)
  return element
}
