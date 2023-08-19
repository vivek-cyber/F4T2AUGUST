
import './App.css';
import Login from './Components/Login';
import Profile from './Components/Profile';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
<Routes>
  <Route path="/" element={<Login/>}></Route>
  <Route path='/Profile' element={<Profile/>}></Route>
</Routes>
      {/* <Login/>
      <Profile/> */}
        
    </div>
  );
}

export default App;
