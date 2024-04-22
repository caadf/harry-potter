import React from 'react';
import injectContext from './store/AppContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
               {/*  <Route path='/characters/' element={<Characters />}/> */}
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default injectContext(App);