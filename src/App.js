import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { routePath } from './constants/routes';
import CategoryMovies from './pages/CategoryMovie';
// import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path={routePath.home} element={<Home/>}/>
        <Route path={routePath.categories} element={<CategoryMovies/>}/>
        <Route path={routePath.invalid} element={<Home/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;