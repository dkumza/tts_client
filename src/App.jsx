import { useState } from 'react';
import './App.css';
import { AdsList } from './components/ads/AdsList';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SingUp';
import { Header } from './components/layout/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
   const [isUserLogged, setIsUserLogged] = useState(false);
   return (
      <div className="min-h-screen container mx-auto">
         <Header />
         <Routes>
            <Route path="/" element={<AdsList />} />
            <Route path="/login" element={<LogIn />} />
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
