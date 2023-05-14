import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
import Header from './components/common/header/Header'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import { useEffect, useState } from 'react'
import { CartContext } from './contexts/CartContext'
import { deserializeMap, serializeMap } from './components/utils/savingData'

function App() {
  const [cartItems, setCartItems] = useState(null)
  useEffect(() => {
    if (cartItems === null) {
      setCartItems(deserializeMap('cartItems'))
    } else {
      serializeMap('cartItems', cartItems)
    }
  }, [cartItems])

  if (!cartItems) {
    return
  }

  return (
    <BrowserRouter>
      <div className="wrapper">
        <CartContext.Provider value={{ cartItems, setCartItems }}>
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
