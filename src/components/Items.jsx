import Item from "./Item";
import React from "react";

const Items = ({items, onAdd, onShowItem}) => {

    return (
        <div className='items_list'>
            <div className='header_fill'></div>
                {items.map(item => (
                    <Item item={item} onAdd={onAdd} onShowItem={onShowItem} key={item.id}/>
                    )
                )}
        </div>
    );
};

export default Items;