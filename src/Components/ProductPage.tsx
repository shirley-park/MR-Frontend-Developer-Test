import { useState } from 'react'
import { Navbar } from './Navbar'
import { useFetchProducts } from '../hooks/useFetchProducts'

export function ProductPage() {
  const product = useFetchProducts()
  const productSizes = product.sizeOptions?.map((size) => ({
    id: size.id,
    label: size.label,
  }))

  let [selectedSize, setSelectedSize] = useState('')

  const handleSelectSize = (size: string) => {
    setSelectedSize(size)
  }
  return (
    <div>
      <Navbar />

      <section className="outerProductContainer">
        <div>
          <img src="/classic-tee.jpg" alt="classic tee" className="teeImage" />
        </div>
        <div>
          <h1 className="productName">{product.title}</h1>
          <div className="priceBorder">
            <h2 className="productPrice">${product.price?.toFixed(2)}</h2>
          </div>
          <p className="productDescription">{product.description}</p>

          <p className="sizes">
            SIZE<span className="sizeRequired">*</span>
            <span className="sizeSelected">{selectedSize}</span>
          </p>

          <div className="sizeContainer">
            {productSizes?.map((size) => (
              <div className="center-align" key={size.id}>
                <input
                  type="radio"
                  name="size"
                  id={size.id.toString()}
                  value={size.label}
                  onClick={() => handleSelectSize(size.label)}
                />
                <label htmlFor={size.id.toString()}>{size.label}</label>
              </div>
            ))}
          </div>
          <button className="addToCartButton">ADD TO CART</button>
        </div>
      </section>
    </div>
  )
}
