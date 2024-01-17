
import '../App/App.css'
import { useState } from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import SignUp from '../../components/SignUp/SignUp'
import About from '../../components/About/About';
import LoginForm from '../../components/LoginForm/LoginForm';
import MainMenu from '../MainMenu/MainMenu';
import AddIncome from '../../components/AddIncome/AddIncome'
import { getUser } from '../../utilities/users-service';

function App() {

  const [user,setUser] = useState(getUser())
  console.log(user);
  return (
    <div className="App">
      {user ? 
      <>
      {/* <DataPage/> */}
        {/* <NavBar user={user} setUser={setUser}/> */}
        <Routes>

          <Route path="/menu" element={<MainMenu user={user} setUser={setUser}/>} />
          <Route path="/addincome" element={<AddIncome user={user} setUser={setUser}/>}/>
          <Route path="/*" element={<Navigate to="/menu" />} />
        </Routes>
      </>
      : 
      <>
      
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<LoginForm setUser={setUser}/>}></Route>
        <Route path="/*" element={<Navigate to="/" />} />
        
      </Routes>
      </>
      
    }
    
    </div>
  );
}

export default App;
