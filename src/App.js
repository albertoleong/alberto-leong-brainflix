import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import UploadPage from './pages/UploadPage/UploadPage';


function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos/:videoId' element={<Home />} />
        <Route path='/upload' element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
