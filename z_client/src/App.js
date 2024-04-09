import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import { Home, Design, Login, Register, EnterPortal } from './components/index';
import { getToken } from './utils/auth'; 

function App() {
  const token = getToken(); 
  // console.log(token);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ !!token ? <Navigate to="/home" /> : <EnterPortal/> } />
        <Route path="design" element={ <Design/> } />
        <Route path="register" element={ <Register/> } />
        <Route path="login" element={<Login />} />
        <Route path="home" element={ /*!!token ?*/ <Home /> /*: <Navigate to="/login" />*/ } />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
