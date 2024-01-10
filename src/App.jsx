import './App.css';
import { AdsList } from './components/ads/AdsList';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SingUp';
import { Header } from './components/layout/Header';

function App() {
   return (
      <div className="min-h-screen container mx-auto">
         <Header />
         {/* <h1>Hello</h1> */}
         {/* <LogIn /> */}
         {/* <SignUp /> */}
         <AdsList />
      </div>
   );
}

export default App;
