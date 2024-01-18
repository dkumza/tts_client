import './App.css';
import { ProductsList } from './components/pages/products/ProductsList';
import LogIn from './components/pages/auth/LogIn';
import SignUp from './components/pages/auth/SingUp';
import { Header } from './components/layout/Header';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useAuthContext } from './components/contexts/authContext';
import { Sell } from './components/pages/sell/Sell';
import { SingleProductPage } from './components/pages/products/SingleProductPage';
import { ProductsByCategoryList } from './components/pages/products/ProductsByCategoryList';
import { UserMenuHeader } from './components/menus/UserMenuHeader';
import { useState } from 'react';
import Search from './components/forms/Search';
import { ProductsBySearchList } from './components/pages/products/ProductsBySearchList';
import { CustomMsg } from './components/forms/CustomMsg';
import { ProductsByOwner } from './components/pages/products/ProductsByOwner';

function App() {
  const { isUserLoggedIn } = useAuthContext();
  const [clickedMenu, setClickedMenu] = useState(false);

  const location = useLocation();

  return (
    <div className="min-h-screen relative">
      <Header setClickedMenu={setClickedMenu} />
      {isUserLoggedIn && clickedMenu && (
        <UserMenuHeader
          setClickedMenu={setClickedMenu}
          clickedMenu={clickedMenu}
        />
      )}
      <CustomMsg />
      {!['/sell', '/login', '/signup'].includes(location.pathname) && (
        <Search />
      )}

      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route
          path="/products/category/:catID"
          element={<ProductsByCategoryList />}
        />
        <Route
          path="/search/:string"
          element={<ProductsBySearchList />}
        ></Route>
        <Route path="/product/:productID" element={<SingleProductPage />} />
        <Route
          path="/sell"
          element={isUserLoggedIn ? <Sell /> : <Navigate to={'/'} />}
        />
        <Route
          path="/login"
          element={isUserLoggedIn ? <ProductsList /> : <LogIn />}
        />
        <Route
          path="/my-list"
          element={isUserLoggedIn ? <ProductsByOwner /> : <LogIn />}
        />
        <Route
          path="/signup"
          element={!isUserLoggedIn ? <SignUp /> : <Navigate to={'/'} />}
        />
      </Routes>
    </div>
  );
}

export default App;
