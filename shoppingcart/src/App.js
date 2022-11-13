import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';
import "./App.css"
import Navbar from './components/Navbar';
import store from './store/store';
import { Provider } from "react-redux";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App