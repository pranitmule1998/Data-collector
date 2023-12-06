import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Adduser from './Component/Adduser';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Error from './Component/Error';
import Gallery from './Component/Gallery';
import Showuser from './Component/Showuser';
import Updateuser from './Component/Updatauser';
import Delete from './Component/Delete';

function App() {
  return (
    <div className="App">


<BrowserRouter>

<Navbar/>
<Routes>
  <Route path=''element={<Home/>}></Route>
  <Route path='/home'element={<Home/>}></Route>
  <Route path='/gallery'element={<Gallery/>}></Route>
  <Route path='/contact'element={<Contact/>}></Route>
  <Route path='/adduser'element={<Adduser/>}></Route>
  <Route path='/showuser'element={<Showuser/>}></Route>
  <Route path='/updateuser/:studentId'element={<Updateuser/>}></Route>
  <Route path='/delete/:studentId'element={<Delete/>}></Route>
  <Route path='*'element={<Error/>}></Route>
  
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
