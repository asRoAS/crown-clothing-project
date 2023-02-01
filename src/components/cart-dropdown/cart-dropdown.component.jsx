import Button from '../button/button.component';
import './cart-dropdown.component.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        <Button>Goto Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
