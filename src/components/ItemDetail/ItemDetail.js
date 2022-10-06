import React, { Component }  from 'react';
import { useState } from "react";
import Item from "../ItemList/Item"

const ItemDetail = ({ product }) => {

  return (
    <>
      <Item product={product} />
      <br/>
      <h4>{product.description}</h4>
    </>
  );
}
 
export default ItemDetail;