import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthCtxProvider } from './components/contexts/authContext.jsx';
import { ProductsCtxProvider } from './components/contexts/productsContext.jsx';
import { MsgContextProvider } from './components/contexts/msgContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MsgContextProvider>
      <AuthCtxProvider>
        <ProductsCtxProvider>
          <App />
        </ProductsCtxProvider>
      </AuthCtxProvider>
    </MsgContextProvider>
  </BrowserRouter>,
);
