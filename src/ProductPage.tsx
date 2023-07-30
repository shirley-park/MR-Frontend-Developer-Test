// import teeImage from '../public/classic-tee.jpg'

export function ProductPage() {
  return (
    <>
      <div>
        <nav className="navBar">
          <button className="myCart">My Cart (number of items in cart)</button>
        </nav>
      </div>

      <section className="outerProductContainer">
        <div className="leftHandSide">
          <img src="/classic-tee.jpg" alt="classic tee" />
        </div>
        <div className="rightHandSide">
          <h1 className="productName">Classic Tee</h1>
          <div className="priceBorder">
            <h2 className="productPrice">$75.00</h2>
          </div>
          <p className="productDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <h3 className="sizes">SIZE*</h3>
          <div>
            <button className="sizeButton">S</button>
            <button className="sizeButton">M</button>
            <button className="sizeButton">L</button>
          </div>

          <button>ADD TO CART</button>
        </div>
      </section>
    </>
  )
}
