import './App.css'; 
import {BrowserRouter} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Router from './router'
import './index.css'
import './fonts/fonts.css';
import CartProvider from './context/CartProvider';

function App() {
  return (
      <CartProvider>
          <BrowserRouter>
              <Router />
          </BrowserRouter>
      </CartProvider>
  );
}

export default App;
