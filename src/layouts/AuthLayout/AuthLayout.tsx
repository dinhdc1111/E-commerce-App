import AuthLayoutHeader from 'src/components/AuthLayoutHeader'
import Footer from 'src/components/Footer'

type AuthLayoutProps = {
  children?: React.ReactNode
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <AuthLayoutHeader />
      {children}
      <Footer />
    </>
  )
}
export default AuthLayout
