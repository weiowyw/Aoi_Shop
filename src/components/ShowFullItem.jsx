import React from 'react';

const ShowFullItem = ({item, onAdd, onShowItem}) => {

    return (
        <div className='full_item'  onClick={() => onShowItem(item)}>
            <div onClick={(e) => e.stopPropagation()}>
            <img src={item.image} alt={item.id} />
                <h2 className='item_title'>{item.title}</h2>
                <p className='item_description'>{item.description}</p>
                <p className='item_price'>{item.price}$</p>
                <p className='add_to_cart' onClick={() => onAdd(item)}>+</p>
                <p className='closing_icon' onClick={() => onShowItem(item)}>x</p>
            </div>
        </div>
    );
};

export default ShowFullItem;