import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './comman/Navbar';
import Home from './pages/Home';
function App() {
  return ( 
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route>
        <Route path='/' element={<Home/>}></Route>

        </Route>
      </Routes>
    </Router>
    </>
   );
}

export default App;