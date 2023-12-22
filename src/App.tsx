import './App.css'

import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil'
import Home from './pages/Home';

function App() {

  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </RecoilRoot>
  )
}

export default App
