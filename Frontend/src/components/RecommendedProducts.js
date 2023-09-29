// RecommendedProducts.js
import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product"; // Import the Product component

const RecommendedProducts = ({ products }) => {
  return (
    <Row>
      {products.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default RecommendedProducts;
