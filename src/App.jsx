import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
import Header from './components/common/header/Header'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import { useState } from 'react'
import { CartContext } from './contexts/CartContext'

function App() {
  const [cartItems, setCartItems] = useState(new Map())

  return (
    <BrowserRouter>
      <div className="wrapper">
        <CartContext.Provider value={{cartItems, setCartItems}}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </CartContext.Provider>
      </div>
    </BrowserRouter>
  )
}

export default App
