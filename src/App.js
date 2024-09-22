import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import {useEffect, useState} from "react";
import ShowFullItem from "./components/ShowFullItem";

function App() {
    const [items, setItems] = useState([]);
    const [orders, setOrders] = useState([]);
    const [isShowFullItem, setIsShowFullITem] = useState(false);
    const [itemDesc, setItemDesk] = useState({});

    useEffect(() => {
        const getItems = async() => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            setItems(data);
        }
        getItems();
    }, []);

    const addToOrder = (item) => {
        let isInArray = false;
        orders.forEach(order => {
            if(order.id === item.id)
                isInArray = true;
        })
        if (isInArray){
            setOrders([...orders, item]);
             //item.quantity++;
        }else
            setOrders([...orders, item]);
    }

    const onDeleteItem = (id) => {
        const index = orders.findIndex(order => order.id === id);

        if (index !== -1) {
            const updatedOrders = [...orders];
            updatedOrders.splice(index, 1);

            setOrders(updatedOrders);
            console.log();
        }
    };


    const onShowItem = (item) => {
        setItemDesk(item)
        setIsShowFullITem(!isShowFullItem);
    }

  return (
      <div className='wrap_wrapper'>
    <div className='wrapper'>
      <Header orders={orders} onDelete={onDeleteItem}/>
        <Items onShowItem={onShowItem} items={items} onAdd={addToOrder}/>
        {isShowFullItem && <ShowFullItem item={itemDesc} onAdd={addToOrder} onShowItem={onShowItem} />}
      <Footer />
    </div>
      </div>
  );
}

export default App;
