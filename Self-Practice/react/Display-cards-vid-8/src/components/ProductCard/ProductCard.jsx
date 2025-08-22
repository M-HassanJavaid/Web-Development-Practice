import React from 'react'
import './productCard.css';

const ProductCard = ({productInfo}) => {
    return (
        <div className="product-card">
            <img src={productInfo.image} alt="Image could not be load for some reason!" />
            <div className="product-title">{productInfo.title}</div>
            <div className="product-category">{productInfo.category}</div>
            <div className="product-description">{productInfo.description}</div>
            <div className="product-price">{productInfo.price}$</div>
            <div className="product-rating">⭐ {productInfo.rating.rate} ({productInfo.rating.count} reviews)</div>
            <button className="buy-button">Add to Cart</button>
        </div>
    )
}

export default ProductCard
