import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './app/store.js';
import MainLayout from "./layout/MainLayout.jsx";
import App from './views/App.jsx';
import Login from './views/Login.jsx';
import SignUp from './views/SignUp.jsx';
import Me from './views/Me.jsx';
import './static/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/me' element={<Me/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/register' element={<SignUp/>}/>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
