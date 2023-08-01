import { useState } from 'react'

export function Navbar() {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: 'Classic Tee',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      price: 75.0,
      imageURL:
        'https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg',
      sizeOptions: [
        { id: 1, label: 'S' },
        { id: 2, label: 'M' },
        { id: 3, label: 'L' },
      ],
    },
  ])

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
