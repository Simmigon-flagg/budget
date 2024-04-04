"use client"
import Link from "next/link";
import { Navbar, Modal, } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from "../libs/CartContext";
import CartProduct from './CartProduct';
import { FaShoppingCart } from 'react-icons/fa'
import { loadStripe } from "@stripe/stripe-js";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.


export default function NavbarComponent() {

  const [stripeError, setStripeError] = useState(null);  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const goToCheckoutPage = async () => {

    const checkoutOptions = {
      lineItems: cart.items.map(({ price, quantity }) => ({
        price,
        quantity
      })),
      mode: "payment",
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`
    };
  };

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>


      <Modal show={show} onHide={handleClose} className="cart-modal">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title">Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {productsCount > 0 ?
            <>
              <p className="cart-description">Your Cart:</p>

              {cart.items.map((currentProduct) => (
                <CartProduct key={currentProduct.id} product={currentProduct} className="product-item" />
              ))}

              <h1 className="total-cost">Total: {cart.getTotalCost().toFixed(2)}</h1>

              <Button variant="success" onClick={goToCheckoutPage} className="checkout-btn">
                Checkout
              </Button>
            </>
            :
            <h1 className="empty-cart-message">Your Cart is Empty!</h1>
          }
        </Modal.Body>
      </Modal>

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>          
            <Link href="/" className="nav-link">Company</Link>                     
          </Typography>

          <Button color="inherit">
            <Link href="/" className="nav-link">Home</Link>
          </Button>

          <Button color="inherit">
            <Link href="/about" className="nav-link">About</Link>
          </Button>

          <Button color="inherit">
            <Link href="/dashboard" className="nav-link">Dashboard</Link>
          </Button>
          <Button color="inherit">
            <Link href="/contact" className="nav-link">Contact</Link>
          </Button>
          <Button onClick={handleShow} className="cart-btn">

            <FaShoppingCart />
            Cart (
            {productsCount}
            )

          </Button>
        </Toolbar>
      </AppBar>
      Cart (
            {productsCount}
            )
    </>
  )
}

