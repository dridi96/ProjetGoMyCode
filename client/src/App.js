import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Register from './Pages/Register';
import Signin from './Pages/Signin';
import MapPage from './Pages/MapPage';
//import {PrivateRoute }from './PrivateRoute/PrivateRoute';
import PostPage from './Pages/PostPage';
import Navbarr from './component/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*' element={<HomePage/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Signin' element={<Signin/>}/>
          <Route path='/MapPage' element={<MapPage/>}/>
          <Route path='/PostPage' element={<PostPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
