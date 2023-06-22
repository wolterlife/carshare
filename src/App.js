import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RootPage from './features/RootPage/RootPage';
import ParkPage from './features/ParkPage/ParkPage';
import PricePage from './features/PricePage/PricePage';
import RegistrationPage from './features/RegistrationPage/RegistrationPage';
import LoginPage from './features/LoginPage/LoginPage';
import ErrorPage from './features/ErrorPage/ErrorPage';
import {Provider} from 'react-redux';
import StartPage from './features/StartPage/StartPage';
import GoPage from './features/GoPage/GoPage';
import AdminPage from './features/AdminPage/AdminPage';
import {store} from './redux/store';
import AddCarPage from './features/AddCarPage/AddCarPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootPage/>}/>
          <Route path='/go' element={<GoPage/>}/>
          <Route path='/addCar' element={<AddCarPage/>}/>
          <Route path='/start' element={<StartPage/>}/>
          <Route path='/park' element={<ParkPage/>}/>
          <Route path='/price' element={<PricePage/>}/>
          <Route path='/registration' element={<RegistrationPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
