import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import CreateItemPage from './routes/CreateItemPage'
import ItemInfoPage from './routes/ItemInfoPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/create' element={<CreateItemPage />} />
        <Route path='/info' element={<ItemInfoPage />} />
      </Routes>
  </BrowserRouter>
);
