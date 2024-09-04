import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Order = ({item, onDelete}) => {
    return (
        <div className='cart_item'>
            <img src={item.image} alt={item.id} />
            <h2 className='item_title'>{item.title}</h2>
            <p className='item_price'>{item.price}$</p>
            <p className='item_quantity'>{item.quantity}</p>
            <DeleteIcon onClick={() => onDelete(item.id)} className='delete_icon' />
        </div>
    );
};

export default Order;