import './App.css'; 
import {BrowserRouter} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Router from './router'
import './index.css'
import './fonts/fonts.css';

function App() {
  return (
    <BrowserRouter>
      <Router />      
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
