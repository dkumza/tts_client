import './App.css';
import { ProductsList } from './components/pages/products/ProductsList';
import LogIn from './components/pages/auth/LogIn';
import SignUp from './components/pages/auth/SingUp';
import { Header } from './components/layout/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './components/authContext';
import { Sell } from './components/pages/sell/Sell';
import { SingleProductPage } from './components/pages/products/SingleProductPage';

function App() {
   const { isUserLoggedIn } = useAuthContext();

   return (
      <div className="min-h-screen ">
         <Header />
         <Routes>
            <Route path="/" element={<ProductsList />} />
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
               path="/signup"
               element={!isUserLoggedIn ? <SignUp /> : <Navigate to={'/'} />}
            />
         </Routes>
      </div>
   );
}

export default App;
