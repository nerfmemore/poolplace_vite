import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { CityProvider } from './CityContext.jsx';
import App from './App.jsx'
import 'normalize.css'
import './styles/index.scss'
import MainPage from './pages/MainPage.jsx'
import Catalog from './pages/Catalog.jsx'
import OurServices from './pages/OurServices.jsx'
import Contacts from './pages/Contacts.jsx'
import Pools from './pages/Pools.jsx';
import Promo from './pages/Promo.jsx';
import SinglePromo from './pages/SinglePromo.jsx';
import Projects from './pages/Projects.jsx';
import OnePool from './pages/SinglePool.jsx';
//import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/Catalog',
    element: <Catalog />
  },
  {
    path: '/OurServices',
    element: <OurServices />
  },
  {
    path: '/Contacts',
    element: <Contacts />
  },
  {
    path: '/Pools',
    element: <Pools />
  },
  {
    path: '/Pools/:id',
    element: <OnePool />
  },
  {
    path: '/Projects',
    element: <Projects />
  },
  {
    path: '/Promo',
    element: <Promo />
  },
  {
    path: '/Promo/:id',
    element: <SinglePromo />
  }
])

const client = new ApolloClient({
  uri: 'https://cx83588-wordpress-0q6p2.tw1.ru/graphql',
  cache: new InMemoryCache(),
})

const CityContext = createContext(['Moscow', 'Saint-Petersburg']);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <CityProvider defaultCity='Москва'>
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/Catalog' element={<Catalog />}></Route>
          <Route path='/OurServices' element={<OurServices />}></Route>
          <Route path='/Contacts' element={<Contacts />}></Route>
          <Route path='/Pools' element={<Pools />}></Route>
          <Route path='/Pools/:id' element={<OnePool />}></Route>
          <Route path='/Projects' element={<Projects />}></Route>
          <Route path='/Promo' element={<Promo />}></Route>
          <Route path='/Promo/:id' element={<SinglePromo />}></Route>
        </Routes>
        </CityProvider>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
)
