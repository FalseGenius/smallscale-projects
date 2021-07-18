import React from 'react'
// import 'semantic-ui-css/semantic.min.css'
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const {id, title, image, price, category} = product;
    return (
      <div style={{marginTop:'15px'}} className='four wide column' key={id}>
        <Link to={`/product/${id}`} >
        <div className='ui link cards' >
          <div className='card' style={{height: '450px'}}>
            <div className='image'>
              <img style={{height: '300px', backgroundColor: 'white', backgroundSize: 'contain', padding: '25px'}}src={image} alt={title} />
            </div>
            <div className='content'>
              <div className='header' style={{overflow: 'hidden', textOverflow:'ellipsis', display: '-webkit-box', webkitLineClamp:'2', webKitBoxOrient:'vertical'}}>{title}</div>
              <div className='meta price'>${price}</div>
              <div className='meta'>{category}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>

    );
  });

  return (
    <>{renderList}</>
  )
}

export default ProductComponent;
