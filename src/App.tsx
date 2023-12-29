import './App.css'

import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil'

// 페이지 경로
import Home from './pages/Home';
import Search from './pages/Search';
import Common from './pages/Common';
import Mypage from './pages/Mypage';
import Great from './pages/Great';
import Main from './pages/Main';
import MenuDetail from './pages/MenuDetail';

function App() {

  return (
    <RecoilRoot>
      <Routes>
        <Route element={<Common/>}>
          <Route path="/" element={<Main/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/great" element={<Great/>}/>
          <Route path="/mypage" element={<Mypage/>}/>
          <Route path="/menuDetail" element={<MenuDetail/>}/>
        </Route>
      </Routes>
    </RecoilRoot>
  )
}

export default App
