import useRouteConfig from './config'
import './App.css'

function App() {
  const routes = useRouteConfig()
  return <div>{routes}</div>
}

export default App
