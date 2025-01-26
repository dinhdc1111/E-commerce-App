type AuthLayoutProps = {
  children?: React.ReactNode
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <h1>Auth Layout Component</h1>
      {children}
    </div>
  )
}
export default AuthLayout
