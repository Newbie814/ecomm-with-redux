import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import Button from '../../components/button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';

import {
  CartDropdownContainer,
  EmptyCartMessage,
  CartItems,
} from './cart-dropdown.styles.jsx';

import React from 'react';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutPageHandler = () => {
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
