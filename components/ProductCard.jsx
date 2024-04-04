import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../libs/CartContext';
import { useContext } from 'react';
import React from 'react';

const ProductCard = ({ product }) => {

    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);

    return (
        
        <Card className='product-card rounded border border-primary'>
            <Card.Body>
                <Card.Title className="product-title">{product.name}</Card.Title>
                {product.images[0] ?
                    <Card.Img className="product-image" src={product.images[0]} alt={`${product.name}`} />
                    :
                    <Card.Img className="product-image img-fluid port-image" src="https://placehold.co/300x225/orange/white" alt="" />}
                <Card.Text className="product-price">${(product.price.toFixed(2))}</Card.Text>
                {productQuantity > 0 ?
                    <>
                        <Form as={Row} className="quantity-form">
                            <Form.Label column="true" sm="6" className="quantity-label">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button className="add-button" sm="6" onClick={() => cart.addOneToCart(product.id, product)} >+</Button>
                                <Button className="remove-button" sm="6" onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
                            </Col>
                        </Form>
                        <Button className="delete-button" variant="danger" onClick={() => cart.deleteFromCart(product.id)}>Remove from cart</Button>
                    </>
                    :
                    <Button className="add-to-cart-button" variant="primary" onClick={() => cart.addOneToCart(product.id, product)}>Add To Cart</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default ProductCard;
