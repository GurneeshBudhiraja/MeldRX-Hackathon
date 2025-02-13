import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import PatientContextWrapper from './context/PatientContext.tsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './page/Login.tsx';
import Callback from './page/Callback.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PatientContextWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/launch" element={<Login />} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </BrowserRouter>
    </PatientContextWrapper>
  </StrictMode>
);
