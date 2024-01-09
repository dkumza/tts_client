import './App.css';
import { AdsList } from './components/ads/AdsList';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SingUp';

function App() {
   return (
      <div className="min-h-screen container mx-auto">
         {/* <h1>Hello</h1> */}
         {/* <LogIn /> */}
         {/* <SignUp /> */}
         <AdsList />
      </div>
   );
}

export default App;
