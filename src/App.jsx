import { useState } from 'react';
import './App.css';
import { AdsList } from './components/ads/AdsList';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SingUp';
import { Header } from './components/layout/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
   const [isUserLogged, setIsUserLogged] = useState(false);
   const [userEmail, setUserEmail] = useState('email');

   const handleSingIn = (email) => {
      console.log(email);
      setIsUserLogged(true);
      setUserEmail(email);
   };

   const handleLogOut = () => {
      isUserLogged(false);
      setUserEmail('');
   };
   return (
      <div className="min-h-screen ">
         <Header
            isUserLogged={isUserLogged}
            userEmail={userEmail}
            handleLogOut={handleLogOut}
         />
         <Routes>
            <Route path="/" element={<AdsList />} />
            <Route
               path="/login"
               element={
                  isUserLogged ? (
                     <AdsList />
                  ) : (
                     <LogIn handleSingIn={handleSingIn} />
                  )
               }
            />
            <Route path="/signup" element={<SignUp />} />
         </Routes>
         {/* <h1>Hello</h1> */}
         {/* <LogIn /> */}
         {/* <SignUp /> */}
         {/* <AdsList /> */}
      </div>
   );
}

export default App;
