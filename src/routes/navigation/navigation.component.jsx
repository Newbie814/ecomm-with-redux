import { useContext } from 'react';

import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import Logo from '../../assets/Logo.png';

import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  WoodardLogo,
} from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <WoodardLogo src={Logo} alt='logo' className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>Shop</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to='/auth'>Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
