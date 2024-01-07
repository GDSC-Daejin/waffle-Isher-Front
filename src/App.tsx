import './App.css'

import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil'

// 페이지 경로
import Home from './pages/Home';
import Common from './pages/Common';
import Mypage from './pages/Mypage';
import Great from './pages/Great';
import Main from './pages/Main';
import MenuDetail from './pages/MenuDetail';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Register from './pages/Register';
import Error from './pages/ErrorPage';
import Test from './pages/Test';

function App() {

  return (
    <RecoilRoot>
      <Routes>
        <Route element={<Common/>}>
          <Route path="/" element={<Main/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/great" element={<Great/>}/>
          <Route path="/mypage" element={<Mypage/>}/>
          <Route path="/menuDetail" element={<MenuDetail/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </RecoilRoot>
  )
}

export default App
