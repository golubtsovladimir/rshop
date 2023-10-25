import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx";
import Items from "./components/Items.jsx";
import { useEffect, useState } from "react";
import Categories from "./components/Categories.jsx";
import ShowFullItem from "./components/ShowFullItem.jsx";
import axios from "axios";

export default function App() {
  const [orders,setOrders] =useState([]);
  const [currentItems,setCurrentItems]=useState([]);
  const [showFullItem,setShowFullItem]=useState(false);
  const [fullItem,setFullItem]=useState([])
  const [items,setItems] =useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3001/items")
      .then((response)=>{
        setItems(response.data);
        choseCategory("all");
        setCurrentItems(response.data);
      })
      .catch((error)=>{
        console.error("Ошибка при загрузке данных", error);
      });
  }, [items]);

  const addToOrder=(item3)=>{
      if(!orders.some((el)=>el.id===item3.id)){
        setOrders([...orders,item3])
      }
    }  

  const deleteOrder =(id)=>{
    setOrders(orders.filter((el) => el.id !== id));
  }

  const choseCategory=(category)=>{
    if(category === "all"){
      setCurrentItems(items);
    }else{
      setCurrentItems(items.filter((el) => el.category === category));
    }
  }

  const onShowItem = (item)=>{
    setFullItem(item);
    setShowFullItem(!showFullItem);
  }

  return (
  <div className="wrapper">
    <Header orders={orders} onDelete={deleteOrder}/>
    <Categories choseCategory={choseCategory}/>
    <Items allItems={currentItems} onShowItem={onShowItem} onAdd={addToOrder}/>
    {showFullItem && <ShowFullItem onShowItem={onShowItem} onAdd={addToOrder} item={fullItem}/>}
    <Footer/>
  </div>
  );

  
}