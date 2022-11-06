import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './app/store.js';
import MainLayout from "./layout/MainLayout.jsx";
import './static/styles/index.scss';

const Me = lazy(()=>import('./views/Me'));
const App = lazy(()=>import('./views/App'));
const Login = lazy(()=>import('./views/Login'));
const SignUp = lazy(()=>import('./views/SignUp'));
const Url = lazy(()=>import('./views/Url'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path='/' element={<App/>}/>
              <Route path='/:id' element={<Url/>}/>
              <Route path='/me' element={<Me/>}/>
              <Route path='/Login' element={<Login/>}/>
              <Route path='/register' element={<SignUp/>}/>
            </Routes>
          </Suspense>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
