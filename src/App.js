import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RootPage from './features/RootPage/RootPage';
import ParkPage from './features/ParkPage/ParkPage';
import AboutPage from './features/AboutPage/AboutPage';
import PricePage from './features/PricePage/PricePage';
import RegistrationPage from './features/RegistrationPage/RegistrationPage';
import LoginPage from './features/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootPage/>}/>
        <Route path='/park' element={<ParkPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/price' element={<PricePage/>}/>
        <Route path='/registration' element={<RegistrationPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
