import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setProducts} from '../redux/actions/productsActions';
import axios from 'axios';
import ProductComponent from './ProductComponent';

function ProductListing() {

  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => {
      console.log(err);
    })
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, [])

  console.log('Products:', products);
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>

    )
}

export default ProductListing;
