import React, { useState } from 'react'
import styles from './Product.module.css'

import Product1 from '../../assets/image-product-1.jpg'
import Product2 from '../../assets/image-product-2.jpg'
import Product3 from '../../assets/image-product-3.jpg'
import Product4 from '../../assets/image-product-4.jpg'

import ProductThumb1 from '../../assets/image-product-1-thumbnail.jpg'
import ProductThumb2 from '../../assets/image-product-2-thumbnail.jpg'
import ProductThumb3 from '../../assets/image-product-3-thumbnail.jpg'
import ProductThumb4 from '../../assets/image-product-4-thumbnail.jpg'

import Minus from '../../assets/icon-minus.svg'
import Plus from '../../assets/icon-plus.svg'

const Product = () => {
  const [mainImage, setMainImage] = useState(Product1)

  const handleThumbnailClick = (productImage) => {
    setMainImage(productImage)
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_images_550px}>
        <div className={styles.image_principal_550px}>
          <img src={mainImage} alt="Product" />
        </div>
      </div>

      <div className={styles.containerImages}>
        <div className={styles.imagePrincipal}>
          <img src={mainImage} alt="Product" />
        </div>

        <div className={styles.images}>
          <img
            src={ProductThumb1}
            alt="Thumb1"
            className={mainImage === Product1 ? styles.selected : ''}
            onClick={() => handleThumbnailClick(Product1)}
          />
          <img
            src={ProductThumb2}
            alt="Thumb2"
            className={mainImage === Product2 ? styles.selected : ''}
            onClick={() => handleThumbnailClick(Product2)}
          />
          <img
            src={ProductThumb3}
            alt="Thumb3"
            className={mainImage === Product3 ? styles.selected : ''}
            onClick={() => handleThumbnailClick(Product3)}
          />
          <img
            src={ProductThumb4}
            alt="Thumb4"
            className={mainImage === Product4 ? styles.selected : ''}
            onClick={() => handleThumbnailClick(Product4)}
          />
        </div>
      </div>

      <div className={styles.details}>
        <p className={styles.sneaker}>SNEAKER COMPANY</p>
        <h2 className={styles.title}>Fall Limited Edition Sneakers</h2>
        <p className={styles.description}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>

        <div className={styles.price_container}>
          <div className={styles.price}>
            <span>$125.00</span>
            <p>$250.00</p>
          </div>

          <div className={styles.discount}>
            <p>50%</p>
          </div>

          <div className={styles.price_550px}>
            <p>$250.00</p>
          </div>
        </div>

        <div className={styles.counter_addcart}>
          <div className={styles.counter}>
            <button>
              <img src={Minus} alt="-" />
            </button>
            <span>0</span>
            <button>
              <img src={Plus} alt="+" />
            </button>
          </div>

          <button>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fill-rule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
