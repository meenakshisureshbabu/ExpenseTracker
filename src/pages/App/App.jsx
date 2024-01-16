
import '../App/App.css'
import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import SignUp from '../../components/SignUp/SignUp'
import About from '../../components/About/About';
import LoginForm from '../../components/LoginForm/LoginForm';

function App() {

  const [user,setUser] = useState(null)
  return (
    <div className="App">
      {user ? 
      <>
      {/* <DataPage/> */}
        {/* <NavBar user={user} setUser={setUser}/> */}
        <Routes>
          <Route></Route>
        </Routes>
      </>
      : 
      <>
      <About/>
      <Routes>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<LoginForm/>}></Route>
      </Routes>
      </>
      
    }
    
    </div>
  );
}

export default App;
