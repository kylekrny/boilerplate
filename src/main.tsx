import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import App from './App.tsx';

const root = document.getElementById('root')!;

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
