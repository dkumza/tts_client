import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthCtxProvider } from './components/authContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <AuthCtxProvider>
         <App />
      </AuthCtxProvider>
   </BrowserRouter>
);
