import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './componets/Login'
import Dashboard from './componets/Dashboard'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return code ? <Dashboard code={code} /> :<Login />
}

export default App;
