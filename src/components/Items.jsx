import Item from "./Item";
import React from "react";

const Items = ({items, onAdd, onShowItem}) => {

    return (
        <div className='items_list'>
            <div className='header_fill'></div>
            {items.length === 0 ? <p>
                If this messsage pops up, most likely our servers are down and unable to provide all the products.
            </p> : items.map(item => (
                        <Item item={item} onAdd={onAdd} onShowItem={onShowItem} key={item.id}/>
                    )
                )}
        </div>
    );
};

export default Items;