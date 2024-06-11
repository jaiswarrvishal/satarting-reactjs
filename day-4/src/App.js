import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import PageNotFound from './component/PageNotFound';
import Register from './08-06/Register';
import Login from './08-06/Login';
import RegisterValidate from './09-06/RegisterValidate';
import LoginValidate from './09-06/LoginValidate';
import ParentChildInput from './09-06/ParentChildInput';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register-validate' element={<RegisterValidate />} />
        <Route path='/login-validate' element={<LoginValidate />} />
        <Route path='/parent-child-input' element={<ParentChildInput />} />
      </Routes>
    </div>
  );
}

export default App;
