import { useState } from 'react'
import { Navbar } from './Navbar'

export function ProductPage() {
  const productSize = ['S', 'M', 'L']
  //map
  const sizeData = productSize?.map((size) => ({
    id: `input_${size}`,
    label: size,
  }))
  let [sizeValue, setSizeValue] = useState('')
  console.log(sizeValue)

  const handleSelectSize = (size: string) => {
    setSizeValue(size)
  }
  return (
    <div>
      <Navbar />

      <section className="outerProductContainer">
        <div>
          <img src="/classic-tee.jpg" alt="classic tee" className="teeImage" />
        </div>
        <div>
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

          <p className="sizes">
            SIZE<span className="sizeRequired">*</span>
            <span className="sizeSelected">{sizeValue}</span>
          </p>

          <div className="sizeContainer">
            {sizeData.map((size) => (
              <div className="center-align">
                <input
                  type="radio"
                  name="size"
                  id={size.id}
                  value={size.label}
                  onClick={() => handleSelectSize(size.label)}
                />
                <label htmlFor={size.id}>{size.label}</label>
              </div>
            ))}
          </div>
          <button className="addToCartButton">ADD TO CART</button>
        </div>
      </section>
    </div>
  )
}
