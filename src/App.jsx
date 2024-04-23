import React from 'react';
import injectContext from './store/AppContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Spells from './pages/Spells';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
               <Route path='/characters/:id' element={<Characters />}/>
               <Route path='/Spells/' element={<Spells />}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default injectContext(App);