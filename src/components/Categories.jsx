import React from "react";


export default function Categories (props) {
  
  const categories=[
    {
      key: "all",
      name:"Все"
    },

    {
      key:"New Balance",
      name:"New Balance"
    },
    {
      key:"Nike",
      name:"Nike"
    },
    {
      key:"Adidas",
      name:"Adidas"
    },
    {
      key:"Puma",
      name:"Puma"
    }
  ];

  return(
    <div className="categories">
      {categories.map(el=>(
        <div key={el.key} onClick={()=>props.choseCategory(el.key)}>{el.name}</div>
      ))}
    </div>
  );
}