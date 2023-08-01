import { useState } from 'react'
import { product } from '../models/product'

export function Navbar() {
  const [cart, setCart] = useState([] as product[])

  const [cartOpen, setCartOpen] = useState(false)

  const toggleOpen = () => {
    setCartOpen(!cartOpen)
  }

  return (
    <div className="navBarContainer">
      <nav className="navBar">
        <button className="myCart" onClick={toggleOpen}>
          My Cart (4)
        </button>
      </nav>
      {cartOpen && (
        <>
          <button className="openCart" onClick={toggleOpen}>
            My Cart (4)
          </button>
          <div className="cartContainer">
            <div className="cartItemsContainer">
              <div>
                <img
                  src="/classic-tee.jpg"
                  alt="classic tee"
                  className="cartProductImage"
                />
              </div>
              <div>
                <p>Classic Tee</p>

                <p>
                  <span>quantity x</span> $75.00
                </p>

                <p className="sizes">Size: S</p>
              </div>
              <div>
                <img
                  src="/classic-tee.jpg"
                  alt="classic tee"
                  className="cartProductImage"
                />
              </div>
              <div>
                <p>Classic Tee</p>

                <p>
                  <span>quantity x</span> $75.00
                </p>

                <p className="sizes">Size: S</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
