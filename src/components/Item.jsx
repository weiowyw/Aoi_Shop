import React, {useState} from 'react';
import NotificationModal from "./NotificationalModal";

const Item = ({item, onAdd, onShowItem}) => {

    const [isNotifVisible, setIsNotifVisible] = useState(false);

    const handleCloseNotification = () => {
        setIsNotifVisible(false);
    };

    item.quantity = 1;
    return (
        <div className='item' >
            <img src={item.image} alt={item.id} onClick={() => onShowItem(item)} />
            <div className='item_sub_container'>
            <h2 className='item_title'>{item.title}</h2>
            <p className='item_price'>{item.price}$</p>
            </div>
            <div className='add_to_cart' onClick={() => {onAdd(item); setIsNotifVisible(true)}}>+</div>
            {isNotifVisible && <NotificationModal
                message="Added to cart"
                isVisible={isNotifVisible}
                onClose={handleCloseNotification}
            />}
        </div>
    );
};

export default Item;