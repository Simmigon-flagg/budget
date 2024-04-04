"use client"
import ProductCard from "./ProductCard";
import { Col, Row } from 'react-bootstrap';
import Stripe from 'stripe';
import { useState, useEffect } from "react";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export function ProductList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const response = await stripe.products.list();

        const productsWithPrices = await Promise.all(

          response.data.map(async (product) => {

            const prices = await stripe.prices.list({
              product: product.id,
              limit: 1,
            });

            const price = prices.data[0]?.unit_amount / 100;
            return { ...product, price };
          })
        );

        setItems(productsWithPrices);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (

    <>            
      <Row xs={1} md={4}
      >
        {items.map((product) => {
          return (
            <Col  align="center" key={product.id}>
              
              <ProductCard  product={product} size="small"  />
            </Col>
          )
        })}
      </Row>
    </>
  );
};



