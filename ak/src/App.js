import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import About from './pages/About'


function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/about' element={<About />}></Route>



        </Routes>
      </Router>
    </>
  );
}

export default App;