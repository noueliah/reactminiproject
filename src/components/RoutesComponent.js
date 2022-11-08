import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

// This defines what component is rendered on each URL

function RoutesComponent() {
    return (
        <div>
            <Routes>
                <Route exact path='/components/home' element={< HomePage />}></Route>
                <Route exact path='/components/login' element={< LoginPage />}></Route>
                <Route exact path='/components/error' element={< ErrorPage />}></Route>
            </Routes>

        </div>
    )
}

export default RoutesComponent