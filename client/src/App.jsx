import './App.css'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import NavBar from './components/navBar/NavBar';
import { Home, Landing, Details, Form, Error } from "./views"

function App() {

  const location = useLocation();

  return (
    <div className='App'>
        {location.pathname !== "/" && <NavBar/>}
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/form' element={<Form/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
