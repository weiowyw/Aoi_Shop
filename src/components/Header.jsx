import React, {useState} from 'react';
import aoiLogo from '../imgs/aoi_sofinki.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Order from "./Order";

const Header = ({orders, onDelete}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);

    const getOrders = (orders) => {
        let sum = orders.reduce((sum, current) => Number(sum + (current.price * current.quantity)), 0).toFixed(2)

        return (<div>{orders.map((order, index) => (
            <Order key={`${order.id}-${index}`} onDelete={onDelete} item={order} />
        ))}
            <p className='cart_sum'>Total price: {sum}$</p>
        </div>)
    }

    return (
        <header>
            <div className='header_about'>
            <a href='#' className='logo'>
                <img className='logo_adapt' src={aoiLogo} alt='aoi' width='150'></img>
            </a>
            <ul>
                <li>
                    <a className='header_link' href='#'>About</a>
                </li>
                <li>
                    <a className='header_link' href='#'>Contacts</a>
                </li>
                <li>
                    <a className='header_link' href='#'>Login</a>
                </li>
                <li>
                    <div className='cart_icon'>
                    <ShoppingCartIcon onClick={() => setIsCartOpen(!isCartOpen)} className={`shop_cart_btn ${isCartOpen && 'active'}`}/>
                    {orders.length !== 0 && <h3 className='orders_quantity'>{orders.length}</h3>}
                    </div>
                </li>
            </ul>
                {isCartOpen && (
                    <div className='shop_cart'>
                        {orders.length === 0 ? <h3 className='empty_cart_title'>Your cart is empty</h3> : getOrders(orders)}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;