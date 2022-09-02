import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../../components/button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyCartMessage,
  CartItems,
} from './cart-dropdown.styles.jsx';

import React from 'react';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);
  const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);
  const navigate = useNavigate();

  const goToCheckoutPageHandler = () => {
    toggleCartDropdown();
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyCartMessage>Cart is empty</EmptyCartMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutPageHandler}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
