import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rating from "./Rating"
import React from 'react';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded" >
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link className="text-reset text-decoration-none" to={`/product/${product._id}`}>
          <Card.Title as="div" >
            <strong >{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>
        <Card.Text as="h3">
          <div className="my-3"></div>
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product