import "./Style.css";
import products from "../../products";
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';


const ItemListContainer = ({ presentation }) => {
  const [Item, setData] =useState ([]);


const {categoryId} = useParams();

useEffect(() => {
  const getData = new Promise (resolve =>{
    setTimeout(() =>{
      resolve(Item);
    },3000)
  });
  if (categoryId){
    getData.then(res => setData(res.filter(Item => categoryId === categoryId)))
  }else {
    getData.then(res => setData(res));
  }
  

},[Item])

return(
  <Item Item={Item} />
)


};

export default ItemListContainer;


