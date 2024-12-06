import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './containers/home/Home.jsx'
import Whatisgpt from './containers/whatIsGpt/WhatisGpt.jsx'
import Openai from './containers/openai/OpenAi.jsx'
import Casestudies from './containers/casestudies/CaseStudies.jsx'
import Libries from './containers/libries/Libries.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='whatisgpt' element={<Whatisgpt />}/>
        <Route path='openai' element={<Openai />} />
        <Route path='casestudies' element={<Casestudies />} />
        <Route path='libries' element={<Libries />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
