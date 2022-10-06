import React, { Component }  from 'react';
import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget/CartWidget';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProducts, getProductsByCategory } from '../../utils/products';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    } else {
      getAllProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    }
  }, [categoryId])

  return (
    <Container>
      <h1 class='formatContainer'>Nuevos Ingresos</h1>
      <ItemList products={products} />
    </Container>
  );
}
 
export default ItemListContainer;