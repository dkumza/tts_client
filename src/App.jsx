import './App.css';
import { AdsList } from './components/ads/AdsList';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SingUp';
import { Header } from './components/layout/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './store/authContext';
import { Sell } from './pages/Sell';

function App() {
   const { isUserLoggedIn } = useAuthContext();

   return (
      <div className="min-h-screen ">
         <Header />
         <Routes>
            <Route path="/" element={<AdsList />} />
            <Route
               path="/sell"
               element={isUserLoggedIn ? <Sell /> : <Navigate to={'/'} />}
            />
            <Route
               path="/login"
               element={isUserLoggedIn ? <AdsList /> : <LogIn />}
            />
            <Route
               path="/signup"
               element={isUserLoggedIn ? <SignUp /> : <Navigate to={'/'} />}
            />
         </Routes>
      </div>
   );
}

export default App;
