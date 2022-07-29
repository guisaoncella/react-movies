import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App/>}>  
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="movie/:id" element={<h1>Movie</h1>} />
                    <Route path="search" element={<h1>Search</h1>} />
                </Route> 
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
